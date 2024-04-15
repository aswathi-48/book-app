
// // EditBook.js
// import React, { useState, useContext, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { BookDataContext } from './BooksContext';
// import './EditBook.css'

// const EditBook = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { allBooks, setAllBooks } = useContext(BookDataContext);
//   const [editedBook, setEditedBook] = useState({});
  

//   // Fetch the book data to edit
//   useEffect(() => {
//     const book = allBooks.find(book => book._id === parseInt(id));
//   console.log("bookksss",book);

//     if (book) {
//       setEditedBook({ ...book });
//     }
//   }, [allBooks, id]);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditedBook(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setAllBooks(prevBooks =>
//       prevBooks.map(book =>
//         book._id === parseInt(id) ? editedBook : book
//       )
//     );
//     navigate('/books'); // Redirect to book list page
//   };

//   return (
//     <div className="edit-form-container">
//     <form action="" onSubmit={handleSubmit}>
   
//       <div>
//         <div>
//           <label>Title : </label>
//           <input type="text" name="name" value={editedBook.name} onChange={handleInputChange}/>
//         </div>
//         <div>
//           <label>Author : </label>
//           <input type="text" name='author' value={editedBook.Author}  onChange={handleInputChange}/>
//         </div>
//         <div>
//           <label>Genre : </label>
//           <input type="text" name='genre' value={editedBook.genre} onChange={handleInputChange}  />
//         </div>
//         <div>
//           <label>Language : </label>
//           <input type="text" name="language" value={editedBook.language } onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Price : </label>
//           <input type="number" name="price" value={editedBook.price || ''} onChange={handleInputChange}style={{ margin:18 }}/>  
//         </div>
//         <div>
//           <label>Rating : </label>
//           <input type="number" name="star_rating" value={editedBook.star_rating || ''} onChange={handleInputChange} style={{ margin:6 }} />
//         </div>
//         <div>
//           <label>Published Date : </label>
//           <input type="date" name="published" value={editedBook.published || ''} onChange={handleInputChange}  style={{ margin:6 }}/>
//         </div>
     
//         <button type="submit">submit</button>
//       </div>
//     </form>
//   </div>
//   );
// };

// export default EditBook;



// EditBook.js
import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookDataContext } from './BooksContext';
import './EditBook.css'

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { allBooks, setAllBooks } = useContext(BookDataContext);
  const [editedBook, setEditedBook] = useState({});
  

  // Fetch the book data to edit
  useEffect(() => {
    const book = allBooks.find(book => book._id === parseInt(id));
  console.log("bookksss",book);

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
    navigate('/books'); // Redirect to book list page
  };

  return (
    <div className="edit-form-container">
    <form action="" onSubmit={handleSubmit}>
   
      <div>
        <div>
          <label>Title : </label>
          <input type="text" name="name" value={editedBook.name} onChange={handleInputChange}/>
        </div>
        <div>
          <label>Author : </label>
          <input type="text" name='author' value={editedBook.Author}  onChange={handleInputChange}/>
        </div>
        <div>
          <label>Genre : </label>
          <input type="text" name='genre' value={editedBook.genre} onChange={handleInputChange}  />
        </div>
        <div>
          <label>Language : </label>
          <input type="text" name="language" value={editedBook.language } onChange={handleInputChange} />
        </div>
        <div>
          <label>Price : </label>
          <input type="number" name="price" value={editedBook.price || ''} onChange={handleInputChange}style={{ margin:18 }}/>  
        </div>
        <div>
          <label>Rating : </label>
          <input type="number" name="star_rating" value={editedBook.star_rating || ''} onChange={handleInputChange} style={{ margin:6 }} />
        </div>
        <div>
          <label>Published Date : </label>
          <input type="date" name="published" value={editedBook.published || ''} onChange={handleInputChange}  style={{ margin:6 }}/>
        </div>
        <div>
          <label>Image : </label>
          <input type="file" name="image" value={editedBook.fileName || ''} onChange={handleInputChange}  style={{ margin:6 }}/>
        </div>
     
        <button type="submit">submit</button>
      </div>
    </form>
  </div>
  );
};

export default EditBook;
