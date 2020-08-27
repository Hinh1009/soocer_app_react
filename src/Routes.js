import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route path="/"><Home /></Route>
            </Switch>
        )
    }
}

export default Routes