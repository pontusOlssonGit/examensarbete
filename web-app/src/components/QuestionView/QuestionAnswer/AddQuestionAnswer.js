import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addQuestionAnswer} from '../../../actions/questionAnswerActions'

class AddQuestionAnswer extends Component {
    constructor(props) {
        super(props)
        const{ id } = this.props.match.params

        this.state = {
            id: id,
            answer: "",
            errors: {},
        };
        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (prevState.errors !== nextProps.errors) {
            return {errors: nextProps.errors};
        }
        // Return null to indicate no change to state.
        return null;
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    onSubmit(e) {
        e.preventDefault();
        const newAnswer = {
            answer: this.state.answer
        }
        

        this.props.addQuestionAnswer(this.state.id,newAnswer, this.props.history)
    }

    render() {
        const {errors} = this.state;
        return (
            <div className="container">

                <form onSubmit={this.onSubmit}>
                    <div className="form-group mt-5">
                        <label>Answer</label>
                        <input
                            type="text"
                            className={'form-control ' + (errors.answer
                            ? 'is-invalid'
                            : '')}
                            id=""
                            name="answer"
                            value={this.state.answer}
                            onChange={this.onChange}
                            placeholder="Enter Answer"/>
                        <p className="text-danger">{errors.answer}</p>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        );
    }
}
AddQuestionAnswer.propTypes = {
    addQuestionAnswer: PropTypes.func.isRequired
}

const mapStateToProps = state => ({errors: state.errors})

export default connect(mapStateToProps, {addQuestionAnswer})(AddQuestionAnswer);
