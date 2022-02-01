import react from "react"
import reactDom from "react-dom";
import { FaPaperPlane } from "react-icons/fa";
import { httpRequest } from "../../../services/httpclient";

const commonFields = {
    title: "",
    price: "",
    discount: "",
    cat_id: "",
    description: "",
    is_featured: false,
    status: "",
    sub_cat_id: ""
}

export class ProductForm extends react.Component{
    constructor(props){
        super(props)
        this.state = {
            data: {
                ...commonFields
            },
            error: {
                ...commonFields
            },
            parent_cats: [],
            child_cats: []
        }
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log("Data: ", this.state);
    }


    handleChange = (ev) => {
        const {type, value, name, files} = ev.target;
        
        if(name == "cat_id"){
            httpRequest.getItem("category/child/"+value, true)
            .then((response) => {
                if(response.data.status == 200){
                    this.setState({child_cats: response.data.result});
                } else {
                    this.setState({
                        child_cats: []
                    })
                }
            })
            .catch((error) => {
                console.log("Error: ", error);
            })
        }

        this.setState((preState) => (
            {
                data: {
                    ...preState.data,
                    [name]: value
                }
            }
        ), () => {
            //TODO: Validation Logic
            // console.log(this.state.data);
        })

       
    }

    componentDidMount = () => {
        httpRequest.getItem("category/parent", true)
        .then((response) => {
            // console.log("Response: ", response);
            if(response.data.status == 200){
                this.setState({
                    parent_cats: response.data.result
                })
            } else {
                this.setState({
                    parent_cats: []
                })
            }
        })
        .catch((error) => {
            console.log("Error: ", error);
        })
    }

    render(){
        return (
            <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <form action="" className="form" onSubmit={this.handleSubmit}>
                            
                          <div className="row mb-3">
                              <label className="col-sm-3">Title: </label>
                              <div className="col-sm-9">
                                  <input type="text" onChange={this.handleChange} name="title" required placeholder="enter product title" className="form-control form-control-sm"/>
                                  <span className="text-danger"></span>
                              </div>
                          </div>
                          <div className="row mb-3">
                              <label className="col-sm-3">Description: </label>
                              <div className="col-sm-9">
                                  <textarea name="description" onChange={this.handleChange} className="form-control form-control-sm" rows="7" style={{"resize": "none"}}/>
                                  <span className="text-danger"></span>
                              </div>
                          </div>
                          <div className="row mb-3">
                              <label className="col-sm-3">Price: </label>
                              <div className="col-sm-9">
                                  <input type="number" onChange={this.handleChange} name="price" required placeholder="enter product price" min={0} className="form-control form-control-sm"/>
                                  <span className="text-danger"></span>
                              </div>
                          </div>  

                          <div className="row mb-3">
                              <label className="col-sm-3">Discount(%): </label>
                              <div className="col-sm-9">
                                  <input type="number" onChange={this.handleChange} name="discount" placeholder="enter product discount" min={0} max={100} className="form-control form-control-sm"/>
                                  <span className="text-danger"></span>
                              </div>
                          </div>  

                          <div className="row mb-3">
                              <label className="col-sm-3">Category: </label>
                              <div className="col-sm-9">
                                  <select onChange={this.handleChange} name="cat_id" className="form-control form-control-sm">
                                     <option value="">--Select Any One--</option>
                                     {
                                         this.state.parent_cats.map((o, index) => (
                                             <option key={index} value={o._id}>
                                                 {o.title}
                                             </option>
                                         ))
                                     }
                                  </select>
                                  <span className="text-danger"></span>
                              </div>
                          </div>

                          <div className="row mb-3">
                              <label className="col-sm-3">Sub-Category: </label>
                              <div className="col-sm-9">
                                  <select onChange={this.handleChange} name="sub_cat_id" className="form-control form-control-sm">
                                     <option value="">--Select Any One--</option>
                                     {
                                         this.state.child_cats.map((o, index) => (
                                             <option key={index} value={o._id}>
                                                 {o.title}
                                             </option>
                                         ))
                                     }
                                  </select>
                                  <span className="text-danger"></span>
                              </div>
                          </div>  

                          <div className="row mb-3">
                                    <label className="col-sm-3">Is Featured: </label>
                                    <div className="col-sm-9">
                                        <label htmlFor="featured">
                                            <input type="checkbox" onChange={this.handleChange} id="featured" name="is_featured" value={1} /> Yes
                                        </label>
                                    </div>
                          </div> 

                           <div className="row mb-3">
                                    <label className="col-sm-3">Status: </label>
                                    <div className="col-sm-9">
                                        <select name="status" onChange={this.handleChange} required className="form-control form-control-sm">
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                        <span className="text-danger"></span>
                                    </div>
                           </div>

                           <div className="row mb-3">
                                    <label className="col-sm-3">Image: </label>
                                    <div className="col-sm-3">
                                        <input type="file" onChange={this.handleChange} name="image" multiple />
                                    </div>
                                    
                                    <div className="col-sm-6">
                                        <div className="row mb-3">

                                        </div>
                                    </div>
                            </div>

                            <div className="row mb-3">
                                    <div className="offset-sm-3 col-sm-9">
                                        <button className="btn btn-sm btn-success" type="submit">
                                            <FaPaperPlane></FaPaperPlane> Submit
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
      
}