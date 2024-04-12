import React, { useState, useEffect, useContext } from 'react';
import './List.css';
import { books } from '../../../util/BookApi';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { CiSearch } from "react-icons/ci";
import BannerBook from './BannerBook';
import { BookDataContext } from '../BooksContext';
import CommenCard from '../home/Card/Card';
import { Link } from 'react-router-dom';
import CommonCard from '../home/Card/Card';


const List = () => {


    const { allBooks } = useContext(BookDataContext)

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        const filteredBooks = allBooks.filter(book => book.name.toLowerCase().includes(searchQuery.toLowerCase()));
        setSearchQuery(filteredBooks);
    };
    const [products, setProducts] = useState(allBooks);
    const [searchVal, setSearchVal] = useState("");
    function handleSearchClick() {
        if (searchVal === "") { setProducts(allBooks); return; }
        const filterBySearch = allBooks.filter((book) => {
            if (book => book.name.toLowerCase()
                .includes(searchVal.toLowerCase())) { return book; }
        })
        setProducts(filterBySearch);
    }

    

    const [priceFilter, setPriceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');

    //data filtering
    const filterBooks = (book) => {
        let filtered = true;
        if (priceFilter) {
            if (priceFilter === 'below1000') {
                filtered = book.price < 1000;
            } else if (priceFilter === 'below500') {
                filtered = book.price < 500;
            } else if (priceFilter === 'below300') {
                filtered = book.price < 300;
            }
        }
        if (ratingFilter) {
            filtered = filtered && book.star_rating === parseInt(ratingFilter);
        }
        return filtered;
    };

    return (
        <div className='book_page'>
            <BannerBook />
            <div className="container">
                <div className='search'>
                    <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }} >
                        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" value={searchVal}  onChange={e => setSearchVal(e.target.value)} />
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search" onClick={handleSearchClick}>
                            <CiSearch />
                        </IconButton>
                    </Paper>
                </div>
                <div className="maping_datas">
                    <div className="filters">
                        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className='select'>
                            <option value="">All Prices</option>
                            <option value="below1000">Below 1000</option>
                            <option value="below500">Below 500</option>
                            <option value="below300">Below 300</option>
                        </select>
                        <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className='select'>
                            <option value="">All Ratings</option>
                            <option value="1">1 Star</option>
                            <option value="2">2 Stars</option>
                            <option value="3">3 Stars</option>
                            <option value="4">4 Stars</option>
                            <option value="5">5 Stars</option>
                        </select>
                     
                    </div>
                    <div className="add_button">
                           <Link  to="/add"> <button>Add New</button></Link>
                        </div>
                    <div className="books_list">

                        {allBooks && allBooks.filter(filterBooks).map((items, index) => {
                            return (
                                <div>
                                    <CommonCard data={items} key={index} />


                                </div>
                            )
                        })}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default List;
