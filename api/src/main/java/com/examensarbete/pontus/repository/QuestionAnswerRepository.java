package com.examensarbete.pontus.repository;

import com.examensarbete.pontus.model.QuestionAnswer;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface QuestionAnswerRepository extends CrudRepository<QuestionAnswer,Long> {
    List<QuestionAnswer> findAllByQuestionId(Long questionId);
}
