import React, { useContext, useEffect, useState } from "react";
import BasicCard from "../books/Card";
import { BooksContext } from "../BooksContext";
import { BsSearch } from "react-icons/bs";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const List = () => {
  const { listBooks, setListBooks } = useContext(BooksContext);
  const [filteredBooks, setFilteredBooks] = useState([])
  const [priceFilter, setPriceFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const handleDelete = (id) => {
    setListBooks((oldValues) => oldValues.filter((books) => books._id !== id));
  };
  const handleSearchClick = () => {
    const searchedBooks = listBooks.filter((book) =>
      book.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setListBooks(searchedBooks);
  };
  useEffect(()=> {
    let items = listBooks;
    if (ratingFilter) {
      items = listBooks.filter(book=> book.star_rating == ratingFilter)
    }
    if (priceFilter) {
      items = items.filter(book=> book.price <= priceFilter)
    }
    if (searchValue) {
      items = items.filter((book) =>
      book.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    }
    setFilteredBooks(items)
  }, [ratingFilter, priceFilter, searchValue])
  return (
    <>
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "11px",
        }}
      >
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <BsSearch onClick={handleSearchClick} />
      </div>
      <div>
        <select
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="1000">above 1000</option>
          <option value="500">Under 500</option>
          <option value="300">Under 300</option>
          <option value="100">Under 100</option>
        </select>
        <select
          value={ratingFilter}
          onChange={(e) => setRatingFilter(e.target.value)}
        >
          <option value="">All Ratings</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </select>
      </div>
      <Link to={"/create/book"}>
        <Button variant="contained" sx={{ mt: 3, mb: 2 }}>
          Add New
        </Button>
      </Link>
      <div className="books container">
        {filteredBooks.map((items, index) => {
          return <BasicCard data={items} key={index}  onDelete={handleDelete} />;
        })}
      </div>
    </>
  );
};
export default List;