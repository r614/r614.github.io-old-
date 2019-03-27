import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Projects from './projects.js';

const Lab = () => (
  <section class='splash'>
  <Projects />
  </section>
);

export default Lab;
