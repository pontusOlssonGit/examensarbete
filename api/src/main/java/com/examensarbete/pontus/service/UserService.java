package com.examensarbete.pontus.service;

import com.examensarbete.pontus.exceptions.UsernameNotUniqueException;
import com.examensarbete.pontus.model.User;
import com.examensarbete.pontus.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;



    public User saveUser(User user){

        try {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            user.setUsername(user.getUsername());
            user.setConfirmPassword("");
            return userRepository.save(user);
        } catch(Exception e){
            throw new UsernameNotUniqueException("Username '"+ user.getUsername() +"' already exist.");
        }

    }
}
