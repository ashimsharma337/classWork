import React, { Component, useEffect } from 'react';
import { AdminHeader } from '../common/header/header_component';
import {toast, ToastContainer} from "react-toastify";


export default function Admin(){
    useEffect(() => {
    const login = localStorage.getItem("is_logged_in");
    if(login){
    toast.success("welcome to admin panel.");
    } else {
    toast.error("Good Bye!");
    }
  });
 
    return (
          <>
          <AdminHeader></AdminHeader>
          <div>Welcome to admin panel</div>
          <ToastContainer></ToastContainer>
          </>
    );
  
}
