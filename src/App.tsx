import {
BrowserRouter as Router,
Link,
Route,
Switch
} from 'react-router-dom';
import Home from './pages/Home/Home';
import Assets from './pages/Assets/Assets';
import Details from './pages/Details/Details';
import './App.css';

function App() {
  return (
    <Router>
      <header className="main-header">
        <nav>
          <ul className="menu">
            <li className="menu__list-item"><Link to="/">Home</Link></li>
            <li className="menu__list-item"><Link to="/assets">Assets</Link></li>
            <li className="menu__list-item"><Link to="/details">Details</Link></li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/details/:stock?"><Details /></Route>
        <Route path="/assets"><Assets /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
    </Router>
  );
}

export default App;
