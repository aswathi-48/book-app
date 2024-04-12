import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "./home/Home";
import List from "./books/List";
import ViewBook from "./books/ViewBook";
import AddBook from "./AddBook";


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
        </Routes>
     </Layout>
     </BrowserRouter>
    </>
  );
};

export default Pages;
