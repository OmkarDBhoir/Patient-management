package com.pm.patientservice.service;

import com.pm.patientservice.dto.PatientRequestDto;
import com.pm.patientservice.dto.PatientResponeDto;
import com.pm.patientservice.dto.RecentPatientDtlsResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

public interface PatientService {

    public List<PatientResponeDto> getPatients();

    public PatientResponeDto createPatient(PatientRequestDto patient);

    public PatientResponeDto updatePatient(UUID id, PatientRequestDto patient);

    public void deletePatient(UUID id);

    public List<RecentPatientDtlsResponseDto> getRecentPatients();
}
