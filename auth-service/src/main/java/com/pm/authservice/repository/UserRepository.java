package com.pm.authservice.repository;


import com.pm.authservice.model.RegistrationResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<RegistrationResponse, UUID> {

    Optional<RegistrationResponse> findByEmail(String email);

    boolean existsByEmail(String email);
}
