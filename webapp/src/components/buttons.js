import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {Typography} from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Projects from './projects.js';
import Scroll from 'react-scroll'



const Buttons = () => (

    <section class='buttonSection'>
        <div class='buttons'>
          <Button href="http://www.github.com/r614">
            Github
          </Button>
          <Button href="https://docs.google.com/document/d/1U8Z55E2bX1hhpHmxjPAfZA-IjWTY3Osp3-AtyjI-33w/edit?usp=sharing">
            Resume
          </Button>
          <Button component={Link} to="/lab">
            Lab
          </Button>
        </div>
      
    </section>

);



export default Buttons;
