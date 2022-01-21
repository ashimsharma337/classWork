import React from "react";
import { Header } from "../common/header/header_component";


const commonFields = {
    name: '',
    email: '',
    password: '',
    re_password: '',
    status: 'inactive',
    role: ''
};

export class Register extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state ={
            title: "Register your account!!",
            data: {
                ...commonFields
            },
            error: {
                ...commonFields
            },
            isValidForm: true
        };
    }

    handleChange = (e) =>{
        const {name, type, value} = e.target;

        this.setState((preState) => ({

            data: {
                ...preState.data,
                [name]: value
            }

        }), () => {
            this.validateForm(name);
        });

    }
    handleSubmit = (event) => {
        event.preventDefault();
        for(let key in commonFields){
            this.validateForm(key);
        }
        console.log(this.state);
        // http client req 
    }

    validateForm = fieldName => {
        // validation logic:
        const {data} = this.state;
        let errMsg = null;

        switch(fieldName){
            case "name":
                errMsg = data.name != null ? '' : 'Name is required';
                break;
            case "email":
                // http req 
                errMsg = data.email != null ? (data.email.includes('@') && data.email.includes('.com') ? '' : 'Invalid Email format') : 'Email is required';
                break;
            case "password":
                errMsg = data.password != null ? ((data.password.length >= 8) ? '' : 'Password Must be 8 character long') : 'Password is required';
                break;
            case "re_password":
                errMsg = data.re_password != null ? 
                            ((data.password == data.re_password ) ? '' :'Password and confirm password does not match.')
                        : 'Re-Password is required';
                break;
            case "role":
                errMsg = data.role != null ? '' : 'Role is required';
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
            console.log("All Errors: ", this.state)
        })
    }

    render(){
        return (
           <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-center">Register User</h4>
                        <hr />

                        <form action="" onSubmit={this.handleSubmit}>
                            <div className="row mb-3">
                                <label className="col-sm-12 col-md-3">Name:</label>
                                <div className="col-sm-12 col-md-9">
                                    <input type="text" onChange={this.handleChange} className="form-control form-control-sm" placeholder="Enter Your name..." name="name" id="name" />
                                    <span className="text-danger">{this.state.error.name}</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-12 col-md-3">Email:</label>
                                <div className="col-sm-12 col-md-9">
                                    <input type="email" onChange={this.handleChange}  className="form-control form-control-sm" placeholder="Enter Your name..." name="email" />
                                    <span className="text-danger">{this.state.error.email}</span>
                                
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-12 col-md-3">Password:</label>
                                <div className="col-sm-12 col-md-9">
                                    <input type="password" onChange={this.handleChange}  className="form-control form-control-sm" placeholder="Enter Your Password..." name="password" />
                                    <span className="text-danger">{this.state.error.password}</span>
                                
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-sm-12 col-md-3">Re-Password:</label>
                                <div className="col-sm-12 col-md-9">
                                    <input type="password" onChange={this.handleChange}  className="form-control form-control-sm" placeholder="Enter Your Password..." name="re_password" />
                                    <span className="text-danger">{this.state.error.re_password}</span>
                                
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label className="col-sm-12 col-md-3">Role:</label>
                                <div className="col-sm-12 col-md-9">
                                    <select name="role" onChange={this.handleChange} required id="role" className="form-control form-control-sm">
                                        <option value="customer">Customer</option>
                                        <option value="seller">Seller</option>
                                    </select>
                                    <span className="text-danger">{this.state.error.role}</span>

                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="offset-md-3 col-sm-12 col-md-9">
                                    <button disabled={this.state.isValidForm} className="btn btn-sm btn-success" type="submit">
                                        Register
                                    </button>


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           </>
        );
    }
}