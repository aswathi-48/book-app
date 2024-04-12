import React, { useContext, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { BookDataContext } from '../BooksContext';
// import CommonCard from '../home/Card/Card';
import { useParams } from 'react-router-dom';
import './ViewBook.css'

const ViewBook = () => {

    const { allBooks } = useContext(BookDataContext)
    const { _id } = useParams()
    const value = allBooks.find(item => item._id === parseInt(_id))
    console.log("valueee",value);


        
    return (
        <div className='view_page'>
            <div className="container">
                <div>
                    <h2>Book Details</h2>
                </div>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 340 }}
                        image={value.image}
                        title="book image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {value.name}
                        </Typography>
                        <Typography variant="h6" color="text.secondary">
                            {value.Author}
                        </Typography>
                      
                        <Typography variant="body2" color="text.secondary">
                            {value.language}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {value.genre}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {value.published}
                        </Typography>
                        <Typography variant="h6" component="div">
                            ₹{value.price}  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp; {value.star_rating}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Edit</Button>
                        <Button size="small">Delete</Button>
                    </CardActions>
                </Card>
            </div>


        </div>
    )
}

export default ViewBook