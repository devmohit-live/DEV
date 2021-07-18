import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Customers from './Customers';
import Login from './Login';
import Rental from './Rental';
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(
    <Router>
        {/* Always have to display */}
        <Navbar />

        {/* Select only one page : Switch */}
        <Switch>

            <Route path="/cutomers">
            <Customers/>
            </Route>

            <Route path="/login">
            <Login/>
            </Route>

            <Route path="/rental">
            <Rental/>
            </Route>
            

            <Route path="/">
            <App/>
            </Route>

    </Switch>

    </Router>
    , document.getElementById("root"));
