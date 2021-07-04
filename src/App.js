import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/login";
import Register from "./pages/register";
import Home from "./pages/home";
import Fixture from "./pages/fixture";
import Player from "./pages/player";
import Tables from "./pages/tables";
import Club from "./pages/club";
import AddFixture from "./pages/admin/fixtures";
import AddPlayer from "./pages/admin/players";
import AddTeams from "./pages/admin/teams";
import UpdateResult from "./pages/admin/result";
import PlayerDetail from "./pages/player-detail";
import UpdateMatch from "./pages/admin/result-update";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

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
            <Route path="/fixture" exact>
              <Fixture />
            </Route>
            <Route path="/player" exact>
              <Player />
            </Route>
            <Route path="/player-detail" exact>
              <PlayerDetail />
            </Route>
            <Route path="/tables" exact>
              <Tables />
            </Route>
            <Route path="/club" exact>
              <Club />
            </Route>
            <Route path="/admin/fixture">
              <AddFixture />
            </Route>
            <Route path="/admin/players">
              <AddPlayer />
            </Route>
            <Route path="/admin/teams">
              <AddTeams />
            </Route>
            <Route path="/admin/result">
              <UpdateResult />
            </Route>
            <Route path="/admin/result-update">
              <UpdateMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
