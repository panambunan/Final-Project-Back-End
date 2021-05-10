import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import About from "../../pages/About";
import Register from '../../pages/Register';

const Routes = () => {
    return (
        <Router>
            <Switch>
            <Route exact path="/" >
                    <Dashboard />
                </Route>
            <Route path="/login" > 
                    <Login title="Welcome" />
                </Route>
                <Route path="/about" >
                    <About />
                </Route>
                <Route path="/register" >
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;