package com.pm.patientservice.model;

import com.pm.patientservice.model.Patient;
import jakarta.persistence.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "recently_visited_patient", schema = "public")
public class RecentlyVisitedPatient {

    @Id
    @GeneratedValue
    @Column(name = "id", columnDefinition = "uuid", updatable = false, nullable = false)
    private UUID visitId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "patient_id", nullable = false)
    private Patient patient;

    @Column(name = "visit_date", nullable = false)
    @Temporal(TemporalType.DATE)
    private Date visitDate;

    @Column(name = "visit_reason", length = 255)
    private String visitReason;

    @Column(name = "notes")
    private String notes;

    // Constructors
    public RecentlyVisitedPatient() {}

    public RecentlyVisitedPatient(Patient patient, String visitReason, String notes) {
        this.patient = patient;
        this.visitReason = visitReason;
        this.notes = notes;
        this.visitDate = new Date();
    }

    // Getters and Setters
    public UUID getVisitId() {
        return visitId;
    }

    public void setVisitId(UUID visitId) {
        this.visitId = visitId;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Date getVisitDate() {
        return visitDate;
    }

    public void setVisitDate(Date visitDate) {
        this.visitDate = visitDate;
    }

    public String getVisitReason() {
        return visitReason;
    }

    public void setVisitReason(String visitReason) {
        this.visitReason = visitReason;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }
}
