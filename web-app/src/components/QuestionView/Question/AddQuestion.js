import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createQuestion } from '../../../actions/questionActions'

class AddQuestion extends Component {
    constructor(){
        super()
        
        this.state={
            question:"",
            category:"",
            correctAnswer:"",
            errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.errors !== nextProps.errors) {
          return {
            errors: nextProps.errors
          };
        }

        // Return null to indicate no change to state.
        return null;
      }
    
    
    onChange(e){
        this.setState({ [e.target.name]: e.target.value});
    };
    onSubmit(e){
        e.preventDefault();
        const newQuestion = {
            question:this.state.question,
            category:this.state.category,
            correctAnswer:this.state.correctAnswer
        }

        this.props.createQuestion(newQuestion, this.props.history)
    }
    render() {
        const{errors} = this.state;
        return (
            <div className="container">
                
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mt-5">
                        <label>Question</label>
                        <input
                            type="text"
                            className={'form-control ' + (errors.question? 'is-invalid' : '')}
                            id=""
                            name="question"
                            value={this.state.question}
                            onChange = {this.onChange}
                            placeholder="Enter Question"/>
                            <p className="text-danger">{errors.question}</p>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            className={'form-control ' + (errors.category? 'is-invalid' : '')}
                            id=""
                            name="category"
                            value={this.state.category}
                            onChange = {this.onChange}
                            placeholder="Enter Category"/>
                            <p className="text-danger">{errors.category}</p>
                    </div>
                    <div className="form-group">
                        <label>Correct Answer</label>
                        <input
                            type="text"
                            className={'form-control ' + (errors.correctAnswer? 'is-invalid' : '')}
                            id=""
                            name="correctAnswer"
                            value={this.state.correctAnswer}
                            onChange = {this.onChange}
                            placeholder="Enter Correct Answer"/>
                            <p className="text-danger">{errors.correctAnswer}</p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        )
    }
}
AddQuestion.propTypes = {
    createQuestion:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors:state.errors
})
export default  connect(mapStateToProps, {createQuestion}) (AddQuestion);