import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './home';
import Header from './header';

const AppRouting = () => {
    return (
        <BrowserRouter>
           <Header/>
            <Routes>
                <Route path = "/" element = {<Home/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting;