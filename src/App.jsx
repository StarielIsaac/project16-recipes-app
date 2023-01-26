import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './pages/Meals';
import Profile from './pages/Profile';
import Drinks from './pages/Drinks';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/drinks" component={ Drinks } />
        <Route path="/meals" component={ Meals } />
        <Route path="/profile" component={ Profile } />
      </Switch>
    </Router>
  );
}

export default App;
