// EditBook.js
import React, { useState, useContext, useEffect } from 'react';
import { useParams, useHistory, useNavigate } from 'react-router-dom';
import { BookDataContext } from './BooksContext';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allBooks, setAllBooks } = useContext(BookDataContext);
  const [editedBook, setEditedBook] = useState({});

  // Fetch the book data to edit
  useEffect(() => {
    const book = allBooks.find(book => book._id === parseInt(id));
    if (book) {
      setEditedBook({ ...book });
    }
  }, [allBooks, id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedBook(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllBooks(prevBooks =>
      prevBooks.map(book =>
        book._id === parseInt(id) ? editedBook : book
      )
    );
    navigate.push('/books'); // Redirect to book list page
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={editedBook.name || ''} onChange={handleInputChange} />
        </div>
        <div>
          <label>Author:</label>
          <input type="text" name="author" value={editedBook.author || ''} onChange={handleInputChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={editedBook.price || ''} onChange={handleInputChange} />
        </div>
        {/* Add more fields for other book details */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditBook;
