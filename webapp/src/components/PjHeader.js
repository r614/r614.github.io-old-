import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';



const ProjectHeader = () => (
  <section class="projHead">
  <Button color= "white" href="/" >
  <h3>  Home </h3>
  </Button>
  </section>
);

export default ProjectHeader;
