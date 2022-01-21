import { Link, NavLink } from "react-router-dom";


export function Header(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div id="row" className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="nav">
                    <li className="nav-link">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/product">Product</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
    </nav>
    );
}

export function AdminHeader(){
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div id="row" className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="nav">
                    <li className="nav-link">
                        <Link to="/admin">Dashboard</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/product">Product</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/product/create">Product Add</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/product/123">Product Detail</Link>
                    </li>
                    <li className="nav-link">
                        <Link to="/product/edit/1">Product Edit</Link>
                    </li>
                    
                    <li className="nav-link">
                        <Link to="/logout">logout</Link>
                    </li>
                </ul>
            </div>
    </nav>
    );
}