import React, {Component} from 'react'
import { getQuestion, createQuestion } from '../../../actions/questionActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class UpdateQuestion extends Component {
    constructor() {
        super();
    
        this.state = {
          id: "",
          question: "",
          category: "",
          correctAnswer: "",
          errors:{}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors:nextProps.errors})
        }
        
        const {
          id,
          question,
          category,
          correctAnswer,
        } = nextProps.question;
    
        this.setState({
          id,
          question,
          category,
          correctAnswer,
        });
        
      }
      
      
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const updateQuestion = {
          id: this.state.id,
          question: this.state.question,
          category: this.state.category,
          correctAnswer: this.state.correctAnswer,
        };
    
        this.props.createQuestion(updateQuestion, this.props.history);
      }
    componentDidMount(){
        const { id } = this.props.match.params
        this.props.getQuestion(id, this.props.history);
    }
    render() {
        const {errors} = this.state
      
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
                            />
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
                            />
                            <p className="text-danger">{errors.category}</p>
                    </div>
                    <div className="form-group">
                        <label>Correct Answer</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            name="correctAnswer"
                            value={this.state.correctAnswer}
                            onChange = {this.onChange}
                            />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Update</button>
                </form>
            </div>

        )
    }
}
UpdateQuestion.propTypes = {
    getQuestion:PropTypes.func.isRequired,
    createQuestion: PropTypes.func.isRequired,
    question: PropTypes.object.isRequired,
    errors:PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    question:state.question.question,
    errors:state.errors
})
export default connect(mapStateToProps,{getQuestion,createQuestion})(UpdateQuestion);