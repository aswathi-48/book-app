
import React, { useState, useContext } from 'react';
import './List.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { CiSearch } from "react-icons/ci";
import BannerBook from './BannerBook';
import { BookDataContext } from '../BooksContext';
import { Link } from 'react-router-dom';
import CommonCard from '../home/Card/Card';

const List = () => {
    const { allBooks } = useContext(BookDataContext);

    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');

    const filterBooks = (book) => {
        // Check if the book matches the search query
        const matchesSearchQuery = searchQuery ? 
            (book.name && 
            (book.name.toLowerCase().startsWith(searchQuery.toLowerCase()) ||
            book.name.toLowerCase().includes(searchQuery.toLowerCase()))) : true;
        
        // Check if the book matches the price filter
        let matchesPriceFilter = true;
        if (priceFilter) {
            if (priceFilter === 'below1000') {
                matchesPriceFilter = book.price < 1000;
            } else if (priceFilter === 'below500') {
                matchesPriceFilter = book.price < 500;
            } else if (priceFilter === 'below300') {
                matchesPriceFilter = book.price < 300;
            }
        }
    
        // Check if the book matches the rating filter
        let matchesRatingFilter = true;
        if (ratingFilter) {
            matchesRatingFilter = book.star_rating === parseInt(ratingFilter);
        }
        

        return matchesSearchQuery && matchesPriceFilter && matchesRatingFilter;
    };
    
    return (
        <div className='book_page'>
            <BannerBook />
            <div className="container">
                <div className='search'>
                    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }} >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search by book name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <CiSearch />
                        </IconButton>
                    </Paper>
                </div>
                <div className="maping_datas">
                    {/* Filter options */}
                    <div className="filters">
                        {/* Price filter */}
                        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className='select'>
                            <option value="">All Prices</option>
                            <option value="below1000">Below 1000</option>
                            <option value="below500">Below 500</option>
                            <option value="below300">Below 300</option>
                        </select>
                        {/* Rating filter */}
                        <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className='select'>
                            <option value="">All Ratings</option>
                            <option value="1">1 Star</option>
                            <option value="2">2 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="5">5 Stars</option>
                        </select>
                    </div>
                    {/* Add button */}
                    <div className="add_button">
                        <Link to="/add"><button>Add New</button></Link>
                    </div>
                    {/* Book list */}
                    <div className="books_list">
                        {allBooks && allBooks.filter(filterBooks).map((book, index) => (
                            <CommonCard key={index} data={book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
