import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import './css/dropdown.css';
const Dropdown = () => {
    let history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login')
    }
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    return (
        <div className="dpd">
            {!localStorage.getItem('token') ? <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    &#9776;
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                    <li><Link className={`${location.pathname === "/" ? "active" : ""}`} id="Home" to="/">Home</Link></li>
                    <li><Link to="/register" className={`${location.pathname === "/register" ? "active" : ""}`} id="Home">Form</Link></li>
                    <li><Link  className={`${location.pathname === "/forminfo" ? "active" : ""}`} id="Home" to="/forminfo">Hall Ticket</Link> </li>
                    <li><Link className={`${location.pathname === "/signup" ? "active" : ""}`} to="/signup" id="Signup" >SignUp</Link></li>
                    <li><Link to="/login" className={`${location.pathname === "/login" ? "active" : ""}`} id="Login">Login</Link></li>
                </ul>
            </div> : <div className="dropdown">
                <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    &#9776;
                </button>
                <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                    <li><Link className={`${location.pathname === "/" ? "active" : ""}`} id="Home" to="/">Home</Link></li>
                    <li><Link to="/register" className={`${location.pathname === "/register" ? "active" : ""}`} id="Home">Form</Link></li>
                    <li><Link  className={`${location.pathname === "/forminfo" ? "active" : ""}`} id="Home" to="/forminfo">Hall Ticket</Link> </li>
                    <li><button onClick={handleLogout} className="Logout" >Logout</button></li>
                </ul>
            </div>}
        </div>
    )
}
export default Dropdown