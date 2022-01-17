import react from "react";
import {Header} from "./header";

class Login extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
            <>
            <Header/>
            <div className="container">
             <form> 
                    <h4 className="text-center mt-3">Please Login</h4>
                    <hr></hr>
                    <div className="mb-3">
                        <label className="form-label mt-3">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
                    
            </>
        )
    }
}

export default Login;