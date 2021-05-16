import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import styles from './Header.css'
class Header extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-8">
                        <a className="nav-link quizland-logo" href="/">Quizland</a>
                    </div>
                    <div className="col-1">
                        <a className="nav-link small-link mt-1" href="/">Login</a>
                    </div>
                    <div className="col-1">
                        <a className="nav-link small-link mt-1" href="/">Signup</a>
                    </div>
                    <div className="col-1">
                        <Link to="/category-view" className="nav-link small-link mt-1">
                            Play
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to="/admin-dashboard" className="nav-link small-link mt-1">
                            Admin Dashboard
                        </Link>
                    </div>
                </div>

            </div>
        )
    }
}
export default Header;