import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import Header from '../Layout/Header';
import style from './CategoryView.css'

class CategoryView extends Component {

    

    render() {
        
        return (
            <div className="body">
            <Header></Header>
            <div className="container">
                <div className="row">
                    <Link className="col-4 mt-5 category-box-top" to="/question-view">
                        <h1 className="category-second">All categories</h1>
                    </Link>
                    <Link className="col-4 mt-5 category-box-top" to="/category-view/oceans">
                        <h1 className="category">Oceans</h1>
                    </Link>
                    <Link className="col-4 mt-5 category-box-top" to="/category-view/famous-people">
                        <h1 className="category-second">Famous People</h1>
                    </Link>
                    <Link className="col-4 mt-3 category-box" to="/game-room/movies">
                        <h1 className="category">Movies</h1>
                    </Link>
                    <Link className="col-4 mt-3 category-box" to="/game-room/history">
                        <h1 className="category-second">History</h1>
                    </Link>
                    <Link className="col-4 mt-3 category-box" to="/game-room/cities">
                        <h1 className="category">Cities</h1>
                    </Link>
                </div>
            </div>
            </div>
             
        )
    }
}

export default CategoryView;