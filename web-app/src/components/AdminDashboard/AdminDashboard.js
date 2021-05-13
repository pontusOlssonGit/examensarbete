import React, {Component} from 'react'
import CreateQuestionButton from '../QuestionView/Question/CreateQuestionButton'
import QuestionItem from '../QuestionView/Question/QuestionItem'
import {connect} from 'react-redux';
import {getQuestions} from '../../actions/questionActions';
import PropTypes from 'prop-types'

class AdminDashboard extends Component {

    componentDidMount() {
        this.props.getQuestions();
    }

    render() {
        const {questions} = this.props.question
        return (
            <div>
                <h1 className="mb-5">Welcome to the Dashboard</h1>
                
                <CreateQuestionButton />
                <table className="table mt-5 table-dark">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Question</th>
                            <th scope="col">Category</th>
                            <th scope="col">Correct Answer</th>
                            <th scope="col">Add answer</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {questions.map(question => (
                            <QuestionItem key={question.id} question={question}/>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
AdminDashboard.propTypes = {
    question: PropTypes.object.isRequired,
    getQuestions: PropTypes.func.isRequired
}
const mapStateToProps = state => ({question: state.question})
export default connect(mapStateToProps, {getQuestions})(AdminDashboard);
