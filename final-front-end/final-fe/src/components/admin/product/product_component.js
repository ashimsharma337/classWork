import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlus
 } from "react-icons/fa";
import { httpRequest } from "../../../services/httpclient";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { toast } from "react-toastify";
import { ActionButtons } from "../../common/action-btns/actionBtns_component";
export class Product extends React.Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
    }
    
    componentDidMount = () => {
        httpRequest.getItem("/product", true)
        .then((response) => {
           if(response.data.status){
               this.setState({
                   products: response.data.result
               })
           }
        })
        .catch((error) => {
           toast.error(error.data.msg); 
        })
    }
    
    deleteProduct = (id, deleteId) => {
      // console.log("Id: ", id);
      httpRequest.deleteItem("/product/"+id, true)
      .then((response) => {

         console.log("Response: ", response.data);

         if(response.data.status == 200){
          toast.success(response.data.msg)
          httpRequest.getItem("/product", true)
                .then((response) => {
                    if(response.data.status){
                        this.setState({
                            products: response.data.result
                        })
                    }
                })
                .catch((error) => {
                    toast.error(error.data.msg); 
                })
         }
      })
      .catch((response) => {
          toast.error(response.data.msg);
      })
    }

    render(){
        let {products} = this.state;
        return (
            <>
                <h4>
                    Product Page
                    <NavLink to="/admin/product/create" className="btn btn-sm btn-success float-right">
                        <FaPlus></FaPlus>&nbsp; Add Product
                    </NavLink>
                </h4>
            <hr></hr>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-sm table-borderd table-hover">
                            <thead className="table-dark">
                                <tr>
                                    <th>S.N</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Discount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((o, i) => (
                                        <tr key={i}>
                                           <td>{i+1}</td>
                                           <td>{o.title}</td>
                                           <td>{o.cat_id?.title}
                                               &nbsp;
                                               <sub>
                                                   {o.sub_cat_id?.title}
                                               </sub>
                                           </td>
                                           <td>{o.price}</td>
                                           <td>{o.discount}</td>
                                           <td>
                                              <ActionButtons
                                                  delIndex={i}
                                                  id={o._id}
                                                  onDelete={this.deleteProduct}
                                              />
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
}