import React from 'react';
import Titles from './titles';
import Buttons from './buttons';
import Projects from './projects.js';


const Home = () => (

    <section class='splash'>
    <div class='wrapper'>
        <Titles />
        <Buttons />
    </div>
    <Projects />
    </section>


);

export default Home;
