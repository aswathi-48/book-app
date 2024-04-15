

import { Card, CardContent, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'
import { Reviews } from '../../../util/ReviewApi';
import './Slider.css'
import { BookDataContext } from '../BooksContext';

const Slider = () => {

const { allReview } = useContext(BookDataContext)
   
  return (
    <div className='slide'>
      <div className="container">

 <Carousel autoPlay infiniteLoop>
    {allReview.map((review, index) => (
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Books are a uniquely portable magic
            </Typography>
            <Typography variant="h5" component="div">
              {review.book_name}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {review.user}
            </Typography>
            <Typography variant="body2">
             {review.review}
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
    ))}
</Carousel>
</div>

    </div>
   
  )
}

export default Slider

