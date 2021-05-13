package com.examensarbete.pontus.controller;

import com.examensarbete.pontus.model.Question;
import com.examensarbete.pontus.model.QuestionAnswer;
import com.examensarbete.pontus.service.QuestionAnswerService;
import com.examensarbete.pontus.service.QuestionService;
import com.examensarbete.pontus.service.ValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RestController
@RequestMapping("/api/answers")
@CrossOrigin
public class QuestionAnswerController {
    @Autowired
    private QuestionService questionService;

    @Autowired
    private QuestionAnswerService questionAnswerService;

    @Autowired
    ValidationService validationService;

    @PostMapping("/{question_id}")
    public ResponseEntity<?> addAnswer(@Valid @RequestBody QuestionAnswer questionAnswer
                                        ,BindingResult bindingResult,
                                         @PathVariable Long question_id){
        ResponseEntity<?> error = validationService.getValidation(bindingResult);
        if(error!=null) return error;
        if(!questionService.findById(question_id).isPresent()){
            return new ResponseEntity<String>("No question with the ID " + question_id +" found.",HttpStatus.NOT_FOUND);
        }
        questionAnswerService.addQuestionAnswer(question_id, questionAnswer);
        return new ResponseEntity<String>(questionAnswer.getAnswer() + " added to question with ID: " + questionAnswer.getQuestion().toString(), HttpStatus.CREATED);
    }
    @GetMapping("/{question_id}")
    public Iterable<QuestionAnswer> getQuestionAnswers(@PathVariable Long question_id){
        return questionAnswerService.findAllByQuestionId(question_id);
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<?> updateQuestionAnswer(@PathVariable Long id,@Valid @RequestBody QuestionAnswer questionAnswer,BindingResult bindingResult){
        ResponseEntity<?> error = validationService.getValidation(bindingResult);
        if(error!=null) return error;
        try{
        questionAnswerService.updateById(id,questionAnswer);
        } catch (Exception e){
            return new ResponseEntity<String>("Couldn't find any answer with ID: " + id,HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<QuestionAnswer>(questionAnswer, HttpStatus.CREATED);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteQuestionAnswerById(@PathVariable Long id) {
        try {
            questionAnswerService.deleteQuestionAnswerById(id);
        } catch(Exception e){
            return new ResponseEntity<String>("Answer with id " + id + " not found.",HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<String>("Answer with id " + id + " was deleted", HttpStatus.OK);
    }
}
