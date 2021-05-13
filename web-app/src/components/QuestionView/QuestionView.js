import React, {Component} from 'react'
import {connect} from 'react-redux';
import {getQuestions} from '../../actions/questionActions';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class QuestionView extends Component {

    componentDidMount() {
        this
            .props
            .getQuestions();
    }

    render() {
        const {questions} = this.props.question
        return (
            <div>
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
                                <td>Test A</td>
                                <td>Test B</td>
                                <td>Test C</td>
                                <td>Test D</td>
                                
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