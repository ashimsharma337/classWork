import react, {useState, useEffect} from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {Header} from "./header";
import axios from "axios";
import {toast, toastContaier, ToastContainer} from "react-toastify";


function Login(){
    // let email = "";
    // let password = "";
    const navigate = useNavigate();
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    
    const handleChange = (event) => {
         const {name, value, type} = event.target;

         if(name == "email"){
             setEmail(value);
         }
         if(name == "password"){
            setPassword(value);
        }
         
    } 
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("Email: ", email);
        // console.log("Password: ", password);
        // console.log(process.env.NODE_ENV);
        // console.log(process.env.REACT_APP_API_URL);
        // console.log(process.env);
        // calling server
        // fetch, axios, superagent 
        axios.post(`${process.env.REACT_APP_API_URL}/login`,
        {
            email: email,
            password: password
        },
        {
            // baseURL: ,
            // responseType: "json",
            // params: {},
            headers: {
                "content-Type": "application/json",
            },
            // timeout: 30000,
            // timeoutErrorMessage: "Request timeout"
        })
        .then((response) => {
            const result = response.data;
            if(result.status != 200){
                toast.error(result.msg);
            } else {
                localStorage.setItem("token", result.data.token);
                console.log(result.data.token);
                toast.success("Welcome To Admin Panel.");
                navigate("/admin");
            }
            // console.log("Response: ", response);
        })
        .catch((error) => {
            console.log("Error: ", error);
        });

        // localStorage.setItem("is_LoggedIn", true);
        // sessionStorage.setItem("is_LoggedIn", true);
        // navigate("/admin");
        
    }

   useEffect(() => {
       // console.log("component loaded");
      
       const is_logged_in = localStorage.getItem("is_LoggedIn");

       if(is_logged_in){
           navigate("/admin");
       }

   },[email, password]);


        return(
            <>
            <Header/>
            <div className="container">
             <form action="" onSubmit={handleSubmit}> 
                    <h4 className="text-center mt-3">Please Login</h4>
                    <hr></hr>
                    <div className="mb-3">
                        <label className="form-label mt-3">Email address</label>
                        <input type="email" className="form-control" name="email" onChange={handleChange}/>
                        <div className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" name="password" onChange={handleChange}/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary" >Login</button>
              </form>
            </div>
            <ToastContainer></ToastContainer>     
            </>
        )
    
}

export default Login;