import React from 'react';
import { Link, useLocation } from "react-router-dom";
import "./css/Sidebar.css";
const Sidebar = ()=>{
    let location = useLocation();
    return(
        <div className="sidebar">
            <ul className="relative ">
                <li className="sidebtn flex h-16 items-center justify-center ">
                    <Link to="/register" className={`${location.pathname === "/register" ? "active" : ""}`} id="Home">Form</Link> 
                </li>
                <li className="sidebtn flex h-16 items-center justify-center ">
                    <Link  className={`${location.pathname === "/forminfo" ? "active" : ""}`} id="Home" to="/forminfo">Hall Ticket</Link> 
                </li>
            </ul>
        </div>
    )
}

export default Sidebar