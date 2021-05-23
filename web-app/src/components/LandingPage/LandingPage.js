import React, {Component} from 'react'
import Header from '../Layout/Header';
import './styles.css'
import Question from './images/question.svg'
import Winner from './images/winner.svg'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'



class LandingPage extends Component {

    componentDidMount(){
        if(this.props.security.validToken){
            this.props.history.push("/category-view")
        }
    }

    render() {
        return (
            <div>
                <div className="container-content">

                    <Header />

                    <h2 className="welcome">Welcome to Quizland!</h2>
                    <div className="container-bottom">

                        <div className="row">
                            <div className="col-3"></div>
                            <div className="col-6">
                                <h3>Get started</h3>
                                <p className="p-text">Lorem ipsum dolor sit amet, ris nisi ut aliquip ex ea commodo
                                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            </div>
                            <div className="col-3"></div>
                        </div>
                        <div className="col-12">
                            <Link to="/login">
                            <button type="button" className="btn-left btn-light">Login</button>
                            </Link>
                            <Link to="/register">
                            <button type="button" className="btn-right btn-light">Sign up</button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="container-lower">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5 text-lower">
                            <h3>Challenge your friends</h3>
                            <p className="p-text">Lorem ipsum dolor sit amet, ris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <h5>Climb the toplist</h5>
                            <p className="p-text">Lorem ris nisi ut aliquip ex ea commodo consequat.Lorem ipsum
                                dolor sit amet, ris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor
                                sit amet, ris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-5">
                            <img src={Winner} height="300rem"/>
                        </div>
                        <div className="col-1"></div>

                    </div>
                </div>
                <div className="container-lowest">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-5"><img src={Question} height="300rem"/></div>
                        <div className="col-5 text-lowest">
                            <h3>Challenge your friends</h3>
                            <p className="p-text">Lorem ipsum dolor sit amet, ris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                                dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                            <h5>Climb the toplist</h5>
                            <p className="p-text">Lorem ris nisi ut aliquip ex ea commodo consequat.Lorem ipsum
                                dolor sit amet, ris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor
                                sit amet, ris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                        <div className="col-1"></div>

                    </div>
                </div>

            </div>
        )
    }
}
LandingPage.propTypes = {
    security: PropTypes.object.isRequired
}
const mapStateToProps = state =>({
    security: state.security
});
export default connect(mapStateToProps)(LandingPage);