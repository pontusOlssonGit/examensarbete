package com.examensarbete.pontus.controller;

import com.examensarbete.pontus.model.User;
import com.examensarbete.pontus.payload.JWTSuccessRes;
import com.examensarbete.pontus.payload.LoginReq;
import com.examensarbete.pontus.security.JwtTokenProvider;
import com.examensarbete.pontus.service.UserService;
import com.examensarbete.pontus.service.ValidationService;
import com.examensarbete.pontus.validator.UserValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import static com.examensarbete.pontus.security.SecurityConstants.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private ValidationService validationService;

    @Autowired
    private UserValidator userValidator;

    @Autowired
    private JwtTokenProvider jwtTokenProvider;

    @Autowired
    private AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginReq loginReq, BindingResult bindingResult){
        ResponseEntity<?> error = validationService.getValidation(bindingResult);
        if(error != null) return error;

        Authentication authentication = authenticationManager.authenticate
                (new UsernamePasswordAuthenticationToken(
                loginReq.getUsername(),
                loginReq.getPassword())
                );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = TOKEN_PREFIX + jwtTokenProvider.generateToken(authentication);
        return ResponseEntity.ok(new JWTSuccessRes(true,jwt));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@Valid @RequestBody User user, BindingResult bindingResult){
        userValidator.validate(user,bindingResult);
        ResponseEntity<?> error = validationService.getValidation(bindingResult);
        if(error!=null) return error;

        User newUser = userService.saveUser(user);
        return new ResponseEntity<User>(newUser, HttpStatus.CREATED);
    }
}
