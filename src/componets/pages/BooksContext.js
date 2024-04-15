import { createContext, useState } from "react";
import { books } from "../../util/BookApi";
import { Reviews } from "@mui/icons-material";
import { reviews } from "../../util/ReviewApi";


export const BookDataContext = createContext()

export const BookDataProvider = ({ children }) =>{
    const [allBooks,setAllBooks] = useState(books)
    const [allReview,setAllReview] = useState(reviews)
    const addBook = (data) => {
        setAllBooks(prev=> [...prev,data])
    }

    const deleteBook = (id) => {
        setAllBooks((prev) => prev.filter((book) => book._id !== id));
      };

    return (
        <BookDataContext.Provider value={ { allBooks,setAllBooks,addBook,allReview,setAllReview,deleteBook} }>
            { children }
        </BookDataContext.Provider>
    )
}