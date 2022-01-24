import { CategoryForm } from "./categoryForm_component";

export function CategoryCreate(){
    // 
    const addCategory = (data) => {
        console.log("Submit: ", data);
        // TODO: Category register
    }
    return (
        <>
            <h4>Category Add</h4>
            <hr/>
            <CategoryForm data={null} onSubmitCallback={addCategory}></CategoryForm>
        </>
    )
}