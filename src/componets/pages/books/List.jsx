
import React, { useState, useContext, useEffect } from 'react';
import './List.css';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import { CiSearch } from "react-icons/ci";
import BannerBook from './BannerBook';
import { BookDataContext } from '../BooksContext';
import { Link, useParams } from 'react-router-dom';
import CommonCard from '../home/Card/Card';
import { IoMdAdd } from "react-icons/io";
import axios from 'axios';


const List = () => {
    const { allBooks, setAllBooks } = useContext(BookDataContext);
    const [filteredBooks, setFilteredBooks] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [ratingFilter, setRatingFilter] = useState('');
//   const [name, setName] = useState('');
// const {_id} =useParams()
    

    const deleteBook = (id) => {
        setAllBooks((prev) => prev.filter((book) => book._id !== id));
    };
    const storedToken  = window.localStorage.getItem("access_token")

    const fetchBook = async () => {
        const response = await axios.post('https://book-store-node-27us.onrender.com/api/v1/books/list',{},{
            headers: {
                Authorization: `Bearer ${storedToken}`
            }
        }).then((res) => console.log(res.data))
        // console.log("dattaaaa ",response && response.data);

        // console.log("fetchedData", JSON.stringify(response));

        // if (response && response.data){
        //     setFilteredBooks(response.data)
        // }else{
        //     console.log("error");
        // }
    }

    useEffect(()=>{
        fetchBook()
        // const fetchData = async () => {
        //     const data = await fetchBook()
        //     console.log(data);
        //   };
        //   fetchData()
    },[])

    // useEffect(() => {
    //     console.log(allBooks, 'alll boks')
    //     let items = allBooks;
    //     if (ratingFilter) {
    //         items = allBooks.filter(book => book.star_rating == ratingFilter)
    //     }
    //     if (priceFilter) {
    //         items = items.filter(book => book.price <= priceFilter)
    //     }
    //     console.log("pricee", items);
    //     if (searchQuery) {
    //         items = items.filter((book) =>
    //             book.name.toLowerCase().includes(searchQuery.toLowerCase())
    //         )
    //     }
    //     setFilteredBooks(items)
    //     fetchBook()
    // }, [ratingFilter, priceFilter, searchQuery, deleteBook])

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
                            <option value="500">Below 500</option>
                            <option value="300">Below 300</option>
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
                        <Link to="/add"><button><IoMdAdd className='icn' />Add New </button></Link>
                    </div>
                    {/* Book list */}
                    <div className="books_list">
                        {filteredBooks.map((book, index) => (
                            <CommonCard key={index} data={book} onDelete={deleteBook} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default List;
