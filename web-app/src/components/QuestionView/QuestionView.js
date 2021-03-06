import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getQuestions} from '../../actions/questionActions';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Header from '../Layout/Header';
import styles from './QuestionView.css'

class QuestionView extends Component {
    constructor(){
        super() 
    }

    componentDidMount() {
        this
            .props
            .getQuestions();
    }
    
    render() {
        const {questions} = this.props.question
        return (
            <div className="question-view-body">
                <Header />
                <h1 className="mb-5">Welcome to Question Overview</h1>
                <h2 className="mb-5">Click below to view categories</h2>
                <Link to="/category-view">Categories</Link>
                <table className="table mt-5 table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Question</th>
                            <th scope="col">Category</th>
                            <th scope="col">Correct Answer</th>
                            <th scope="col">Answer A</th>
                            <th scope="col">Answer B</th>
                            <th scope="col">Answer C</th>
                            <th scope="col">Answer D</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question => (
                            <tr key={question.id} question={question}>

                                <td>{question.id}</td>
                                <td>{question.question}</td>
                                <td>{question.category}</td>
                                <td>{question.correctAnswer}</td>
                                <td>{(question.questionAnswers[0]===undefined?'': question.questionAnswers[0].answer)}</td>
                                <td>{(question.questionAnswers[1]===undefined?'': question.questionAnswers[1].answer)}</td>
                                <td>{(question.questionAnswers[2]===undefined?'': question.questionAnswers[2].answer)}</td>
                                <td>{(question.questionAnswers[3]===undefined?'': question.questionAnswers[3].answer)}</td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
QuestionView.propTypes = {
    question: PropTypes.object.isRequired,
    getQuestions: PropTypes.func.isRequired
}
const mapStateToProps = state => ({question: state.question})
export default connect(mapStateToProps, {getQuestions})(QuestionView);