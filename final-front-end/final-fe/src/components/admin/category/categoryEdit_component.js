import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { httpRequest } from "../../../services/httpclient";
import { CategoryForm } from "./categoryForm_component";

export function CategoryEdit(){
    const navigate = useNavigate();
    // 
    const editCategory = (data) => {
        
    }
    return (
        <>
            <h4>Category Add</h4>
            <hr/>
            <CategoryForm data={null} onSubmitCallback={editCategory}></CategoryForm>
        </>
    )
}