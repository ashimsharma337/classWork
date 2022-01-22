import React from "react"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import {Home} from "./common/home/home_component";
import { Login } from "./login/login_component";
import { Register } from "./register/register_component";
import { Logout } from "./logout/logout_component";
import { AdminLayout } from "./admin/admin_layout";
import { Dashboard } from "../components/admin/dashboard/dashboard_component";
import { Category } from "../components/admin/category/category_component";

function PrivateRoute({component: Component}){
    const is_logged_in = localStorage.getItem('token');
    
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

                <Route path="/admin" element={<PrivateRoute component={<AdminLayout></AdminLayout>}></PrivateRoute>}>

                       <Route index element={<Dashboard></Dashboard>}/>
                       <Route path="category" element={<Category></Category>}/>

                </Route>
                
                
                <Route path="/logout" element={<Logout></Logout>}></Route>
            </Routes>
        </BrowserRouter>
    );
}