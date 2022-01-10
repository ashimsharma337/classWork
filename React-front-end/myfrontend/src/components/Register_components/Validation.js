import react from "react";

const commonFields = {
    name: "",
    email: "",
    password: "",
    re_password: "",
    roles: "",
    status: "inactive"
};

class Validation extends react.Component{
    constructor(){
        super()
        this.state = {
            title: "Register Your Account!!",
            data: {
                ...commonFields
            },
            error: {
                ...commonFields
            }
           
        }
    }
    handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        const {name, value} = e.target;
        this.setState(() => ({
            [name]: value
        }), () => {
            console.log("State:", this.state);
        });
        // console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (<div className="container">
                 <form action="">
                    <h2 className = "text-center mt-5" >Register</h2>
                    <hr></hr>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Name:</label>
                        <div className ="col-sm-10">
                        <input type="name" className="form-control" onChange={this.handleChange} name="name"/>
                        </div>
                    </div>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Email:</label>
                        <div className ="col-sm-10">
                        <input type="email" className="form-control" onChange={this.handleChange} name="email"/>
                        </div>
                    </div>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Roles:</label>
                        <div className ="col-sm-10">
                            <select className="form-control" required onChange={this.handleChange} name="roles">
                                <option value="customer">Customer</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>
                    </div>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Password:</label>
                        <div className ="col-sm-10">
                        <input type="password" className="form-control" onChange={this.handleChange} name="password"/>
                        </div>
                    </div>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Re-Password:</label>
                        <div className ="col-sm-10">
                        <input type="password" className="form-control" onChange={this.handleChange} name="re_password"/>
                        </div>
                    </div>
                    <div className="row mb-3">
                              <div className="offset-md-2 col-sm-12 col-md-9">
                                  <button className="btn btn-sm btn-success" onClick={this.handleSubmit} type="submit">Register</button>
                              </div> 
                    </div>
                  </form>
               </div>
        )}
}

export default Validation;