import { useEffect, useState } from "react";
import {httpRequest} from "../../../services/httpclient";
export function Category(){
     const [allCats, setAllCats] = useState({})
    // TODO: Fetch all the categories from server
      useEffect(() => {
          httpRequest.getItem("/category")
          .then((response) => {

          })
          .catch((error) => {

          })
      },[allCats]);
      
      return(
          <>

            <h4>Category Page</h4>
            <hr></hr>
            <div className="container-fluid">
               <div className="row">
                <div className="col 12">
                    <table className="table table-sm table-borderd table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th>S.N</th>
                                <th>Title</th>
                                <th>Status</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
               </div> 
            </div>

          </>
      )
}