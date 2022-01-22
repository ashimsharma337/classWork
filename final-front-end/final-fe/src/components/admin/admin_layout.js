import "../../assests/sb-admin-2.css";
import { NavLink, Outlet } from "react-router-dom"; 
import {FaLaughWink} from "react-icons/fa"
import { TopNav } from "./partials/topnav";
import { Sidebar } from "./partials/sidebar";


export function AdminLayout(){
    return(
    <>
    <div id="wrapper">
       <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
             <div id="content">
                  <TopNav></TopNav>
                    <div className="container-fluid">
                      <Outlet></Outlet>
                    </div>
            </div>
        </div>
    </div>
    </>
    )
}