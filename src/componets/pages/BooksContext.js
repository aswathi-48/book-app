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
    console.log(allBooks);

  

    return (
        <BookDataContext.Provider value={ { allBooks,setAllBooks,addBook,allReview,setAllReview} }>
            { children }
        </BookDataContext.Provider>
    )
}