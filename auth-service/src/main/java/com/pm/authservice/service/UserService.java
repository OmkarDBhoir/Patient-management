package com.pm.authservice.service;

import com.pm.authservice.model.User;

import java.util.Optional;

public interface UserService {

    public Optional<User> findUserByEmail(String email);
}
