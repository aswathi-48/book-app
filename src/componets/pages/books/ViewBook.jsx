
import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';
import './ViewBook.css'
import { BookDataContext } from '../BooksContext';
import StarRating from './StarRating';
const ViewBook = ({ data }) => {

    const { allBooks, allReview, deleteBook} = useContext(BookDataContext)
    const { _id } = useParams()
    const [showReviews, setShowReviews] = useState(false); // State to track whether to show reviews or not

    const value = allBooks.find(item => item._id === parseInt(_id))
    console.log("valueee", value);

    const bookReviews = allReview.filter(review => review.book_name === value.name);

    const toggleShowReviews = () => {
        setShowReviews(!showReviews); // Toggle the showReviews state
    };

    const calculateAverageRating = (reviews) => {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
        return totalRating / reviews.length;
    };
    const averageRating = calculateAverageRating(bookReviews);

    const handleRatingChange = (newRating) => {
        // Update the rating in your context or perform any other action
        console.log('New rating:', newRating);
    };



    // const handleDelete = () => {
    //     deleteBook(data._id);
    // };



    return (
        <div className='view_page'>
            <div className="container">
                <div className='view_page_card'>
                    <div>
                        <h2>Book Details</h2>
                    </div>
                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 297 }} className='cardmedia_img'
                            image={value.image}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }} style={{ marginLeft: 15 }} className='card_content'>
                                <Typography component="div" variant="h4">
                                    {value.name}
                                </Typography>
                                <Typography variant="h6" color="text.secondary" component="div">
                                    {value.Author}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {value.language}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {value.genre}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    {value.published}
                                </Typography>
                                <Typography variant="subtitle1" component="div">
                                    ₹{value.price}
                                </Typography>
                                <StarRating rating={averageRating} onChange={handleRatingChange} />
                                <CardActions>
                                    <Button size="small">Edit</Button>
                                    {/* <Button size="small" onClick={handleDelete}>Delete</Button> */}
                                </CardActions>
                            </CardContent>
                            <   div className='review'>
                                <h2> Reviews</h2>
                                {showReviews && bookReviews.length > 0 ? ( // Show reviews only if showReviews is true
                                    <ul>
                                        {bookReviews.map((review, index) => (
                                            <li key={index}>
                                                <Typography gutterBottom variant="h6" component="div">
                                                    {review.user} - Rating: {review.rating}
                                                </Typography>
                                                <Typography variant="body1">
                                                    {review.review}
                                                </Typography>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Toggle button for review.</p>
                                )}
                                <button onClick={toggleShowReviews} className='toggle_btn'>Toggle Reviews</button> {/* Button to toggle reviews visibility */}
                            </div>
                        </Box>

                    </Card>

                </div>
            </div>
        </div>
    )
}

export default ViewBook