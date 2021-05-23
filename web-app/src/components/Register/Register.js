import React, {Component} from 'react'
import styles from './Register.css'
import {registerUser} from '../../actions/securityActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class Register extends Component {
    constructor() {
        super();

        this.state = {
            username:"",
            fullName:"",
            password:"",
            confirmPassword:"",
            errors:{}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const newUser = {
            collectedPoints:0,
            username: this.state.username,
            fullName: this.state.fullName,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        }
        this.props.registerUser(newUser, this.props.history)
    }
    render() {
        return (
            <div className="login-body">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <p className="countdown-1 question-mark-1">?</p>
                            <p className="countdown-2 question-mark-2 mt-5">?</p>
                            <p className="countdown-2 question-mark-4 mt-5">?</p>
                        </div>
                        <form className="col-6 register-form" onSubmit={this.onSubmit}>
                            <p className="quizland-logo quizland-logo-form mb-5">Welcome to Quizland!</p>
                            <hr className="hr-style mb-5"></hr>
                            <div className="form-group">

                                <input
                                    type="email"
                                    className="form-control input-custom-style"
                                    aria-describedby="emailHelp"
                                    name="username"
                                    value={this.state.username}
                                    placeholder="Email"
                                    onChange={this.onChange}/>
                                    
                                <p className="text-muted mt-1">Email is your username.</p>
                            </div>
                            <div className="form-group">

                                <input
                                    type="text"
                                    className="form-control input-custom-style mb-4"
                                    name="fullName"
                                    value={this.state.fullName}
                                    placeholder="Full name"
                                    onChange={this.onChange}/>
                                    
                            </div>
                            <div className="form-group">

                                <input
                                    type="password"
                                    className="form-control input-custom-style mb-4"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="Password"
                                    onChange={this.onChange}/>
                                  
                            </div>
                            <div className="form-group">

                                <input
                                    type="password"
                                    className="form-control input-custom-style"
                                    name="confirmPassword"
                                    value={this.state.confirmPassword}
                                    placeholder="Confrim Password"
                                    onChange={this.onChange}
                                    />
                                    
                            </div>
                            <hr className="hr-style mt-5"></hr>
                            <div className="col-6 offset-3">
                                <button type="submit" className="btn-right btn-light button-center mt-5">Register</button>
                            </div>

                        </form>
                        <div className="col-3">
                            <p className="countdown-2 question-mark-2 mt-5">?</p>
                            <p className="countdown-3 question-mark-3 mt-5">?</p>
                            <p className="countdown-2 question-mark-2 mt-5">?</p>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}
Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    errors: state.errors
});
export default connect(null,{ registerUser })(Register);