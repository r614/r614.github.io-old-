import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from './components/home';
import Lab from './components/lab';
import Error from './components/error';

const supportsHistory = 'pushState' in window.history;

class App extends Component {


  render() {

    return (
        <Router forceRefresh={!supportsHistory}>
        <div>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/lab" exact component={Lab} />
        <Route component={Error} />
        </Switch>
        </div>
        </Router>

    );
  }
}

export default App;
