import './App.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import LandingPage from './components/LandingPage/LandingPage';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AddQuestion from './components/QuestionView/Question/AddQuestion';
import {Provider} from 'react-redux';
import store from './store';
import UpdateQuestion from './components/QuestionView/Question/UpdateQuestion';
import QuestionView from './components/QuestionView/QuestionView';
import CategoryView from './components/QuestionView/CategoryView';
import AddQuestionAnswer from './components/QuestionView/QuestionAnswer/AddQuestionAnswer';
import QuestionViewCategory from './components/QuestionView/QuestionViewCategory';
import GameRoom from './components/GameRoom/GameRoom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import jwtDecode from 'jwt-decode';
import setToken from './utils/setToken';
import { SET_CURRENT_USER } from './actions/types';
import { logout } from './actions/securityActions';
import SecuredRoute from './utils/secureRoute';

const token = localStorage.token;

if(token){
    setToken(token)
    const decodedToken = jwtDecode(token);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decodedToken
    })

    const currentTime = Date.now()/1000
    if(decodedToken.exp < currentTime){
        store.dispatch(logout())
        window.location.href="/"
    }
    
    
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/register" component={Register}/>




                    <Switch>
                    <SecuredRoute exact path="/question-view" component={QuestionView}/>
                    <SecuredRoute exact path="/category-view" component={CategoryView}/>
                    <SecuredRoute exact path="/admin-dashboard" component={AdminDashboard}/>
                    <SecuredRoute exact path="/add-question" component={AddQuestion}/>
                    <SecuredRoute exact path="/update-question/:id" component={UpdateQuestion}/>
                    <SecuredRoute exact path="/add-question-answer/:id" component={AddQuestionAnswer}/>
                    <SecuredRoute exact path="/category-view/:category" component={QuestionViewCategory}/>
                    <SecuredRoute exact path="/game-room/:category" component={GameRoom}/>
                    </Switch>

                </div>
            </Router>
        </Provider>
    );
}

export default App;
