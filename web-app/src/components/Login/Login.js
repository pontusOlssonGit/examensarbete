import React, {Component} from 'react'
import styles from './Login.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {login} from '../../actions/securityActions'
class Login extends Component {
    constructor(){
        super()

        this.state = {
            username:"",
            password:"",
            errors:{}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        if(this.props.security.validToken){
            this.props.history.push("/category-view")
        }
    }

    componentWillUnmount(){
        this.setState({
            errors:{}
        });
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
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault();
        const loginReq = {
            username: this.state.username,
            password: this.state.password,
            
        }
        this.props.login(loginReq,this.props.history);
    }
    render() {
        const {errors} = this.state
        return (
            <div className="login-body">
                <div className="container">
                <div className="row">
                <div className="col-3"><p className="countdown-1 question-mark-1">?</p>
                <p className="countdown-2 question-mark-2 mt-5">?</p>
                <p className="countdown-2 question-mark-4 mt-5">?</p></div>
                <form className="col-6 login-form" onSubmit={this.onSubmit}>
                
                    <p className="quizland-logo quizland-logo-form mb-5">Welcome back to Quizland!</p>
                    <hr className="hr-style mb-5"></hr>
                    <div className="form-group">
                        <input
                            type="email"
                            className={'form-control input-custom-style ' + (errors.username? 'is-invalid' : '')}
                            name="username"
                            aria-describedby="emailHelp"
                            value = {this.state.username}
                            onChange = {this.onChange}
                            placeholder="Email"
                            />
                            <p className="text-muted error-custom-p">Email is your username.</p>
                            <p className="text-danger mb-1">{(errors.username? `${errors.username}` : '')}</p>
                            
                            
                            
                        
                    </div>
                    <div className="form-group">
                        
                        <input
                            type="password"
                            className={'form-control mt-2 input-custom-style ' + (errors.password? 'is-invalid' : '')}
                            name="password"
                            value = {this.state.password}
                            onChange = {this.onChange}
                            placeholder='Password'
                            />
                            <p className="text-danger">{(errors.password? `${errors.password}` : '')}</p>
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
Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    security: state.security,
    errors: state.errors
});
export default connect(mapStateToProps,{ login })(Login);