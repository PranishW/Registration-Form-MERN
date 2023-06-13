import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import formContext from "../context/Form/formContext";
import FormItem from "./Formitem";
import './css/FormDisplay.css'
import Sidebar from "./Sidebar";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import Dropdown from "./dropdown";
const FormDisplay = () => {
    const context = useContext(formContext)
    let componentRef = useRef()
    let history = useHistory();
    const { form, getForm } = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getForm()
        }
        else {
            history.push("/login")
        }
    }, [])
    return (
        <div className="main">
            <Sidebar />
            <Dropdown />
            <div className="formdisplay" >
                <div className="noform">{!form._id && form.error}</div>
                {form._id && <div className="form"><div ref={el => (componentRef = el)} className="inform">
                        <h2 className="formhead">Candidate Hall Ticket</h2>
                        <FormItem key={form._id} eform={form} />
                    </div>
                    <ReactToPrint
                        trigger={() => {
                            return <button className="print">Print</button>
                        }}
                        content={() => componentRef}
                        documentTitle="hallticket"
                        pageStyle="print"
                    />
                </div>}
            </div>
        </div>
    )
}
export default FormDisplay