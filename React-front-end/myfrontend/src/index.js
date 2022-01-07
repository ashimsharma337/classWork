import react from "react";
import reactdom from "react-dom";
import App from "./components/login_components/Login"
import Props from "./Props";

reactdom.render(
    <>
    <App/>
    <Props name="Ashim" address="kathmandu"></Props>
    </>
    ,document.getElementById("app")
);