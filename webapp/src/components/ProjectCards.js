import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Data from './projects.json';


const styles = {
  card: {
    width: 300,

  },
  media: {
    height: 200,
    maxHeight: 200,
    minHeight: 180,
  },

  display: 'flex',
};

function MediaCard(props) {
  const { classes } = props;
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
    <div class='projectGrid'>
    {Data.map((postDetail, index)=>{
      return(
      <div class='projectGrid'>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
          className={classes.media}
          image={postDetail.media}
          title="Project"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {postDetail.Name}
            </Typography>
            <Typography gutterBottom variant="caption" component="h2">
              {postDetail.Date}
            </Typography>
            <Typography component="p">
              {postDetail.About}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div class="bottom">
        <CardActions>
            <Button size="small" color="primary" href={postDetail.Link}>
              GitHub
            </Button>
        </CardActions>
        </div>
      </Card>
      </div>
    )
    })}
    </div>
);
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
