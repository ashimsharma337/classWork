import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlus
 } from "react-icons/fa";
import { httpRequest } from "../../../services/httpclient";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import { toast } from "react-toastify";
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