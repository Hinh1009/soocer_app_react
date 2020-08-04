import React, { Component } from 'react';

import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button } from 'antd'
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
          <Link to="/login">
            <Button exact="true">Login</Button>
          </Link>
          {/* <Link to="/register">
            <Button exact="true">Sign up</Button>
          </Link> */}
        </div>
      </Router>

    )
  }
}

export default App;