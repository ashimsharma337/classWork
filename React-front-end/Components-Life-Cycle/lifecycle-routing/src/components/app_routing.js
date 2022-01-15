import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home';
import Header from './header';
import { Register } from './register';
import Login from './login';
import Contact from './contact';
import Category from './category';
import Allproduct from './allproducts';

const AppRouting = () => {
    return (
        <BrowserRouter>
           <Header/>
            <Routes>
                <Route path = "/home" element = {<Home/>}></Route>
                <Route path = "/register" element = {<Register/>}></Route>
                <Route path = "/login" element = {<Login/>}></Route>
                <Route path = "/contact" element = {<Contact/>}></Route>
                <Route path = "/category" element = {<Category/>}></Route>
                <Route path = "/allproducts" element = {<Allproduct/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting;