import React from "react";
const FormItem = (props) => {
    const { eform} = props;
    let dob = new Date(eform.dob);
    return (
        <div className="formdetails">
            <div className="info">Name : {eform.name}</div>
            <div className="info">Email : {eform.email}</div>
            <div className="info">Age : {eform.age}</div>
            <div className="info">DOB : {dob.getDate() + "-" + (dob.getMonth() + 1) + "-" + dob.getFullYear()}</div>
            <div className="info">Address : {eform.address}</div>
            <div className="info">Gender : {eform.gender}</div>
            <div className="minfo">Mobile No : {eform.mobno}</div>
        </div>
    )
}
export default FormItem;