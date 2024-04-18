import { createContext, useEffect, useState } from "react";
import { books } from "../../util/BookApi";
import { Reviews } from "@mui/icons-material";
import { reviews } from "../../util/ReviewApi";


export const BookDataContext = createContext()

export const BookDataProvider = ({ children }) =>{
    const [allBooks,setAllBooks] = useState(books)
    const [allReview,setAllReview] = useState(reviews)
    const [isLogin, setIsLogin] = useState(!!localStorage.getItem("access_token"));

    const addBook = (data) => {
        setAllBooks(prev=> [...prev,data])
    }
    console.log(allBooks);

  const access_token = localStorage.getItem('access_token')
  const value= {isLogin,setIsLogin}

  useEffect(()=>{
    setIsLogin(access_token !== null)
  },[access_token])

    return (
        <BookDataContext.Provider value={ { allBooks,setAllBooks,addBook,allReview,setAllReview,isLogin,setIsLogin,access_token,value} }>
            { children }
        </BookDataContext.Provider>
    )
}