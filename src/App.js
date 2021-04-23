import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MainApp from "./components/MainApp";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/">
            <MainApp />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
