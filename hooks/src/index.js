import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import User from "./User";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/user/:id">
        <User />
      </Route>
      <Route path="/">
        <App />
      </Route>
    </Switch>
  </Router>,

  document.querySelector("#root")
);
