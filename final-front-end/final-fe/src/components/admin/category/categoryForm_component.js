import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { httpRequest } from "../../../services/httpclient";
export function CategoryForm(props) {
    //console.log(props);
    
    const [title, setTitle] = useState("");
    const [parent_id, setParentId] = useState(null);
    const [allCats, setAllCats] = useState([]);
    const [is_loading, setIsLoading] = useState(true);

    const [data, setData] = useState(props.data);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            title: title,
            parent_id: parent_id,
        };
        props.onSubmitCallback(data);
    }

    useEffect(() => {
        httpRequest.getItem('/category')
        .then((response) => {
            //console.log("Response: ", response);
            if(response.status == 200){
                if(response.data.result.length > 0){
                    let allparents = response.data.result.filter((o) => (o.parent_id == null));

                    setAllCats(allparents);
                }
            }
        })
    }, [is_loading])
    
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group row">
                                <lable className="col-sm-12 col-md-3">Title:</lable>
                                <div className="col-sm-12 col-md-9">
                                   
                                   <input type="text" onChange={(e) => (
                                        setTitle(e.target.value)
                                   )} className="form-control form-control-sm" name="title" placeholder="Enter Category Title"></input>
                                </div>
                            </div>
                            <div className="form-group row">
                                <lable className="col-sm-12 col-md-3">Child of:</lable>
                                <div className="col-sm-12 col-md-9">
                                   <select className="form-control form-control-sm" onChange={(e) => (
                                           setParentId(e.target.value)
                                   )} name="parent_id">
                                       <option value="">--Select Any one--</option>
                                       {
                                           allCats.map((o, index) => (
                                               <option key={index} value={o._id}>
                                                   {o.title}
                                               </option> 
                                           ))
                                       }
                                   </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <div className="offset-md-3 col-md-9">
                                   <button className="btn btn-sm btn-success">
                                       <FaPaperPlane></FaPaperPlane>&nbsp; Submit
                                   </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}