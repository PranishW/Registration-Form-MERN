import React, { useState } from "react";
import { useHistory } from "react-router-dom";
const Signup = (props)=>{
    let history = useHistory();
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" })
    const handleSubmit = async (e) => {
        e.preventDefault();
        // destructuring
        const { name, email, password } = credentials
        const response = await fetch(`http://localhost:7000/api/auth/createuser`, {
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
            history.push("/register")
            props.showAlert("Account Created Successfully","success")
            //const today = new Date()
            //const expiredate = new Date()
            //expiredate.setDate(today.getDate() + 3)
            //document.cookie = `username=${credentials.email}; expires=${expiredate}; path=http://localhost:7000/api/auth/signup`;
        }
        else {
            props.showAlert("Invalid Credentials","danger")
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return(
        <div className="loginpage">
            <h2 className="loghead">SignUp to Fill the Form</h2>
            <form onSubmit={handleSubmit} className="loginform">
            <div className="email">
                    <label htmlFor="email" className="email-label">Email address</label>
                    <input type="email" id="email"  name="email" onChange={onChange} placeholder="Email"/>
                </div>
                <div className="name">
                    <label htmlFor="name" className="name-label">Username</label>
                    <input type="text" id="name" name="name" onChange={onChange} placeholder="Name" required/>
                </div>
                <div className="password">
                    <label htmlFor="password" className="password-label">Password</label>
                    <input type="password" minLength={5} id="password" name="password" onChange={onChange} placeholder="Password" required/>
                </div>
                <div className="cpassword">
                    <label htmlFor="cpassword" className="cpassword-label">Confirm Password</label>
                    <input  type="password" minLength={5} id="cpassword" name="cpassword" onChange={onChange} placeholder="Confirm Password" required/>
                </div>
                <button type="submit" className="sign" >SignUp</button>
            </form>
        </div>
    )
}
export default Signup
