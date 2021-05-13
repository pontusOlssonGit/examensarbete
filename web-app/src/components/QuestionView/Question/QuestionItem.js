import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteQuestion } from '../../../actions/questionActions'



class QuestionItem extends Component {
    onDeleteClick = id => {
        this.props.deleteQuestion(id);
      };
    render() {
        const {question} = this.props;
        
        return (

            <tr>
                <td>{question.id}</td>
                <td>{question.question}</td>
                <td>{question.category}</td>
                <td>{question.correctAnswer}</td>
                <td><Link to={`/add-question-answer/${question.id}`}>Add Answer</Link></td>
                <td><Link to={`/update-question/${question.id}`}>Update</Link></td>
                <td><a onClick={this.onDeleteClick.bind(this,question.id)}>Delete</a></td>
                
            </tr>

        )
    }
}
QuestionItem.propTypes={
    deleteQuestion: PropTypes.func.isRequired
}

export default connect(null, {deleteQuestion}) (QuestionItem);