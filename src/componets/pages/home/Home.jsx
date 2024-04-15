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
import StarRating from '../books/StarRating';
// import Banner from './BookBanner';


const Home = () => {


const {allBooks} = useContext(BookDataContext)

const sortedBooks = allBooks.sort((a, b) => b.star_rating - a.star_rating);
const topTwoBooks = sortedBooks.slice(0, 2);


const { allReview } = useContext(BookDataContext)
  return (
    <div className='home'>
        <Banner/>
      <div className="container">
          <div className="books">
            <div className="head">
              <h2>Most Popular Books</h2>
            </div>
            <div className="populor_books">
            {/* {topTwoBooks.map((item, index) => (
                        <CommonCard data={item} key={index} />
                    ))} */}
              
            {topTwoBooks.map(item => (
                    <Link to={`/bookView/${item._id}`} key={item.id} style={{textDecoration:"none"}}> 
                        <Card sx={{ Width: 100 } } className='main_card'>
                          <div style={{height:390}}>
                          <CardMedia
                                sx={{ height: 100 }}
                                image={item.image}
                                alt={item.name}
                                title="Book Image" className='div_img'
                            />
                          </div>
                          
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.name} 
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {item.Author}
                                </Typography> 
                            </CardContent>
                            <CardActions>
                            <StarRating rating={item.star_rating}  />

                                <Button size="small">₹{item.price}</Button>
                            </CardActions>
                        </Card>
                    </Link>
                ))}
            </div>
            </div>

        <div>
       <div>
       <Slider />

       </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
