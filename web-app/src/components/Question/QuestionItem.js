import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteQuestion } from '../../actions/questionActions'



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
                <td><button className="btn btn-light"><Link to={`/update-question/${question.id}`}>Update</Link></button></td>
                <td><button onClick={this.onDeleteClick.bind(this,question.id)} className="btn btn-light">Delete</button></td>
                
            </tr>

        )
    }
}
QuestionItem.propTypes={
    deleteQuestion: PropTypes.func.isRequired
}

export default connect(null, {deleteQuestion}) (QuestionItem);