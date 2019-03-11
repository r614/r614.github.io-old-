import React from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';



const Buttons = () => (

    <section class='buttonSection'>
        <div class='buttons'>
          <Button href="http://www.github.com/r614">
            Github
          </Button>
          <Button href="https://drive.google.com/open?id=1U8Z55E2bX1hhpHmxjPAfZA-IjWTY3Osp3-AtyjI-33w">
            Resume
          </Button>
          <Button component={Link} to="/lab">
            Lab
          </Button>
        </div>

    </section>

);



export default Buttons;
