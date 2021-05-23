import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import styles from './Header.css'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { logout } from '../../actions/securityActions';
import User from './images/user.svg'

class Header extends Component {

    logout(){
        this.props.logout();
        window.location.href = "/"
    }
    
    render() {
        const {validToken, user} = this.props.security

        const isLoggedIn = (

          
            <div className="col-3">
                
                <div className="row header-row mt-4">
                <div className="col-1 mt-2"><img src={User} height="40rem"/>
                </div>
                <div className="col-8">
                <p className="header-row-p header-row-p-fullName mt-3">{user.fullName}</p>
                </div>
                <div className="col-2">
                <p className="header-row-p mt-3"onClick={this.logout.bind(this)}>Logout</p>
                </div>
                </div>
            </div>
        )

        let enableLinksLoggedIn;

        if(validToken && user){
            enableLinksLoggedIn = isLoggedIn;
        }
        return (
            <div>
                <div className="row">
                    <div className="col-9">
                        <a className="nav-link quizland-logo" href="/">Quizland</a>
                    </div>
                    {enableLinksLoggedIn}
                </div>

            </div>
        )
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    security: state.security
})
export default connect(mapStateToProps,{logout})(Header);