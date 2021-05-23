package com.examensarbete.pontus.exceptions;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
@RestController
public class CustomExceptionHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler
    public final ResponseEntity<Object> handleUsernameNotUnique(UsernameNotUniqueException e, WebRequest webRequest){
        UsernameNotUniqueResponse eResponse = new UsernameNotUniqueResponse(e.getMessage());
        return new ResponseEntity(eResponse, HttpStatus.BAD_REQUEST);

    }
}
