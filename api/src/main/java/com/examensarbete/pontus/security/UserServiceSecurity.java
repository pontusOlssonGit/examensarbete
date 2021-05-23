package com.examensarbete.pontus.security;

import com.examensarbete.pontus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceSecurity {

    @Autowired UserRepository userRepository;
}

