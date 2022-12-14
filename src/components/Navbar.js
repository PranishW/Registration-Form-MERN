import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link, useLocation } from "react-router-dom";
import './navbar.css'
const Navbar = () => {
    let history = useHistory()
    let boollog = true
    const handleLogout = () => {
        localStorage.removeItem('token');
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        history.push('/login')
    }
    let location = useLocation();
    useEffect(() => {
    }, [location]);
    let Navlink = () => {
        if (location.pathname === "/forminfo") {
        }
        if (location.pathname === "/register") {
            boollog = false
        }
    }
    return (
        <nav>
            <h1>eRegistration</h1>
            <div id="button">
                {!localStorage.getItem('token') ? <form>
                    <Link className={`${location.pathname === "/" ? "active" : ""}`} id="Home" to="/">Home</Link>
                    <Link to="/signup" className="SignUp">SignUp</Link>
                    <Link to="/login" className="Login">Login</Link>
                </form> : <form>
                    {Navlink()}
                    {boollog ? <Link  className={`${location.pathname === "/forminfo" ? "active" : ""}`} id="Home" to="/forminfo">Details</Link> :
                    <Link to="/register" className={`${location.pathname === "/register" ? "active" : ""}`} id="Home">Form</Link>}
                    <button onClick={handleLogout} className="Logout" >Logout</button>
                </form>}
            </div>
        </nav>
    )
}
export default Navbar