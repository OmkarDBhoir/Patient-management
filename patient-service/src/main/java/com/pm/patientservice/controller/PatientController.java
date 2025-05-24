package com.pm.patientservice.controller;

import com.pm.patientservice.dto.PatientRequestDto;
import com.pm.patientservice.dto.PatientResponeDto;
import com.pm.patientservice.service.PatientService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    private final PatientService patientService;

    public PatientController(PatientService patientService) {
        this.patientService = patientService;
    }

    @GetMapping("/getPatients")
    public ResponseEntity<List<PatientResponeDto>> getPatients() {
        List<PatientResponeDto> patients = null;
        try {
            patients = patientService.getPatients();

            return ResponseEntity.ok().body(patients);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/createPatient")
    public ResponseEntity<PatientResponeDto> createPatient(@Valid @RequestBody PatientRequestDto patientRequestDto) {
        PatientResponeDto patientResponeDto = null;

        try {

            patientResponeDto = patientService.createPatient(patientRequestDto);

            return ResponseEntity.ok().body(patientResponeDto);

        } catch (Exception e) {
            e.printStackTrace();

            return ResponseEntity.internalServerError().build();
        }
    }

}
