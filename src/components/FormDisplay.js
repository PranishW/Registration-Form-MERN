import React, { useContext, useEffect} from "react";
import { useHistory } from "react-router-dom";
import formContext from "../context/Form/formContext";
import FormItem from "./Formitem";
import './FormDisplay.css'
const FormDisplay = (props) => {
    const context = useContext(formContext)
    let history = useHistory();
    const { form, getForm} = context;
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getForm()
        }
        else {
            history.push("/signup")
        }
    }, [])
    return (
        <div className="formdisplay">
            <h2 className="formhead">User Registration Form</h2>
            {form.map((eform) => {
                return <FormItem key={eform._id} showAlert={props.showAlert} eform={eform} />
            })}
        </div>
    )
}
export default FormDisplay