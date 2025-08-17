package com.pm.authservice.service;

import com.pm.authservice.dto.RegistrationRequestDTO;
import com.pm.authservice.dto.RegistrationResponseDTO;
import com.pm.authservice.model.RegistrationResponse;

import java.util.Optional;

public interface UserService {

    public Optional<RegistrationResponse> findUserByEmail(String email);

    public boolean existsByEmail(String email);

    public RegistrationResponseDTO register(RegistrationRequestDTO user);
}
