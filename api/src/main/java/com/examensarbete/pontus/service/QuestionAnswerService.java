package com.examensarbete.pontus.service;


import com.examensarbete.pontus.model.Question;
import com.examensarbete.pontus.model.QuestionAnswer;
import com.examensarbete.pontus.repository.QuestionAnswerRepository;
import com.examensarbete.pontus.repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class QuestionAnswerService {
    @Autowired
    private QuestionRepository questionRepository;
    @Autowired
    private QuestionAnswerRepository questionAnswerRepository;

    public QuestionAnswer addQuestionAnswer(Long question_id,QuestionAnswer questionAnswer){
        Optional<Question> question = questionRepository.findById(question_id);
        List<QuestionAnswer> questionAnswerList = question.get().getQuestionAnswers();
        questionAnswerList.add(questionAnswer);
        questionAnswer.setQuestion(question.get());
        return questionAnswerRepository.save(questionAnswer);
    }

    public Iterable<QuestionAnswer> findAllByQuestionId(Long id){
        return questionAnswerRepository.findAllByQuestionId(id);
    }
    public QuestionAnswer updateById(Long id, QuestionAnswer questionAnswer){
        questionAnswer.setId(id);
        return questionAnswerRepository.save(questionAnswer);
    }
    public void deleteQuestionAnswerById(Long id){
        questionAnswerRepository.deleteById(id);
    }
}
