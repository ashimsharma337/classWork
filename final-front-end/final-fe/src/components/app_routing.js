import React from "react"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Home} from "./common/home/home_component";
import { Login } from "./login/login_component";
import { Register } from "./register/register_component";
import  Admin  from "./admin/admin";
import { Logout } from "./logout/logout_component";

function PrivateRoute({component: Component}){
    const is_logged_in = localStorage.getItem('is_logged_in');
    
    // TODO: Token, verify in server 

    return is_logged_in ? Component : <Navigate to="/login"></Navigate>
    // if(is_logged_in) {
    //     return Component;
    // } else {
    //     return <Navigate to="/login"></Navigate>;
    // }
    
}




export function AppRouting(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route path="/admin" element={<PrivateRoute component={<Admin></Admin>}></PrivateRoute>}></Route>
                <Route path="/logout" element={<Logout></Logout>}></Route>
            </Routes>
        </BrowserRouter>
    );
}