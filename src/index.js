import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import LoginContainer from "./LoginContainer";
import NotFound from "./NotFound";
import * as serviceWorker from "./serviceWorker";
import SignupContainer from "./SignupContainer";

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginContainer} />
        <Route path="/todos" component={App} />
        <Route path="/SignUp" component={SignupContainer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
