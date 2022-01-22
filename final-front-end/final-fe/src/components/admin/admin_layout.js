import "../../assests/sb-admin-2.css";
import { Outlet } from "react-router-dom"; 
import { TopNav } from "./partials/topnav";
import { Sidebar } from "./partials/sidebar";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";


export function AdminLayout(){
   
   useEffect(() => {
     toast.success("Welcome to Admin panel.");
   });

    return(
    <>
    <div id="wrapper">
       <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
             <div id="content">
                  <TopNav></TopNav>
                    <div className="container-fluid">
                      <Outlet></Outlet>
                    </div>
            </div>
        </div>
    </div>
    <ToastContainer></ToastContainer>
    </>
    )
}