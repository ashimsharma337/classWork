import React, {useEffect} from 'react'
import {BrowserRouter, Routes, Route, Outlet, useParams, useNavigate, Navigate, Link} from "react-router-dom";
import Home from './home';
import {AdminHeader} from './header';
import { Register } from './register';
import Login from './login';
import Contact from './contact';
import Category from './category';
import Allproduct from './allproducts';
import { toast, ToastContainer } from 'react-toastify';
import DataTable from 'react-data-table-component';


function Admin(){
  const navigate = useNavigate();
   const is_logged_in = localStorage.getItem("token");
   // console.log(is_logged_in);
 
     useEffect(() => {
      if(!is_logged_in){
       navigate("/login");
      }
     })
    toast.success("Welcome to admin Panel.");
    return (
      <>
        <AdminHeader/>
        <ToastContainer></ToastContainer>
        <h4>Admin panel</h4>
      </>
    )
}

function Actions(){
      return(
        <>
          <Link to ="/edit">Edit</Link>
          <Link to ="/delete">Delete</Link>
        </>
      )
}

function Product(){
  const navigate = useNavigate();
  const is_logged_in = localStorage.getItem("token");
  const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Category',
        selector: row => row.category,
        sortable: true,
    },
    {
      name: 'Price',
      selector: row => row.price,
      sortable: true,
    },
    {
      name: 'Discount',
      selector: row => row.discount,
      sortable: false,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: false,
    },
    {
      name: 'Action',
      selector: row => (<Actions></Actions>),
      sortable: false,
    },
];

const data = [
    {
        id: 1,
        title: 'Product 1 ',
        category: 'SmartPhones',
        price: 20000,
        discount: 0,
        status: "active"
    },
    {
        id: 2,
        title: 'Product 2 ',
        category: 'SmartPhones',
        price: 15000,
        discount: 0,
        status: "inactive", 
    },
];
   console.log(!is_logged_in);
 
     useEffect(() => {
      if(!is_logged_in){
       navigate("/login");
      }
     })
    return (
      <>
        <AdminHeader/>
        <DataTable
            columns={columns}
            data={data}
        />
        <Outlet/>
      </>
    )
}

function ProductForm(){
  const navigate = useNavigate();
  const is_logged_in = localStorage.getItem("token");
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
     const is_logged_in = localStorage.getItem("token");

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