import react from "react";
import reactdom from "react-dom";
import App from "./components/login_components/Login"
import Props from "./Props";
import State from "./State";

reactdom.render(
    <>
    <App/>
    <Props name="Ashim" address="kathmandu"></Props>
    <State/>
    </>
    ,document.getElementById("app")
);