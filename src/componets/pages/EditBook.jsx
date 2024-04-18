
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
//         <div>
//           <label>Image : </label>
//           <input type="file" name="image" value={editedBook.fileName || ''} onChange={handleInputChange}  style={{ margin:6 }}/>
//         </div>
     
//         <button type="submit">submit</button>
//       </div>
//     </form>
//   </div>
//   );
// };

// export default EditBook;




import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookDataContext } from './BooksContext';
import './EditBook.css'
import axios from 'axios';
import { useForm } from 'react-hook-form';

const EditBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const { allBooks, setAllBooks } = useContext(BookDataContext);
  const [editedBook, setEditedBook] = useState({});
  const [formValue, setFormValue] = useState({
    _id: null,
    name: "",
   author: "",
   genre: "",
   star_rating: "",
   published: "",
   price: "",
   language: "",
    image:""
  })
  
  const storedToken = window.localStorage.getItem("access_token")


  
  useEffect(() => {
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
    
    fetchBooks();
}, []); // Add an empty dependency array to ensure this effect runs only once after initial render

  
  const handleInputChange = (e) => {
    setFormValue(e.target.value,e.target.files)
  }


  const { register, handleSubmit} = useForm();

 

  const onSubmit = async(data) =>{
    const formData = new FormData();
    // formData.append("_id",formValue._id);
    formData.append("name",data.name);
    formData.append("author",data.author);
    formData.append("genre",data.genre);
    formData.append("star_rating",data.star_rating);
    formData.append("published",data.published);
    formData.append("price",data.price);
    formData.append("language",data.language);
    formData.append("image",data.image[0])
    console.log(data);
    await axios.patch(' https://book-store-node-27us.onrender.com/api/v1/books/edit',formData,)
    .then((res) => console.log(res.data))
      navigate('/books')

  }

  




  // // Fetch the book data to edit
  // useEffect(() => {
  //   const book = allBooks.find(book => book._id === parseInt(id));
  // console.log("bookksss",book);

  //   if (book) {
  //     setEditedBook({ ...book });
  //   }
  // }, [allBooks, id]);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setEditedBook(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setAllBooks(prevBooks =>
  //     prevBooks.map(book =>
  //       book._id === parseInt(id) ? editedBook : book
  //     )
  //   );
  //   navigate('/books'); // Redirect to book list page
  // };

  return (
    <div className="edit-form-container">
    <form action="" onSubmit={handleSubmit(onSubmit)}>
   
      <div>
        <div>
          <label>Title : </label>setFilteredBooks
          <input type="text" name="name" value={editedBook.name} onChange={handleInputChange} {...register("name")} />
        </div>
        <div>
          <label>Author : </label>
          <input type="text" name='author' value={editedBook.Author}  onChange={handleInputChange} {...register("author")} />
        </div>
        <div>
          <label>Genre : </label>
          <input type="text" name='genre' value={editedBook.genre} onChange={handleInputChange} {...register("genre")}  />
        </div>
        <div>
          <label>Language : </label>
          <input type="text" name="language" value={editedBook.language } onChange={handleInputChange} {...register("language")} />
        </div>
        <div>
          <label>Price : </label>
          <input type="number" name="price" value={editedBook.price || ''} onChange={handleInputChange}style={{ margin:18 }} {...register("price")} />  
        </div>
        <div>
          <label>Rating : </label>
          <input type="number" name="star_rating" value={editedBook.star_rating || ''} onChange={handleInputChange} style={{ margin:6 }} {...register("star_rating")}  />
        </div>
        <div>
          <label>Published Date : </label>
          <input type="date" name="published" value={editedBook.published || ''} onChange={handleInputChange}  style={{ margin:6 }} {...register("published")} />
        </div>
        <div>
          <label>Image : </label>
          <input type="file" name="image" value={editedBook.fileName || ''} onChange={handleInputChange}  style={{ margin:6 }} {...register("image")} />
        </div>
     
        <button type="submit">submit</button>
      </div>
    </form>
  </div>
  );
};

export default EditBook;
