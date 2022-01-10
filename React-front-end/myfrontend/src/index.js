import react from "react";
import reactdom from "react-dom";
import App from "./components/login_components/Login"
import Props from "./Props";
import State from "./State"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from "./components/Register_components/Register"
import Header from "./components/Header";
import Validation from "./components/Register_components/Validation";


reactdom.render(
    <>
    {/*<Login/>
    <Props name="Ashim" address="kathmandu"></Props>
    <State/>*/}
    <Header/>
    {/* <Register/> */}
    <Validation/>
    </>
    ,document.getElementById("app")
);