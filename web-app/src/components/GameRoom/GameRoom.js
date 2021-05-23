import React, {Component} from 'react'
import Header from '../Layout/Header';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {getQuestionsCategory} from '../../actions/questionActions';
import styles from './styles.css'
import {Link} from 'react-router-dom';

class GameRoom extends Component {
    constructor(props) {
        super(props);
        const {category} = this.props.match.params

        this.state = {
            points: 0,
            questionNumber: 0,
            right: false,
            wrong: false,
            category: category,
            gameFinished: false,
            gameStarted: false,
            rightAnswers: 0,
            countdown: 10,
            initialCountdown: 3,
            countdownStarted: false,
            countdownInterval: undefined,
            checkCountdownInterval: undefined,
            timesUp: false

        }
        this.checkAnswerNextRound = this
            .checkAnswerNextRound
            .bind(this);

        this.startGame = this
            .startGame
            .bind(this);
        this.checkCountdown = this
            .checkCountdown
            .bind(this);

    }

    startGame() {
        this.setState({countdownStarted: true})
        this.state.countdownInterval = setInterval(() => this.setState({
            initialCountdown: this.state.initialCountdown - 1
        }), 1000)
        this.state.checkCountdownInterval = setInterval(() => this.checkCountdown(), 0)
    }
    checkCountdown() {
        if (this.state.initialCountdown === 0) {
            this.setState({gameStarted: true})
            this.clearAndSetInterval()
        }

        if (this.state.countdown === 0) {
            this.setState({timesUp: true})
            this.clearAndSetInterval()
            let num = this.state.questionNumber
            num++;
            console.log(num);
            if (num === 10) {
                setTimeout(() => this.setState({gameFinished: true}), 900);
            } else {
                this.setState({questionNumber: num});
                setTimeout(() => this.setState({timesUp: false, countdown: 10}), 1000);
            }
        }
    }
    clearAndSetInterval() {
        clearInterval(this.state.countdownInterval);
        clearInterval(this.state.checkCountdownInterval);
        this.state.countdownInterval = setInterval(() => this.setState({
            countdown: this.state.countdown - 1
        }), 1000)
        this.state.checkCountdownInterval = setInterval(() => this.checkCountdown(), 1000)
    }

    checkAnswerNextRound(answer, correctAnswer) {
        if (answer === correctAnswer) {
            this.setState({
                countdown: 10,
                points: this.state.points += 10,
                right: true,
                rightAnswers: this.state.rightAnswers += 1
            })
            setTimeout(() => this.setState({right: false}), 1000);
        } else {
            this.setState({wrong: true, countdown: 10})
            setTimeout(() => this.setState({wrong: false}), 1000);
        }
        this.clearAndSetInterval();
        setTimeout(() => this.setState({countdown: 10}), 1000);
        let num = this.state.questionNumber
        num++;
        if (num === 10) {
            setTimeout(() => this.setState({gameFinished: true}), 900);
        } else {
            this.setState({questionNumber: num})
        }
    }

    componentDidMount() {
        if (!this.state.gameFinished) {
            var str = this.state.category
            str = str
                .split("-")
                .join(" ");
            this
                .props
                .getQuestionsCategory(str);
        }

    }

    render() {
        const {questions} = this.props.question

        if (!this.state.gameFinished && this.state.gameStarted) {
            return (
                <div className="body-game-room">
                    <Header/>
                    <div className="container-top-game-room">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6 col-sm-12 game-header mt-3">
                                <div className="row">
                                    <div className="col-4">
                                        <p className="game-h-text">Question number: {this.state.questionNumber + 1}/10</p>
                                    </div>
                                    <div className="col-4"></div>
                                    <div className="col-4">
                                        <p className="game-h-text-points">Points: {this.state.points}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>

                    <div className="container-middle">

                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6 col-sm-12 game-main">
                                <div className="row time-left-meter-div">
                                    <div className="col-1 gutter-time-meter"></div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 0
                                            ? 'time-left-meter-white left-timer-border'
                                            : 'time-left-meter-red left-timer-border')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 1
                                            ? 'time-left-meter-white'
                                            : 'time-left-meter-red')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 2
                                            ? 'time-left-meter-white'
                                            : 'time-left-meter-red')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 3
                                            ? 'time-left-meter-white'
                                            : 'time-left-meter-red')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 4
                                            ? 'time-left-meter-white'
                                            : 'time-left-meter-red')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 5
                                            ? 'time-left-meter-white'
                                            : 'time-left-meter-red')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 6
                                            ? 'time-left-meter-white'
                                            : 'time-left-meter-red')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 7
                                            ? 'time-left-meter-white'
                                            : 'time-left-meter-red')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 8
                                            ? 'time-left-meter-white'
                                            : 'time-left-meter-red')}></p>
                                    </div>
                                    <div className="col-1">
                                        <p
                                            className={(this.state.countdown <= 9
                                            ? 'time-left-meter-white right-timer-border'
                                            : 'time-left-meter-red right-timer-border')}></p>
                                    </div>
                                    <div className="col-1 gutter-time-meter"></div>
                                </div>
                                <p className="question">
                                    {(!this.state.right && !this.state.wrong && !this.state.timesUp
                                        ? questions[this.state.questionNumber].question
                                        : null)}
                                    {(this.state.right
                                        ? "Correct! +10 Points."
                                        : '')}
                                    {(this.state.wrong
                                        ? "Wrong!"
                                        : '')}
                                    {(this.state.timesUp
                                        ? "Times Up!"
                                        : '')}</p>

                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                    <div className="container-bottom-game-room">
                        <div className="row">
                            <div className="col-lg-3"></div>
                            <div className="col-lg-6 col-sm-12 game-alternatives">
                                <div className="row">
                                    <div className="col-3">
                                        <button
                                            type="button"
                                            disabled={(this.state.wrong || this.state.right || this.state.timesUp
                                            ? true
                                            : false)}
                                            onClick={() => this.checkAnswerNextRound(questions[this.state.questionNumber].questionAnswers[0].answer, questions[this.state.questionNumber].correctAnswer)}
                                            className="btn btn-a btn-light">
                                            {(!this.state.wrong && !this.state.right && !this.state.timesUp
                                                ? questions[this.state.questionNumber].questionAnswers[0].answer
                                                : '')}
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <button
                                            type="button"
                                            disabled={(this.state.wrong || this.state.right || this.state.timesUp
                                            ? true
                                            : false)}
                                            onClick={() => this.checkAnswerNextRound(questions[this.state.questionNumber].questionAnswers[1].answer, questions[this.state.questionNumber].correctAnswer)}
                                            className="btn btn-b btn-light">
                                            {(!this.state.wrong && !this.state.right && !this.state.timesUp
                                                ? questions[this.state.questionNumber].questionAnswers[1].answer
                                                : '')}
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <button
                                            type="button"
                                            disabled={(this.state.wrong || this.state.right || this.state.timesUp
                                            ? true
                                            : false)}
                                            onClick={() => this.checkAnswerNextRound(questions[this.state.questionNumber].questionAnswers[2].answer, questions[this.state.questionNumber].correctAnswer)}
                                            className="btn btn-c btn-light">
                                            {(!this.state.wrong && !this.state.right && !this.state.timesUp
                                                ? questions[this.state.questionNumber].questionAnswers[2].answer
                                                : '')}
                                        </button>
                                    </div>
                                    <div className="col-3">
                                        <button
                                            type="button"
                                            disabled={(this.state.wrong || this.state.right || this.state.timesUp
                                            ? true
                                            : false)}
                                            onClick={() => this.checkAnswerNextRound(questions[this.state.questionNumber].questionAnswers[3].answer, questions[this.state.questionNumber].correctAnswer)}
                                            className="btn btn-d btn-light">

                                            {(!this.state.wrong && !this.state.right && !this.state.timesUp
                                                ? questions[this.state.questionNumber].questionAnswers[3].answer
                                                : '')}
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.gameFinished) {
            return (
                <div className="body-game-room">
                    <Header/>
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="card text-center game-room-summary col-4">

                            <div className="card-body">
                                <h1 className="mt-5">{(this.state.rightAnswers===10?'Wow! Incredible!':null)}</h1>
                                <h1 className="mt-5">{(this.state.rightAnswers>=7 && this.state.rightAnswers<10?'Amazing!':null)}</h1>
                                <h1 className="mt-5">{(this.state.rightAnswers>=5 && this.state.rightAnswers<7?'Well Done!':null)}</h1>
                                <h1 className="mt-5">{(this.state.rightAnswers<5 && this.state.rightAnswers>=3?'Better luck next time...':null)}</h1>
                                <h1 className="mt-5">{(this.state.rightAnswers<3?'Ouch...':null)}</h1>
                                <h2 className="mt-3 card-text">You got {this.state.rightAnswers}/10 answers right!</h2>
                                <h2 className="mt-3 card-text">You got {this.state.points} points!</h2>

                                <Link to="/category-view">
                                <button className="btn btn-a btn-a-start mb-5 mt-5">
                                    <h1>Back to Categories</h1>
                                </button>
                                </Link>
                                <Link to="/">
                                    <button className="btn btn-b btn-b-start mb-5 mt-5">
                                        <h1>Home</h1>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="col-4"></div>
                    </div>

                </div>

            )
        }
        if (!this.state.gameStarted && !this.state.countdownStarted) {
            return (
                <div className="body-game-room">
                    <Header/>
                    <div className="start-button-game-room">

                        <button className="btn btn-a btn-a-start" onClick={this.startGame}>
                            <h1>Start Quiz</h1>
                        </button>
                        <Link to="/category-view">
                            <button className="btn btn-b btn-b-start">
                                <h1>Back</h1>
                            </button>
                        </Link>
                    </div>
                </div>

            )
        }
        if (this.state.countdownStarted) {
            return (
                <div className="body-game-room">
                    <Header/>
                    <div className="start-button-game-room">
                        <p className="countdown-3">{(this.state.initialCountdown === 3
                                ? this.state.initialCountdown
                                : '')}</p>
                        <p className="countdown-2">{(this.state.initialCountdown === 2
                                ? this.state.initialCountdown
                                : '')}</p>
                        <p className="countdown-1">{(this.state.initialCountdown === 1
                                ? this.state.initialCountdown
                                : '')}</p>
                    </div>
                </div>

            )
        }
    }
}
GameRoom.propTypes = {
    question: PropTypes.object.isRequired,
    getQuestionsCategory: PropTypes.func.isRequired
}
const mapStateToProps = state => ({question: state.question})

export default connect(mapStateToProps, {getQuestionsCategory})(GameRoom);
