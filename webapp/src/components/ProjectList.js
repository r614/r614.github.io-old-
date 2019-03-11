import React from 'react';
import Accordion from './Accordion.js'
import Data from './projects.json';
import Button from '@material-ui/core/Button';


function List(){
  return(
    <div class = 'ListContainer'>
    <Accordion>
    {Data.map((postDetail, index)=>{
      return(

      <div label= {postDetail.Name}>
        <div class = 'listText'>
        <div class='row'>
          <div class='column'>
            <div class='left-column'>
              Date: <br />
              About: <br />

            </div>
          </div>
          <div class='doublecolumn'>
            <div class='right-column'>
            {postDetail.Date} <br />
            {postDetail.About} <br />
            <div class = 'gitButtons'>
              {postDetail.Link !== "" &&
              <Button variant = "outlined" color="inherit" href={postDetail.Link}>
                Github
              </Button>
              }
            </div>



            </div>
          </div>
        </div>
        </div>
      </div>
      )
    })}
    </Accordion>
    </div>
  )

}

export default List;
