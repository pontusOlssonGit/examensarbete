import React, {Component} from 'react'
import {Link} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <a className="nav-link quizland-logo" href="/">Quizland</a>
                    </div>
                    <div className="col-1">
                        <a className="nav-link small-link" href="/">Login</a>
                    </div>
                    <div className="col-1">
                        <a className="nav-link small-link" href="/">Signup</a>
                    </div>
                    <div className="col-1">
                        <Link to="/question-view" className="nav-link small-link">
                            Question View
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to="/admin-dashboard" className="nav-link small-link">
                            Admin Dashboard
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;