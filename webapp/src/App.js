import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import Projects from './components/projects';
import Error from './components/error';


class App extends Component {
  render() {
    return (
        <Router>
        <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/projects" exact component={Projects} />
        <Route component={Error} />
        </Switch>
        </Router>

    );
  }
}

export default App;
