import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route, Outlet, useParams, useNavigate, Navigate} from "react-router-dom";
import Home from './home';
import {AdminHeader} from './header';
import { Register } from './register';
import Login from './login';
import Contact from './contact';
import Category from './category';
import Allproduct from './allproducts';


function Admin(){
  const navigate = useNavigate();
   const is_logged_in = localStorage.getItem("is_LoggedIn");
   console.log(is_logged_in);
 
     useEffect(() => {
      if(!is_logged_in){
       navigate("/login");
      }
     })
   
    return (
      <>
        <AdminHeader/>
        <h4>Admin panel</h4>
      </>
    )
}


function Product(){
  const navigate = useNavigate();
  const is_logged_in = localStorage.getItem("is_LoggedIn");
   console.log(is_logged_in);
 
     useEffect(() => {
      if(!is_logged_in){
       navigate("/login");
      }
     })
    return (
      <>
        <AdminHeader/>
        <h4>Product Page</h4>
        <hr></hr>
        <Outlet/>
      </>
    )
}

function ProductForm(){
  const navigate = useNavigate();
  const is_logged_in = localStorage.getItem("is_LoggedIn");
   console.log(is_logged_in);
 
     useEffect(() => {
      if(!is_logged_in){
       navigate("/login");
      }
     })
    return (
      <>
        <h4>Product Form</h4>
      </>
    )
}

function ProductDetail(){
    const params = useParams();
    console.log("Params ", params);
    return (
      <>
        <h4>Product Detail of: {params.id}</h4>
      </>
    )
}

function ProductEdit(){
    return (
      <>
        <h4>Product Edit</h4>
      </>
    )
}

function PrivateRoute({component: Component}){
     const is_logged_in = localStorage.getItem("is_LoggedIn");

     return (is_logged_in ? Component : <Navigate to ="/login"/>)
}


const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home/>}></Route>
                <Route path = "/home" element = {<Home/>}></Route>
                {/*Home component routing}
                <Route path = "/register" element = {<Register/>}></Route>
                <Route path = "/contact" element = {<Contact/>}></Route>
                <Route path = "/category" element = {<Category/>}></Route>
                <Route path = "/allproducts" element = {<Allproduct/>}></Route> */}
                
                {/*Admin coomponent routing*/}
                {/* <Route path = "/admin" element = {<AdminHeader/>}></Route> */}

                <Route path = "/admin" element = {<PrivateRoute component={<Admin></Admin>}>
                       
                </PrivateRoute>}></Route>

                <Route path = "/login" element = {<Login/>}></Route>

                {/*nested routing}*/}
                <Route path = "/product">
                    <Route index element = {<PrivateRoute component={<Product/>}></PrivateRoute>}/>
                    <Route path = "create" element = {<ProductForm/>}/>
                    <Route path = ":id" element = {<ProductDetail/>}/>
                    <Route path = "edit/:id" element = {<ProductEdit/>}/>
                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting;