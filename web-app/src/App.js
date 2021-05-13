import './App.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import LandingPage from './components/LandingPage/LandingPage';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AddQuestion from './components/QuestionView/Question/AddQuestion';
import {Provider} from 'react-redux';
import store from './store';
import UpdateQuestion from './components/QuestionView/Question/UpdateQuestion';
import QuestionView from './components/QuestionView/QuestionView';
import CategoryView from './components/QuestionView/CategoryView';
import AddQuestionAnswer from './components/QuestionView/QuestionAnswer/AddQuestionAnswer';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/question-view" component={QuestionView}/>
                    <Route exact path="/category-view" component={CategoryView}/>
                    <Route exact path="/admin-dashboard" component={AdminDashboard}/>
                    <Route exact path="/add-question" component={AddQuestion}/>
                    <Route exact path="/update-question/:id" component={UpdateQuestion}/>
                    <Route exact path="/add-question-answer/:id" component={AddQuestionAnswer}/>

                </div>
            </Router>
        </Provider>
    );
}

export default App;
