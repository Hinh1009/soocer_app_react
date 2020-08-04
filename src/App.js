import React, { Component } from 'react';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

// import './App.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact="true">
              <Home />
            </Route>
            <Route path="/login" exact="true">
              <Login />
            </Route>
            <Route path="/register" exact="true">
              <Register />
            </Route>
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;