import React from 'react'
import {BrowserRouter, Routes, Route, Outlet} from "react-router-dom";
import Home from './home';
import {AdminHeader} from './header';
import { Register } from './register';
import Login from './login';
import Contact from './contact';
import Category from './category';
import Allproduct from './allproducts';


function Admin(){
    return (
      <>
        <AdminHeader/>
        <h4>Admin panel</h4>
      </>
    )
}


function Product(){
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
    return (
      <>
        <h4>Product Form</h4>
      </>
    )
}

function ProductDetail(){
    return (
      <>
        <h4>Product Detail</h4>
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


const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<Home/>}></Route>
                <Route path = "/home" element = {<Home/>}></Route>
                {/*Home component routing}
                <Route path = "/register" element = {<Register/>}></Route>
                <Route path = "/login" element = {<Login/>}></Route>
                <Route path = "/contact" element = {<Contact/>}></Route>
                <Route path = "/category" element = {<Category/>}></Route>
                <Route path = "/allproducts" element = {<Allproduct/>}></Route> */}
                
                {/*Admin coomponent routing*/}
                <Route path = "/admin" element = {<AdminHeader/>}></Route>
                <Route path = "/dashboard" element = {<Admin/>}></Route>

                {/*nested routing}*/}
                <Route path = "/product" element = {<Product/>}>
                    <Route path = "create" element = {<ProductForm/>}/>
                    <Route path = ":id" element = {<ProductDetail/>}/>
                    <Route path = "edit/:id" element = {<ProductEdit/>}/>
                    
                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouting;