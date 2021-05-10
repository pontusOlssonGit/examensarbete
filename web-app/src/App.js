import './App.css';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import LandingPage from './components/LandingPage/LandingPage';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AddQuestion from './components/Question/AddQuestion';

function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component= { LandingPage }/>
      <Route exact path="/admin-dashboard" component={ AdminDashboard }/>
      <Route exact path="/add-question" component={ AddQuestion }/>
      
      
    </div>
    </Router>
  );
}

export default App;
