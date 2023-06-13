import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import './css/Login.css';
import Dropdown from "./dropdown";
const Login = (props) => {
    let history = useHistory();

    const [credentials, setCredentials] = useState({ email: "", password: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://eregistrationbackend.onrender.com/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken)
            props.showAlert(`${credentials.email} Logged in `, "success")
            history.push("/")
        }
        else {
            props.showAlert(json.error, "danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="loginpage">
            <Dropdown />
            <h2 className="loghead">Login to Continue to eRegistration</h2>
            <form onSubmit={handleSubmit} className="loginform">
                <div className="email">
                    <label htmlFor="email" className="email-label">Email address</label>
                    <input type="email" id="email" name="email" value={credentials.email} onChange={onChange} placeholder="abc@efg.xyz" required/>
                </div>
                <div className="password">
                    <label htmlFor="password" className="password-label">Password</label>
                    <input type="password" id="password" name="password" value={credentials.password} onChange={onChange} placeholder="password" required/>
                </div>
                <p>New Registration? <Link to="/signup" className="signup">SignUp</Link></p>
                <button type="submit" className="login">Login</button>
            </form>
        </div>
    )
}
export default Login
