import { useEffect, useState } from "react";
import {httpRequest} from "../../../services/httpclient";
import {FaPlus, FaPen, FaTrash} from "react-icons/fa";
import { NavLink } from "react-router-dom"; 
import { toast } from "react-toastify";
export function Category(){
     const [allCats, setAllCats] = useState([])
    // TODO: Fetch all the categories from server
     const [is_loading, setIsLoading] = useState(true);
      useEffect(() => {
          httpRequest.getItem("/category")
          .then((response) => {
                setAllCats(response.data.result);
                setIsLoading(false);
                // console.log("Reponse", response);
          })
          .catch((error) => {
               setIsLoading(false);
          })
      }, [is_loading]);

      const deleteCat = (index, id) => {
        //    console.log("Index: ", index);
        //    console.log("Id: ", id);
        httpRequest.deleteItem("/category/"+id, true)
        .then((response) => {
            // console.log("reponse: ", response.data);
            if(response.data.status == 200){
               // TODO for us: axios :useEffect from above
               let new_cats = allCats.filter((o, ind) => (ind !== index))
               setAllCats(new_cats);
            } else {
                toast.error(response.data.msg);
            }
        })
        .catch((error) => {

        })
      }
      
      return(
          <>

            <h4>
                Category Page
                <NavLink to="/admin/category/create" className = "btn btn-sm btn-success float-right">
                    <FaPlus></FaPlus>&nbsp; Add Category 
                </NavLink>
            </h4>
            <hr></hr>
            <div className="container-fluid">
               <div className="row">
                <div className="col 12">
                    <table className="table table-sm table-borderd table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>S.N</th>
                                <th>Title</th>
                                <th>Is Parent</th>
                                <th>Parent Cat</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {
                              allCats.map((cat, ind) => (
                                  <tr key={ind}>
                                      <td>{ind+1}</td>
                                      <td>{cat.title}</td>
                                      <td>{cat.parent_id ? "No" : "Yes"}</td>
                                      <td>
                                          {cat.parent_id ? cat.parent_id.title : "-"}
                                      </td>
                                      <td>
                                        <a href ="" className="btn btn-sm btn-success btn-circle">
                                            <FaPen></FaPen>
                                        </a>
                                        &nbsp;
                                        <button onClick={(ev) => {
                                            let confirmed = window.confirm("Are You sure you want to delete this category ?");
                                            if(confirmed){
                                                return deleteCat(ind, cat._id);
                                            }
                                        }} className="btn btn-sm btn-danger btn-circle">
                                            <FaTrash></FaTrash>
                                        </button>
                                      </td>
                                  </tr>
                              ))
                           }
                        </tbody>
                    </table>
                </div>
               </div> 
            </div>

          </>
      )
}