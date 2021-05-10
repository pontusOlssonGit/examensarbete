import React, {Component} from 'react'

class AddQuestion extends Component {
    constructor(){
        super()
        
        this.state={
            "question":"",
            "category":"",
            "correctAnswer":""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        console.log(newQuestion);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group mt-5">
                        <label>Question</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            name="question"
                            value={this.state.question}
                            onChange = {this.onChange}
                            placeholder="Enter Question"/>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input
                            type="text"
                            className="form-control"
                            id=""
                            name="category"
                            value={this.state.category}
                            onChange = {this.onChange}
                            placeholder="Enter Category"/>
                    </div>
                    <div className="form-group">
                        <label>Correct Answer</label>
                        <input
                            type="number"
                            className="form-control"
                            id=""
                            name="correctAnswer"
                            value={this.state.correctAnswer}
                            onChange = {this.onChange}
                            placeholder="Enter Correct Answer"/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        )
    }
}
export default AddQuestion;