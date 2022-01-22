import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../login/login_component.css"
import { Header } from "../common/header/header_component";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




export function Login(){
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        const {name, value, type} = event.target;
        if(name === 'email'){
            
            setEmail(value);
        }
        if(name === 'password'){
            setPassword(value);
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: server call , response 
        // if success, store 
        // fetch, axios, superagent 
       
        
        localStorage.setItem('is_logged_in', true);
        toast.success("Welcome to admin panel.");
        navigate("/admin");
    }

    useEffect(() => {
        // network caller 

        const is_logged_in = localStorage.getItem("is_logged_in");
        console.log("Is logged_in", is_logged_in);
        if(is_logged_in){
            navigate('/admin');
        } 
    });

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-center">Login User</h4>
                        <hr />

                        <form action="" onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <label className="col-sm-12 col-md-3">Email:</label>
                                <div className="col-sm-12 col-md-9">
                                    <input type="email" onChange={handleChange}  className="form-control form-control-sm" placeholder="Enter Your name..." name="email" />
                                    <span className="text-danger">{''}</span>
                                
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-12 col-md-3">Password:</label>
                                <div className="col-sm-12 col-md-9">
                                    <input type="password" onChange={handleChange}  className="form-control form-control-sm" placeholder="Enter Your Password..." name="password" />
                                    <span className="text-danger">{''}</span>
                                
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="offset-md-3 col-sm-12 col-md-9">
                                    <button className="btn btn-sm btn-success" type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </>

    )
}