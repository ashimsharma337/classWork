import react from "react";
import "../index.css";
import image from "../ecom-pic.jpg";
import image2 from "../icom-2.png";
import {Header} from "../components/header";

class Home extends react.Component{
    constructor() {
        super()
    }
    render(){
        return(
            <>
                <Header/>
                <img className="ecom-image" src={image2} alt= "ecommerce picture"/>
            </>
        )
    }
}

export default Home;
