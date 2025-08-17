package com.pm.authservice.service;

import com.pm.authservice.config.AuthServiceConstants;
import com.pm.authservice.dto.RegistrationRequestDTO;
import com.pm.authservice.dto.RegistrationResponseDTO;
import com.pm.authservice.model.RegistrationResponse;
import com.pm.authservice.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private static final Logger log = LoggerFactory.getLogger(UserServiceImpl.class);

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Override
    public Optional<RegistrationResponse> findUserByEmail(String email) {
        try {
            return userRepository.findByEmail(email);
        } catch (Exception e) {
            log.error("Error which finding user: ", e);
        }
        return Optional.empty();
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public RegistrationResponseDTO register(RegistrationRequestDTO user) {
        RegistrationResponse registrationResponse = new RegistrationResponse();
        registrationResponse.setEmail(user.getEmail());
        registrationResponse.setPassword(passwordEncoder.encode(user.getPassword()));
        registrationResponse.setRole(user.getRole());
        userRepository.save(registrationResponse);


        return new RegistrationResponseDTO(
                registrationResponse.getId(),
                registrationResponse.getEmail(),
                registrationResponse.getRole(),
                AuthServiceConstants.SUCCESS
        );
    }
}
