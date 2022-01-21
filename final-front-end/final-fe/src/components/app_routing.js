import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./common/home/home_component";





export function AppRouting(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </BrowserRouter>
    );
}