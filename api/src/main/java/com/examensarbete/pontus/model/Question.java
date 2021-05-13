package com.examensarbete.pontus.model;

import org.springframework.boot.context.properties.bind.Name;
import org.springframework.web.bind.annotation.GetMapping;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Question can't be empty.")
    @Size(min=8, message="Question must be at least eight characters long.")
    private String question;
    @NotBlank(message = "Category can't be empty.")
    @Size(min=2, message="Category must be at least two characters long.")
    private String category;
    @NotBlank(message = "Correct Answer can't be blank")
    private String correctAnswer;
    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.REMOVE, mappedBy = "question", orphanRemoval=true)
    private List<QuestionAnswer> questionAnswers = new ArrayList<>();



    public Question() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    public List<QuestionAnswer> getQuestionAnswers() {
        return questionAnswers;
    }

    public void setQuestionAnswers(List<QuestionAnswer> questionAnswers) {
        this.questionAnswers = questionAnswers;
    }

    @Override
    public String toString() {
        return this.getId() + "\nQuestion: " + this.getQuestion() + "\nCategory: " + this.category;
    }
}
