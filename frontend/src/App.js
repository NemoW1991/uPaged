import {Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shifts from './views/Shifts';
import Job from './views/Job';
import Home from './views/Home';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Route path="/" exact component={Shifts} />
        <Route path="/job" exact component={Job} />
        <Route path="/home" exact component={Home} />
      </Router>
    </div>
  );
}

export default App;
