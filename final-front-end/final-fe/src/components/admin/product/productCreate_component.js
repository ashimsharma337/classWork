import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "./productForm_component";
import  { toast, ToastContainer } from "react-toastify";
import { httpRequest } from "../../../services/httpclient";

class ProductCreateCompononent extends React.Component{
    constructor(props){
        super(props)
    }

    addProduct = (data, file) => {
        // console.log("Data ", data);
        // console.log("Image ", file);
        httpRequest.uploader("post", "product", data, file, true)
        .then((response) => {
             toast.success(response.msg);
             this.props.navigate("/admin/product");
        })
        .catch((error) => {
             toast.error(error.msg);
        })
        
    }


    render(){
        return (
            <>
                <h4>
                    Product Add
                </h4>
                <ToastContainer></ToastContainer>
                <ProductForm handleSubmit={this.addProduct}></ProductForm>
            </>
        )
    }
}

export function ProductCreate(){
    const navigate = useNavigate()
    return (
        <ProductCreateCompononent navigate={navigate} />
    )
}