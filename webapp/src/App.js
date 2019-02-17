import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles';
import Buttons from './components/buttons';


class App extends Component {
  render() {
    return (
        <section class='splash'>
        <div class='wrapper'>
            <Titles />
            <Buttons />
        </div>
        </section>
    );
  }
}

export default App;
