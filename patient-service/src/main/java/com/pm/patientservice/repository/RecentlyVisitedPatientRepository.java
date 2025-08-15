package com.pm.patientservice.repository;

import com.pm.patientservice.model.RecentlyVisitedPatient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface RecentlyVisitedPatientRepository extends JpaRepository<RecentlyVisitedPatient, UUID> {
    List<RecentlyVisitedPatient> findAllByOrderByVisitDateDesc();
}
