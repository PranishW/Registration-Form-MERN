import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Dropdown from "./dropdown";
const Signup = (props) => {
    let history = useHistory();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        // destructuring
        const { name, email, password, cpassword } = credentials
        if (password !== cpassword) {
            props.showAlert("Password in both fields does not match", "warning")
        }
        else {
            const response = await fetch(`https://eregistrationbackend.onrender.com/api/auth/createuser`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password })
            });
            const json = await response.json()
            if (json.success) {
                // Save the auth token and redirect
                localStorage.setItem('token', json.authtoken)
                history.push("/")
                props.showAlert("Account Created Successfully", "success")
            }
            else {
                props.showAlert(json.error, "danger")
            }
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <div className="loginpage">
            <Dropdown />
            <h2 className="loghead">SignUp to Fill the Form</h2>
            <form onSubmit={handleSubmit} className="signinform">
                <div className="email">
                    <label htmlFor="email" className="email-label">Email address</label>
                    <input type="text" id="email" name="email" onChange={onChange} placeholder="abc@efg.xyz" />
                </div>
                <div className="name">
                    <label htmlFor="name" className="name-label">Username</label>
                    <input type="text" minLength={3} id="name" name="name" onChange={onChange} placeholder="Name" />
                </div>
                <div className="password">
                    <label htmlFor="password" className="password-label">Password</label>
                    <input type="password" minLength={5} id="password" name="password" onChange={onChange} placeholder="Password" />
                </div>
                <div className="cpassword">
                    <label htmlFor="cpassword" className="cpassword-label">Confirm Password</label>
                    <input type="password" minLength={5} id="cpassword" name="cpassword" onChange={onChange} placeholder="Confirm Password" />
                </div>
                <button type="submit" className="login" >SignUp</button>
            </form>
        </div>
    )
}
export default Signup
