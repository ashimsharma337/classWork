import { NavLink } from "react-router-dom";
import {FaLaughWink} from "react-icons/fa";


export function Sidebar(){
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div className="sidebar-brand-icon rotate-n-15">
            <FaLaughWink></FaLaughWink>
        </div>
        <div className="sidebar-brand-text mx-3">Admin Dashboard</div>
    </a>

    <hr className="sidebar-divider my-0" />

    <li className="nav-item">
        <NavLink className="nav-link" to="/admin">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
            
        </NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/admin/category">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Category</span>
            
        </NavLink>
    </li>
    <li className="nav-item">
        <NavLink className="nav-link" to="/logout">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Logout</span>
            
        </NavLink>
    </li>

    <hr className="sidebar-divider" />


</ul>
    )
}