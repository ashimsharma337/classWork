import react from "react";
import "../index.css";


class Footer extends react.Component{
      constructor(){
          super()
      }
      render(){
          return(
            <div className="footer">
            <i className="far fa-copyright"></i> Copyright 2022 Ashim Sharma
            </div>
          )
      }
}

export default Footer;