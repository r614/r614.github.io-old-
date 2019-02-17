import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Titles from './titles';
import Buttons from './buttons';
import Data from './projects.json';

class Projects extends Component{
    render() {
      return (
          <Router>
          <div>
          {Data.map((postDetail, index)=>{
              return(
                  <div>
                <h1>{postDetail.Name} </h1>
                <h4>{postDetail.Date} </h4>
                
                </div>

              )
          })}
          </div>
          </Router>

      );
    }
}




export default Projects;
