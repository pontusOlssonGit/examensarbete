import React, {Component} from 'react'
import styles from './styles.css'


class LandingPage extends Component {
    render() {
        return (
            <div>
                <link ></link>
                <div className="container-content">

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
                            <a className="nav-link small-link" href="/game-room">How To Play</a>
                        </div>
                        <div className="col-1">
                            <a className="nav-link small-link" href="/">About</a>
                        </div>
                    </div>

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
                            <button type="button" class="btn btn-left btn-light">Login</button>
                            <button type="button" class="btn btn-right btn-light">Sign up</button>
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
                        <div className="col-4"></div>
                        <div className="col-2"></div>

                    </div>
                </div>
                <div className="container-lowest">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-4"></div>
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
export default LandingPage;