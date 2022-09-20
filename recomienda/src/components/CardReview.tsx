import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Grid2 from '@mui/material/Unstable_Grid2'
import { height } from '@mui/system';

interface Props {
  name: string,
  URL: string, 
  star: number,
  author: string,
  description: string
}

function MediaCard(props: Props) {
  return (
    <Card sx={{ maxWidth: 345, height: 345, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: 1}}>
      <CardMedia
        component="img"
        height="140"
        image={ require('../assets/key1.png')}
        alt="key1" />

      <CardContent sx={{height: 90, textOverflow: 'hidden'}}>
        <Typography gutterBottom variant="h5" component="div"> {props.name} </Typography>
        <Typography variant="body2" color="text.secondary"  > {props.description} </Typography>
      </CardContent>
      
      <CardContent>
        <Grid2 container display={'flex'} justifyContent={'space-between'}>
          <Typography > {props.author}</Typography>
          <Rating name='read-only' value={props.star} readOnly />
        </Grid2>
      </CardContent>
      

      
      
    </Card>
  );
}

export default MediaCard;