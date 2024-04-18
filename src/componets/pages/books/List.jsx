import React, { useState, useContext, useEffect } from 'react';
import './List.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { CiSearch } from "react-icons/ci";
import BannerBook from './BannerBook';
import { BookDataContext } from '../BooksContext';
import { Link } from 'react-router-dom';
import CommonCard from '../home/Card/Card';
import { IoMdAdd } from "react-icons/io";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeBook } from '../../../redux/userredux';

const List = () => {
    const { allBooks, setAllBooks } = useContext(BookDataContext);
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');

    const deleteBook = (id) => {
        setAllBooks((prev) => prev.filter((book) => book._id !== id));
    };
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(removeBook(id));
        // You may also perform any additional logic, like making an API request to delete the book from the server
    };


    // const editBook = (id) => {
    //     // Define logic for editing a book here
    // };

    const isAdmin = true; // Set this to true or false based on the user's role
    const storedToken = window.localStorage.getItem("access_token")

    // useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.post('https://book-store-node-27us.onrender.com/api/v1/books/list',null,
                {
                    headers: {
                        Authorization: `Bearer ${storedToken}`
                
                    }
                }).then((res) => {
                    const fetchData = res.data
                    // console.log("datatataata",fetchData);
                    setFilteredBooks(fetchData.data);
                })
                
            } catch (error) {
                console.log('Error fetching books:', error);
            }
        };
        
        // fetchBooks();
    // }, []);

    useEffect(() => {
        fetchBooks()
        // const fetchData = async () => {
        //     const data = await fetchBook()
        //     console.log(data);
        //   };
        //   fetchData()
    }, [])

    //   useEffect(() => {
    //     // console.log(filteredBooks, 'alll boks')
    //     let items = filteredBooks;
    //     if (ratingFilter) {
    //         items = filteredBooks.filter(book => book.star_rating == ratingFilter)
    //     }
    //     if (priceFilter) {
    //         items = items.filter(book => book.price <= priceFilter)
    //     }
    //     if (searchQuery) {
    //         items = items.filter((book) =>
    //             book.name.toLowerCase().includes(searchQuery.toLowerCase())
    //         )
    //     }
    //     setFilteredBooks(items)
    //     fetchBooks()
    // }, [ratingFilter, priceFilter, searchQuery,fetchBooks])


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
                    <div className="filters">
                        <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)} className='select'>
                            <option value="">All Prices</option>
                            <option value="below1000">Below 1000</option>
                            <option value="500">Below 500</option>
                            <option value="300">Below 300</option>
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
                        <Link to="/add"><button><IoMdAdd className='icn' />Add New </button></Link>
                    </div>
                    <div className="books_list">
                        {filteredBooks.map((book, index) => (
                            <CommonCard
                                key={index}
                                data={book}
                                onDelete={isAdmin ? deleteBook : undefined} // Render delete button only for admin
                                // onEdit={isAdmin ? editBook : undefined} // Render edit button only for admin
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
