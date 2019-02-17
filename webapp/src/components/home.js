import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Titles from './titles';
import Buttons from './buttons';

const Home = () => (

    <section class='splash'>
    <div class='wrapper'>
        <Titles />
        <Buttons />
    </div>
    </section>

);

export default Home;
