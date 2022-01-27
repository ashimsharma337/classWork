import { useNavigate } from "react-router-dom";
import { CategoryForm } from "./categoryForm_component";
import { CategoryService } from "./category_service";
import { toast } from "react-toastify";

export function CategoryCreate(){
    const navigate = useNavigate();
    let catSvc = new CategoryService;


    const addCategory = (data) => {
        //console.log("Submit: ", data);
        // TODO: Category register
        catSvc.addCategory(data, (err, response) => {
            console.log("Response: ", response);
        });
        // if(response.data.status == 200){
        //     toast.success(response.data.msg);
        //     navigate("/admin/category");
        // } else {
        //     toast.error(response.data.msg);
        // }

       
    }
    return (
        <>
            <h4>Category Add</h4>
            <hr/>
            <CategoryForm data={{}} onSubmitCallback={addCategory}></CategoryForm>
        </>
    )
}