package com.examensarbete.pontus.service;

import com.examensarbete.pontus.model.Question;
import com.examensarbete.pontus.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;


    public Question saveOrUpdateQuestion(Question question){
        try {
            return questionRepository.save(question);
        } catch (Exception e){
            return null;
        }
    }
    public Optional<Question> findById(Long id){
        return questionRepository.findById(id);
    }
    public Iterable<Question> findAll(){
        return questionRepository.findAll();
    }
    public void deleteQuestionById(Long id){
        questionRepository.deleteById(id);
    }
}
