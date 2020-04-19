import React, { Component } from 'react';
import 'bootstrap';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import ListOfBooks from "./components/ListOfBooks";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/results" component={Home} />
          <Route exact path="/details" component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}


export default App;
