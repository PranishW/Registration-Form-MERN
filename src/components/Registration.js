import React, { useContext, useState } from "react";
import formContext from "../context/Form/formContext";
const Registration = (props) => {
    const context = useContext(formContext)
    const { fillForm } = context;
    const [form, setForm] = useState({ name: "", email: "", dob:"", age: "", address: "", gender: "", mobno: "" })
    const handleClick = (e) => {
        fillForm(form.name, form.email, form.age, new Date(form.dob), form.address, form.gender, form.mobno)
        setForm({ name: "", email: "", age: "", dob:"", address: "", gender: "", mobno: "" })
        if(form.age===""||form.email===""||form.dob===""||form.dob===""||form.age===""||form.gender===""||form.address===""||form.mobno==="")
        {
            props.showAlert("Fill all form details","danger")
        }
        else
        {
            props.showAlert("Note added Successfully,Logout and Login again to see your form responses","success")
        }
    }
    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <div className="formdisplay">
            <h2 className="formhead">Form Registration</h2>
            <div className="formdetails">
                <div className="email">
                    <label htmlFor="name" className="name-label">Username</label>
                    <input type="text" id="name" name="name" placeholder="Name" value={form.name} onChange={onChange} minLength={5} required />
                </div >
                <div className="email">
                    <label htmlFor="email" className="email-label">Email address</label>
                    <input type="text" id="email" name="email" placeholder="Email" value={form.email} onChange={onChange} minLength={5} required />
                </div>
                <div className="email">
                    <label htmlFor="age" >Age</label>
                    <select name="age" id="age" onChange={onChange} value={form.age} required>
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
                        onInput={onChange} />
                </div>
                <div className="email" id="textarea">
                    <label htmlFor="address" id="label-address">Address</label>
                    <textarea id="address" name="address" rows={3} cols={45} placeholder="Address" value={form.address} minLength={5}
                        onChange={onChange} required />
                </div>
                <div className="email">
                    <label htmlFor="gender">Gender</label>
                    <label htmlFor="male" id="label-male" >Male</label>
                    <input type="radio" name="gender" id="male" value="Male" onChange={onChange} />
                    <label htmlFor="female" id="label-male">Female</label>
                    <input type="radio" name="gender" id="female" value="Female" onChange={onChange} />
                    <label htmlFor="mobno" id="mobile-label">Mobile No</label>
                    <input type="tel" maxLength="10" pattern="[0-9]{10}" name="mobno" id="mobno" placeholder="mobile no"
                        value={form.mobno} onChange={onChange} required />
                </div>
                <button className="edit" onClick={e => handleClick(e)}>Submit Form</button>
            </div>
        </div>
    )
}
export default Registration