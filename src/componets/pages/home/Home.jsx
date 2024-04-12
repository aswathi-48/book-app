import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import Slider from './ReviewCarosal';
import { books, popular } from '../../../util/BookApi';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Banner from './Banner';
import { BookDataContext } from '../BooksContext';
import CommonCard from './Card/Card';
// import Banner from './BookBanner';


const Home = () => {


const {allBooks} = useContext(BookDataContext)

const { review } = useContext(BookDataContext)

  return (
    <div className='home'>
        <Banner/>
      <div className="container">
          <div className="populor_books">
            {/* <div className="head">
              <h3>Most Popular Books</h3>
            </div> */}
            {/* <div>
              {allBooks && allBooks.map((items,index) =>{
              return(
                <CommenCard data={items} key={index}/>
              )
              })}
            </div> */}
            {popular.map(item => (
                    <Link to={`/bookView/${item._id}`} key={item.id} style={{textDecoration:"none"}}> 
                        <Card sx={{ maxWidth: 515 } } style={{ height:450 }} >
                            <CardMedia
                                sx={{ height: 300 }}
                                image={item.image}
                                alt={item.name}
                                title="Book Image"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.Author}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">₹{item.price}</Button>
                            </CardActions>
                        </Card>
                    </Link>
                ))}
            </div>

        <div>
        {/* { review.map((items,index) =>{
          console.log(items.'***************');
              return(
                <Slider data={items} key={index}/>
              )
              })} */}
              <Slider />
        </div>
      </div>
    </div>
  );
};

export default Home;
