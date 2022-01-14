import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home';
import Header from './header';
import { Register } from './register';

const AppRouting = () => {
    return (
        <BrowserRouter>
           <Header/>
            <Routes>
                <Route path = "/home" element = {<Home/>}></Route>
                <Route path = "/register" element = {<Register/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting;