import React, {Component} from 'react'
import styles from './styles.css'

class GameRoom extends Component {
    render() {
        return (
            <div>
                <div class="container-top">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6 game-header">
                            <div class="row">
                                <div class="col-4">
                                    <p class="game-h-text">Question number: 3/20</p>
                                </div>
                                <div class="col-4"></div>
                                <div class="col-4">
                                    <p class="game-h-text-points">Points: 10</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>

                <div class="container-middle">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6 game-main">
                            <p class="question">Not counting Russia, which country has the largest landmass in Europe?</p>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
                <div class="container-bottom">
                    <div class="row">
                        <div class="col-3"></div>
                        <div class="col-6 game-alternatives">
                            <div class="row">
                                <div class="col-3">
                                    <button type="button" class="btn btn-a btn-light">Germany</button>
                                </div>
                                <div class="col-3">
                                    <button type="button" class="btn btn-b btn-light">Ukraine</button>
                                </div>
                                <div class="col-3">
                                    <button type="button" class="btn btn-c btn-light">Poland</button>
                                </div>
                                <div class="col-3">
                                    <button type="button" class="btn btn-d btn-light">France</button>
                                </div>
                            </div>
                        </div>
                        <div class="col-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}
export default GameRoom;
