import React from "react";
const FormItem = (props) => {
    const { eform } = props;
    let dob = new Date(eform.dob);
    let applicationno = "20031 " + (Math.floor(Math.random() * 10000) + 35860)
    let seatno = Math.floor(Math.random() * 10000) + 250001
    let examno = "1077-0444"
    return (
        <div className="hallticket">
            <div className="applno">
                Application No. {applicationno}
                <table className="table1">
                    <thead>
                        <tr>
                            <th>Exam Number : {examno}</th>
                            <th>Seat Number : {seatno}</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="info1">
                <img src={"https://res.cloudinary.com/dkoix4cqj/image/upload/" + eform.profile} alt={eform.profile} className="pic"></img>
                <table className="table2">
                    <tbody>
                        <tr><td><b>Name </b></td><td> {eform.name}</td></tr>
                        <tr><td><b>Email </b></td><td> {eform.email}</td></tr>
                        <tr><td><b>Age </b></td><td> {eform.age}</td></tr>
                        <tr><td><b>Date of Birth </b></td><td> {dob.getDate() + "-" + (dob.getMonth() + 1) + "-" + dob.getFullYear()}</td></tr>
                    </tbody>
                </table>
            </div>
            <table className="table3">
                <tbody>
                    <tr><td><b>Permanent Address </b></td><td> {eform.address}</td></tr>
                    <tr><td><b>Gender </b></td><td> {eform.gender}</td></tr>
                    <tr><td><b>Mobile No. </b></td><td> {eform.mobno}</td></tr>
                    <tr><td><b>Question Paper Medium </b></td><td> English</td></tr>
                    <tr><td><b>Mode of Exam </b></td><td> Online</td></tr>
                </tbody>
            </table>
            <table className="table4">
                <tbody>
                    <tr>
                        <td><b>Subject 1 </b></td>
                        <td>English</td>
                        <td><b>Subject 2</b></td>
                        <td>Physics</td>
                    </tr>
                    <tr>
                        <td><b>Subject 3</b></td>
                        <td>Chemistry</td>
                        <td><b>Subject 4</b></td>
                        <td>Mathematics</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default FormItem;