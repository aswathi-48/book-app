import { createContext, useState } from "react";
import { books } from "../../util/BookApi";


export const BookDataContext = createContext()

export const BookDataProvider = ({ children }) =>{
    const [allBooks,setAllBooks] = useState(books)

    return (
        <BookDataContext.Provider value={ { allBooks,setAllBooks } }>
            { children }
        </BookDataContext.Provider>
    )
}