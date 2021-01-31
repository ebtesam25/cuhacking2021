import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import components
import App from "./App";
import Landing from "./screens/landing/landing";
import Class from "./screens/download/class";


ReactDOM.render(
  <Router>
    <div className="App">
      <Route exact path="/" component={Landing} />
      <Route exact path="/home" component={Landing} />
      <Route exact path="/class" component={Class} />
    </div>
  </Router>,
  document.getElementById("root")
);