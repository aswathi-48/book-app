import React from 'react'
import './Card.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const CommonCard = ({data}) => {
  return (
    <div>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 390 }}
        image={data.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {data.Author}
        </Typography>
        <Typography variant="h6" color="text.secondary">
        ₹{data.price} &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; {data.star_rating}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default CommonCard