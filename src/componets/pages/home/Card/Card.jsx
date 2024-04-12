import React, { useContext, useState } from 'react'
import './Card.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BookDataContext } from '../../BooksContext';
import { Link } from 'react-router-dom';

const CommonCard = ({data,setAllBooks}) => {
 
  const [item,setItem] = useState()

  const {allbooks } = useContext(BookDataContext)

  const deleteData = () => {
    if(item) {
      const filterData = allbooks.filter((data) => data._id !=item)
      setAllBooks(filterData)
    }
    deleteData()
  }

  return (
    <div>
         <Card sx={{ maxWidth: 345 }}>
         <Link to={`/bookView/${data._id}`} style={{ textDecoration: 'none' }}>   <CardMedia
        sx={{ height: 390 }}
        image={data.image}
        title="green iguana" className='div_Image'
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
      </CardContent></Link>
        <CardActions>
          <Button size="small">Edit</Button>
          <Button size="small" onClick={() => setItem(data._id)}>Delete</Button>
          {/* <Button size="small">Delete</Button> */}

        </CardActions>
    </Card>
    </div>
  )
}

export default CommonCard