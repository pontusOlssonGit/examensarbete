package com.examensarbete.pontus.validator;

import com.examensarbete.pontus.model.User;
import org.springframework.stereotype.Component;
import org.springframework.validation.Errors;
import org.springframework.validation.Validator;


@Component
public class UserValidator implements Validator {

    @Override
    public boolean supports(Class<?> aClass) {
        return User.class.equals(aClass);
    }

    @Override
    public void validate(Object obj, Errors errors) {
        User user = (User)obj;
        if(user.getPassword().length() <6){
            errors.rejectValue("password", "Length", "Password must be at least 6 characters");
        }
        if(!user.getPassword().equals(user.getConfirmPassword())){
            errors.rejectValue("confirmPassword", "Match", "Passwords must match");
        }

    }
}
