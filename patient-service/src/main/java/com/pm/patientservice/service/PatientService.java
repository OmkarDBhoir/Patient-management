package com.pm.patientservice.service;

import com.pm.patientservice.dto.PatientResponeDto;
import org.springframework.stereotype.Service;

import java.util.List;

public interface PatientService {

    public List<PatientResponeDto> getPatients();
}
