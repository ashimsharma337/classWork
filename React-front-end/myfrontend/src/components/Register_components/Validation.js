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
            },
            isValidForm: true
        }
    }
    handleChange = (e) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        const {name, value} = e.target;

        // console.log("Before state: ", this.state);

        this.setState((preState) => ({

            data: {

            ...preState.data,

            [name]: value

            }
        }), () => {
            //console.log("After set:", this.state);
            this.validateForm(name);
        });
        // console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        for (let key in commonFields) {
            this.validateForm(key);
        }
        console.log(this.state);
        // http client request
    }
    validateForm = fieldName => {
        //validation logic
        const {data} = this.state;
        let errMsg = null;

        switch(fieldName){
            case "name":
                errMsg = data.name != null ? '' : "Name is required!";
                break;
            case "email":
                // http request for unique email
                errMsg = data.email != null ? (data.email.includes('@') && data.email.includes('.com') ? '' : "Invalid email format") : "Email is required";
                break;
            case "password":
                errMsg = data.password != null ? ((data.password.length >= 8) ? '' : "Password must be 8 digit") : "Password is required!";
                break;
            case "re_password":
            errMsg = data.re_password != null ? ((data.password == data.re_password) ? '' : "Password and confirm Password must match") : "Re-Password  is required!";
            break;
            case "roles":
                errMsg = data.roles != null ? '' : "Role is required!";
                break;
            default: 
                break;
        }

        this.setState((preError) => ({
             error: {
                 ...preError.error,
                 [fieldName]: errMsg
             },
             isValidForm: (errMsg ? true : false)
        }), () => {
            console.log("All Errors: ", this.state);
        })
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
                        <span className="text-danger">{this.state.error.name}</span>
                        </div>
                    </div>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Email:</label>
                        <div className ="col-sm-10">
                        <input type="email" className="form-control" onChange={this.handleChange} name="email"/>
                        <span className="text-danger">{this.state.error.email}</span>
                        </div>
                    </div>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Roles:</label>
                        <div className ="col-sm-10">
                            <select className="form-control" required onChange={this.handleChange} name="roles">
                                <option value="customer">Customer</option>
                                <option value="seller">Seller</option>
                            </select>
                            <span className="text-danger">{this.state.error.roles}</span>
                        </div>
                    </div>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Password:</label>
                        <div className ="col-sm-10">
                        <input type="password" className="form-control" onChange={this.handleChange} name="password"/>
                        <span className="text-danger">{this.state.error.password}</span>
                        </div>
                    </div>
                    <div className ="mb-3 mt-4 row">
                        <label className ="col-sm-2 col-form-label">Re-Password:</label>
                        <div className ="col-sm-10">
                        <input type="password" className="form-control" onChange={this.handleChange} name="re_password"/>
                        <span className="text-danger">{this.state.error.re_password}</span>
                        </div>
                    </div>
                    <div className="row mb-3">
                              <div className="offset-md-2 col-sm-12 col-md-9">
                                  <button disabled={this.state.isValidForm} className="btn btn-sm btn-success" onClick={this.handleSubmit} type="submit">Register</button>
                              </div> 
                    </div>
                  </form>
               </div>
        )}
}

export default Validation;