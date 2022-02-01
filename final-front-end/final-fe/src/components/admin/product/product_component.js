import React from "react";
import { NavLink } from "react-router-dom";
import { FaPlus
 } from "react-icons/fa";
export class Product extends React.Component{
    constructor(){
        super()
    }

    render(){
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
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}