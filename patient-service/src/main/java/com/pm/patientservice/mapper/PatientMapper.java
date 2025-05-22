package com.pm.patientservice.mapper;

import com.pm.patientservice.dto.PatientResponeDto;
import com.pm.patientservice.model.Patient;

public class PatientMapper {

    public static PatientResponeDto toPatientResponeDto(Patient patient) {
        PatientResponeDto patientResponeDto = null;
        try {
            patientResponeDto = new PatientResponeDto();
            patientResponeDto.setId(patient.getId().toString());
            patientResponeDto.setName(patient.getName());
            patientResponeDto.setAddress(patient.getAddress());
            patientResponeDto.setEmail(patient.getEmail());
            patientResponeDto.setDateOfBirth(patient.getDateOfBirth().toString());
        } catch (Exception e) {
            e.printStackTrace();
        }

        return patientResponeDto;
    }
}
