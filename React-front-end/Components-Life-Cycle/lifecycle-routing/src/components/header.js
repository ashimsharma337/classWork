import react from "react";
import { Link } from "react-router-dom";

class Header extends react.Component{
    constructor(){
        super()
    }
    render(){
        return(
          <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
              <div className="container-fluid">
                    <Link className="navbar-brand" to="#">Local Bazar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="nav">
                      <li className="nav-link">
                        <Link to="/home" className = "navbar-brand"><i className="fas fa-home"></i>&nbsp;Home</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/category" className = "navbar-brand"><i className="fas fa-store"></i>&nbsp;Category</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/allproducts" className = "navbar-brand"><i className="fas fa-list"></i>&nbsp;All Poducts</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/contact" className = "navbar-brand"><i className="far fa-address-book"></i>&nbsp;Contact</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/login" className = "navbar-brand" ><i className="fas fa-sign-in-alt"></i>&nbsp;Login</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/register" className = "navbar-brand"><i className="fas fa-registered"></i>&nbsp;Register</Link>
                      </li>
                    </ul>
               </div>
          </nav>
        )
    }
}

export default Header;