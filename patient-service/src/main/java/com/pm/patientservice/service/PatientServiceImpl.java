package com.pm.patientservice.service;

import com.pm.patientservice.dto.PatientResponeDto;
import com.pm.patientservice.mapper.PatientMapper;
import com.pm.patientservice.model.Patient;
import com.pm.patientservice.repository.PatientRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PatientServiceImpl implements PatientService {

    private PatientRepository patientRepository;

    PatientServiceImpl(PatientRepository patientRepository) {
        this.patientRepository = patientRepository;
    }


    @Override
    public List<PatientResponeDto> getPatients() {
        List<PatientResponeDto> response = null;
        try {

            List<Patient>patients = patientRepository.findAll();

            if(!patients.isEmpty()) {
                response = new ArrayList<PatientResponeDto>();

                response = patients.stream().map(PatientMapper::toPatientResponeDto).toList();
            } else {
                System.err.println("Patient list is empty");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

        return  response;
    }
}
