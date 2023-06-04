import { useState } from "react";
import formContext from "./formContext";

const FormState = (props) => {
    const host = "http://localhost:7000"
    const formInitial = []
    const [form, setForm] = useState(formInitial)
    // get form data
    const getForm = async () => {
        //  API Call
        const response = await fetch(`${host}/api/form/forminfo`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        });
        const json = await response.json()
        setForm(json)
    }
    // fill form
    const fillForm = async (name, email, age, dob, address, gender, mobno) => {
        //  API Call
        const response = await fetch(`${host}/api/form/fillform`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ name, email, age, dob, address, gender, mobno })
        });
        // filling form info
        const json = await response.json()
        setForm(json)
    }
    return (
        <formContext.Provider value={{ form, fillForm,getForm }}>
            {props.children}
        </formContext.Provider>
    )
}
export default FormState;