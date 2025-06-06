package com.pm.patientservice.service;

import com.pm.patientservice.dto.PatientRequestDto;
import com.pm.patientservice.dto.PatientResponeDto;
import com.pm.patientservice.exceptions.EmailAlreadyExistsException;
import com.pm.patientservice.exceptions.PatientNotFoundException;
import com.pm.patientservice.grpc.BillingServiceGrpcClient;
import com.pm.patientservice.kafka.KafkaProducer;
import com.pm.patientservice.mapper.PatientMapper;
import com.pm.patientservice.model.Patient;
import com.pm.patientservice.repository.PatientRepository;
import com.pm.patientservice.utils.DateUtils;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;
    private final BillingServiceGrpcClient billingServiceGrpcClient;
    private final KafkaProducer kafkaProducer;

    public PatientServiceImpl(PatientRepository patientRepository, BillingServiceGrpcClient billingServiceGrpcClient, KafkaProducer kafkaProducer) {
        this.patientRepository = patientRepository;
        this.billingServiceGrpcClient = billingServiceGrpcClient;
        this.kafkaProducer = kafkaProducer;
    }


    @Override
    public List<PatientResponeDto> getPatients() {
        List<Patient>patients = patientRepository.findAll();
        return  patients.stream().map(PatientMapper::toPatientResponeDto).toList();
    }

    @Override
    public PatientResponeDto createPatient(PatientRequestDto patientRequestDto) {

        if(patientRepository.existsByEmail(patientRequestDto.getEmail())) {
            throw new EmailAlreadyExistsException("A patient with same email already exists "
                    + patientRequestDto.getEmail());
        }
        Patient patient = patientRepository.save(PatientMapper.toPatient(patientRequestDto));

        billingServiceGrpcClient.createBillingAccount(patient.getId().toString(), patient.getName(), patient.getEmail());
        return PatientMapper.toPatientResponeDto(patient);
    }

    @Override
    public PatientResponeDto updatePatient(UUID id, PatientRequestDto patientRequestDto) {
        Patient patient = patientRepository.findById(id).orElseThrow(() -> new PatientNotFoundException("patient not found with ID: " + id));
        if(patientRepository.existsByEmailAndIdNot(patientRequestDto.getEmail(), id)) {
            throw new EmailAlreadyExistsException("A patient with same email already exists "
                    + patientRequestDto.getEmail());
        }

        patient.setName(patientRequestDto.getName());
        patient.setAddress(patientRequestDto.getAddress());
        patient.setEmail(patientRequestDto.getEmail());
        patient.setDateOfBirth(DateUtils.convertStringToDate(patientRequestDto.getDateOfBirth()));
        patientRepository.save(patient);
        kafkaProducer.sendEvent(patient);

        return PatientMapper.toPatientResponeDto(patient);
    }

    @Override
    public void deletePatient(UUID id) {
        patientRepository.deleteById(id);
    }

}
