import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./home/Home";
import List from "./books/List";
import ViewBook from "./books/ViewBook";
import AddBook from "./AddBook";
import About from "./About/About";
import EditBook from "./EditBook";
import Login from "./loginForm/Login"
import Register from "./registerForm/Register";
import { Form } from "formik";


const Pages = () => {
 
  return (
    <>
     <BrowserRouter>
     <Layout>
        <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route path="/books" element={<List/>}/>
            <Route path='/bookView/:_id' element={<ViewBook/>}/>
            <Route path="/add" element={<AddBook/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/BookEdit/:id" element={<EditBook/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
     </Layout>
     </BrowserRouter>
    </>
  );
};

export default Pages;
