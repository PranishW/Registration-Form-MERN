import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import './css/navbar.css';
const Navbar = () => {
    let history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem('token');
        history.push('/login')
    }
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    return (
        <nav>
            <div className="logo">
                <img className="icon" src="Alecive-Flatwoken-Apps-Google-Drive-Forms.ico" />
                <h1 className="nav-head">eRegistration</h1>
            </div>
            <div id="button">
                {!localStorage.getItem('token') ? <form className="navform">
                    <Link className={`${location.pathname === "/" ? "active" : ""}`} id="Home" to="/">Home</Link>
                    <Link className={`${location.pathname === "/signup" ? "active" : ""}`} to="/signup" id="Signup" >SignUp</Link>
                    <Link to="/login" className={`${location.pathname === "/login" ? "active" : ""}`} id="Login">Login</Link>
                </form> : <form className="navform">
                    <Link className={`${location.pathname === "/" ? "active" : ""}`} id="Home" to="/">Home</Link>
                    <button onClick={handleLogout} className="Logout" >Logout</button>
                </form>}
            </div>
        </nav>
    )
}
export default Navbar
// <Link  className={`${location.pathname === "/forminfo" ? "active" : ""}`} id="Home" to="/forminfo">Details</Link> 
// <Link to="/register" className={`${location.pathname === "/register" ? "active" : ""}`} id="Home">Form</Link> 