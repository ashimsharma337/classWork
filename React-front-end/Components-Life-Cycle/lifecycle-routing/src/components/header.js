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
                    <Link className="navbar-brand" to="#">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className="nav">
                      <li className="nav-link">
                        <Link to="/home" className = "navbar-brand">Home</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/category" className = "navbar-brand">Category</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/allproducts" className = "navbar-brand">All Poducts</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/contact" className = "navbar-brand">Contact</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/login" className = "navbar-brand">Login</Link>
                      </li>
                      <li className="nav-link">
                        <Link to="/register" className = "navbar-brand">Register</Link>
                      </li>
                    </ul>
               </div>
          </nav>
        )
    }
}

export default Header;