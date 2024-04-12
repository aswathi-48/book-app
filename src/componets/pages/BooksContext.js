import { createContext, useState } from "react";
import { books } from "../../util/BookApi";
import { Reviews } from "@mui/icons-material";


export const BookDataContext = createContext()

export const BookDataProvider = ({ children }) =>{
    const [allBooks,setAllBooks] = useState(books)
    const [review, setReview ] = useState(Reviews)
    const addBook = (data) => {
        setAllBooks(prev=> [...prev,data])
    }

    return (
        <BookDataContext.Provider value={ { allBooks,setAllBooks,addBook,review,setReview} }>
            { children }
        </BookDataContext.Provider>
    )
}