import {useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";


export function Logout(){
    const navigate = useNavigate();
    
    
    useEffect(() => {
        localStorage.clear();
        toast.error("Good bye!")
        navigate("/admin");
    })
    
    return(
     <>
     <h1>Logout page</h1>
     <ToastContainer></ToastContainer>
     </>
    )
}