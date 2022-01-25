import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { httpRequest } from "../../../services/httpclient";
import { CategoryForm } from "./categoryForm_component";

export function CategoryCreate(){
    const navigate = useNavigate();
    // 
    const addCategory = (data) => {
        console.log("Submit: ", data);
        // TODO: Category register
        httpRequest.postItem("category", data, true)
        .then((response) => {
            // console.log("Response: ", success);
            if(response.data.status == 200){
                toast.success(response.data.msg);
                navigate("/admin/category");
            } else {
                toast.error(response.data.msg);
            }

        })
        .catch((error) => {
            console.log("Error: ", error);
        })
    }
    return (
        <>
            <h4>Category Add</h4>
            <hr/>
            <CategoryForm data={null} onSubmitCallback={addCategory}></CategoryForm>
        </>
    )
}