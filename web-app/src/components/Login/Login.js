import React, {Component} from 'react'
import styles from './Login.css'
class Login extends Component {
    render() {
        return (
            <div className="login-body">
                <div className="container">
                <div className="row">
                <div className="col-3"><p className="countdown-1 question-mark-1">?</p>
                <p className="countdown-2 question-mark-2 mt-5">?</p>
                <p className="countdown-2 question-mark-4 mt-5">?</p></div>
                <form className="col-6 login-form">
                
                    <p className="quizland-logo quizland-logo-form mb-5">Welcome back to Quizland!</p>
                    <hr className="hr-style mb-5"></hr>
                    <div className="form-group">
                      
                        <input
                            type="email"
                            className="form-control input-custom-style"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email"/>
                        <p className="text-muted mt-1">Email is your username.</p>
                    </div>
                    <div className="form-group">
                        
                        <input
                            type="password"
                            className="form-control input-custom-style"
                            id="exampleInputPassword1"
                            placeholder="Password"/>
                    </div>
                    <hr className="hr-style mt-5"></hr>
                    <div className="col-6 offset-3">
                    <button type="submit" className="btn-right btn-light button-center mt-5">Login</button>
                    </div>
                    
                </form>
                <div className="col-3"><p className="countdown-2 question-mark-2 mt-5">?</p>
                <p className="countdown-3 question-mark-3 mt-5">?</p>
                <p className="countdown-2 question-mark-2 mt-5">?</p>
                </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Login;