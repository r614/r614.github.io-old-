import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


const Lab = () => (
  <section class='splash'>
  <div class='wrapper'>
    <section>
        <section class="titleContainer">
            <span>
                <div class="labTitle">Woah. You are early!</div>
                    <div class ="subTitle"> Currently working on plotting real time wind data with vector fields! <br />
                    Check back later for a prototype! <br />
                    </div>
            </span>
        </section>
    </section>
    <div class = "buttons">
      <Button component={Link} to="/">
        Home
      </Button>
    </div>
  </div>
  </section>
);

export default Lab;
