import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { httpRequest } from "../../../services/httpclient";
import { CategoryForm } from "./categoryForm_component";

export function CategoryEdit(){
    const navigate = useNavigate();
    
    let [cat, setCat] = useState({});
    let [isLoading, setIsLoading] = useState(false);

    let params = useParams();
    useEffect(() => {
        //TODO: Axios call to get category
        //console.log("Params: ", params);
        httpRequest.getItemById("category/"+params.id, true)
        .then((response) => {
            // console.log("Response: ", response);
            if(response.data.status == 200){
                setCat(response.data.result);
            }
        })
        .catch((error) => {
            console.error("Error: ")
        })
    },[isLoading]);
    
    const editCategory = (data) => {
        //console.log("Edit: ", data);
        httpRequest.updateById("category/"+params.id, data, true)
        .then((response) => {
            if(response.data.status == 200){
                toast.success(response.data.msg);
                navigate("/admin/category");
            }
        })
        .catch((error) => {
            console.error("Error: ");
        })
    }
    return (
        <>
            <h4>Category Update</h4>
            <hr/>
            <CategoryForm catInfo={cat} onSubmitCallback={editCategory}></CategoryForm>
        </>
    )
}