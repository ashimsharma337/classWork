import React from "react";
import { useNavigate } from "react-router-dom";
import { ProductForm } from "./productForm_component";
import  { toast, ToastContainer } from "react-toastify";
class ProductCreateCompononent extends React.Component{
    constructor(props){
        super(props)
    }

    addProduct = (data, file) => {

    }


    render(){
        return (
            <>
                <h4>
                    Product Add
                </h4>
                <ToastContainer></ToastContainer>
                <ProductForm></ProductForm>
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