import React from 'react';
import { render } from 'react-dom';
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
        {postDetail.Date} <br />
        {postDetail.About} <br />
        <div class = 'gitButtons'>
        <Button variant ='outlined' href={postDetail.Link}>
          Github
        </Button>
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
