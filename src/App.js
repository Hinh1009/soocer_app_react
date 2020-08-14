import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Fixture from './pages/fixture';
import Player from './pages/player';
import Tables from './pages/tables';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css'
// import './App.css'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/register" exact>
              <Register />
            </Route>
            <Route path='/fixture' exact>
              <Fixture />
            </Route>
            <Route path='/player' exact>
              <Player />
            </Route>
            <Route path='tables'>
              <Tables />
            </Route>
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App;