import React, { useContext, useState, useEffect } from "react";
import formContext from "../context/Form/formContext";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dropdown from "./dropdown";
const Registration = (props) => {
    const context = useContext(formContext)
    let history = useHistory();
    const { fillForm } = context;
    const [form, setForm] = useState({ name: "", email: "", dob: "", age: "", address: "", gender: "", mobno: "" })
    const [profile, setFile] = useState('')
    let formData = new FormData()
    formData.append('name', form.name)
    formData.append('email', form.email)
    formData.append('dob', new Date(form.dob))
    formData.append('age', form.age)
    formData.append('address', form.address)
    formData.append('gender', form.gender)
    formData.append('mobno', form.mobno)
    formData.append('profile', profile)
    const handleClick = async (e) => {
        e.preventDefault()
        props.showAlert("Sending Data to server,Please wait......","primary")
        fillForm(formData)
    }
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const FileHandler = (e) => {
        setFile(e.target.files[0])
    }
    useEffect(() => {
        if (!localStorage.getItem('token')) {
            history.push("/login")
        }
        else
        {
            if (!context.form.success && context.form.error) {
                props.showAlert(context.form.error, "danger")
            }
            else if (context.form.success && !context.form.error) {
                props.showAlert("Form filled successfully", "success")
            }
            else {
                props.showAlert("Fill every field in the form with correct information", "info")
            }
        }
    }, [context.form])
    return (
        <div className="main">
            <Sidebar />
            <Dropdown />
            <div className="formdisplay">
                <h2 className="formheadreg">Exam Registration Form</h2>
                <div className="formdetails" >
                    <div className="formemail">
                        <label htmlFor="name" className="name-label">Name</label>
                        <input type="text" id="name" name="name" placeholder="Name" value={form.name} onChange={onChange} minLength={3} required />
                    </div >
                    <div className="formemail">
                        <label htmlFor="email" className="email-label">Email address</label>
                        <input type="email" id="email" name="email" placeholder="abc@efg.xyz" value={form.email} onChange={onChange} required />
                    </div>
                    <div className="agedob">
                        <label htmlFor="age" >Age</label>
                        <select name="age" id="age" onChange={onChange} value={form.age} required >
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                        </select>
                        <label htmlFor="dob">Date of Birth</label>
                        <input type="date" id="dob" name="dob" min="2000-01-01" max="2007-12-31"
                            onInput={onChange} required />
                    </div>
                    <div className="formemail" id="textarea">
                        <label htmlFor="address" id="label-address">Address</label>
                        <textarea id="address" name="address" rows={3} cols={45} placeholder="Address" value={form.address} minLength={5}
                            onChange={onChange} required />
                    </div>
                    <div className="formemail">
                        <label htmlFor="gender">Gender</label>
                        <label htmlFor="male" id="label-male" >Male</label>
                        <input type="radio" name="gender" id="male" value="Male" onChange={onChange} />
                        <label htmlFor="female" id="label-male">Female</label>
                        <input type="radio" name="gender" id="female" value="Female" onChange={onChange} />
                        <label htmlFor="mobno" id="mobile-label">Mobile No</label>
                        <input type="tel" maxLength="10" name="mobno" id="mobno" placeholder="mobile no"
                            value={form.mobno} onChange={onChange} required />
                    </div>
                    <div className="file">
                        <label htmlFor="file" className="label-file" >Upload Candidate Photo</label>
                        <input type="file" name="file" onChange={FileHandler} accept="image/*" required />
                    </div>
                    <button className="edit" onClick={handleClick}>Submit Form</button>
                </div>
            </div>
        </div>
    )
}
export default Registration