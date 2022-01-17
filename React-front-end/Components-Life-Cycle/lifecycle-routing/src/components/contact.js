import react from "react";
import {Header} from "./header";

class Contact extends react.Component{
     constructor(){
         super()
     }
     render(){
         return(
          <>
          <Header/>
           <div className="container">
               <h4 className="text-center mt-3">We like to hear from you!</h4>
               <hr></hr>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Send Us</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    <button type="submit" className="btn-primary mt-3">Send</button>
                </div>
          </div>
        </>
         )
     }

}

export default Contact;