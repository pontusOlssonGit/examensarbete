package com.examensarbete.pontus.controller;


import com.examensarbete.pontus.model.Question;
import com.examensarbete.pontus.service.QuestionService;
import com.examensarbete.pontus.service.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/question")
@CrossOrigin
public class QuestionController {

    @Autowired
    private QuestionService questionService;

    @Autowired
    ValidationService validationService;

    @PostMapping("")
    public ResponseEntity<?> createOrUpdateQuestion(@Valid @RequestBody Question question, BindingResult bindingResult){

        ResponseEntity<?> error = validationService.getValidation(bindingResult);
        if(error!=null) return error;

        Question questionToSave = questionService.saveOrUpdateQuestion(question);
        return new ResponseEntity<Question>(question, HttpStatus.CREATED);
    }
    @GetMapping("/{questionId}")
    public ResponseEntity<?> getQuestionById(@PathVariable Long questionId){
        Optional<Question> question = questionService.findById(questionId);
        return new ResponseEntity<Optional<Question>>(question, HttpStatus.OK);
    }
    @GetMapping("/all")
    public Iterable<Question> getAllQuestions(){
        return questionService.findAll();
    }
    @DeleteMapping("/delete/{questionId}")
    public ResponseEntity<?> deleteQuestionById(@PathVariable Long questionId) {
        try {
            questionService.deleteQuestionById(questionId);
        } catch(Exception e){
            return new ResponseEntity<String>("Question with id " + questionId + " not found.",HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>("Question with id " + questionId + " was deleted", HttpStatus.OK);
    }
}
