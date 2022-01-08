import react from "react";

class Register extends react.Component{
    constructor(){
        super();
        this.state = {
            title: "Register your account!!",
            name: "",
            email: "",
            password: "",
            status: "",
            roles: ""
        }
    }
    handleChange = (e) => {
        // console.log(e.target);
        const {name, type, value} = e.target;
        // console.log(name);
        // console.log(type);
        // console.log(value);
        // this.state = ({
        //     [name]: value
        // });
        this.setState({
            [name]: value
        });
        // console.log("State:", this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }
    render(){
         return <div className="container">
                   <div className="row">
                      <div className="col-12">
                        <h4 className="text-center">Register User</h4>
                        <hr></hr>

                        <form action = "" onSubmit={this.handleSubmit}>
                            <div className="row mb-3">
                              <label className="col-sm-12 col-md-3">Name:</label>
                              <div className="col-sm-12 col-md-9">
                                  <input type="text" onChange = {this.handleChange} name = "name" className="form-controll form-controll-sm" placeholder="Enter your name..."/>
                              </div> 
                            </div>
                            <div className="row mb-3">
                              <label className="col-sm-12 col-md-3">Email:</label>
                              <div className="col-sm-12 col-md-9">
                                  <input type="email" onChange = {this.handleChange} name = "email" className="form-controll form-controll-sm" placeholder="Enter your email..."/>
                              </div> 
                            </div>
                            <div className="row mb-3">
                              <label className="col-sm-12 col-md-3">Password:</label>
                              <div className="col-sm-12 col-md-9">
                                  <input type="password" onChange = {this.handleChange} name = "password" className="form-controll form-controll-sm" placeholder="Enter your password..."/>
                              </div> 
                            </div>
                            <div className="row mb-3">
                              <div className="offset-md-3 col-sm-12 col-md-9">
                                  <button className="btn btn-sm btn-success" type="submit">Register</button>
                              </div> 
                            </div>
                        </form>
                      </div>
                   </div>
                   
                </div>
    }
}

export default Register;