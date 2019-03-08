import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import List from './ProjectList.js'




class Projects extends Component{
    render() {

      return (
          <Router>
          <section class="projectBackground">
            <div class="projCardContainer">
            <List />
            </div>
          </section>
          </Router>
      );
    }
}






export default Projects;
