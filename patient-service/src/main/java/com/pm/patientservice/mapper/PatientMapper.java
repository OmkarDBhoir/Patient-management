package com.pm.patientservice.mapper;

import com.pm.patientservice.dto.PatientRequestDto;
import com.pm.patientservice.dto.PatientResponeDto;
import com.pm.patientservice.dto.RecentPatientDtlsResponseDto;
import com.pm.patientservice.model.Patient;
import com.pm.patientservice.model.RecentlyVisitedPatient;
import com.pm.patientservice.utils.DateUtils;
import com.pm.patientservice.utils.PatientConstants;

import java.time.LocalDate;
import java.util.Date;

public class PatientMapper {

    public static PatientResponeDto toPatientResponeDto(Patient patient) {

        PatientResponeDto patientResponeDto = new PatientResponeDto();
        patientResponeDto.setId(patient.getId().toString());
        patientResponeDto.setName(patient.getName());
        patientResponeDto.setAddress(patient.getAddress());
        patientResponeDto.setEmail(patient.getEmail());
        patientResponeDto.setDateOfBirth(patient.getDateOfBirth().toString());

        return patientResponeDto;
    }

    public static Patient toPatient(PatientRequestDto patientRequestDto) {

        Patient patient = new Patient();
        patient.setName(patientRequestDto.getName());
        patient.setEmail(patientRequestDto.getEmail());
        patient.setAddress(patientRequestDto.getAddress());
        patient.setDateOfBirth(DateUtils.convertStringToDate(patientRequestDto.getDateOfBirth()));
        patient.setRegistredDate(DateUtils.convertStringToDate(patientRequestDto.getRegisterDate()));
        return patient;
    }

    public static RecentPatientDtlsResponseDto toRecentPatientDtlsResponseDto(RecentlyVisitedPatient patient) {
        RecentPatientDtlsResponseDto recentPatientDtlsResponseDto = new RecentPatientDtlsResponseDto();

        recentPatientDtlsResponseDto.setName(patient.getPatient().getName());
        recentPatientDtlsResponseDto.setAge(String.valueOf(patient.getPatient().getAge()));
        recentPatientDtlsResponseDto.setGender(patient.getPatient().getGender());
        recentPatientDtlsResponseDto.setLastVisit(DateUtils.getStringFromDate(patient.getVisitDate()));

        return recentPatientDtlsResponseDto;
    }
}
