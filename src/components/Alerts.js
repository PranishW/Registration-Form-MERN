import React from 'react'
function Alerts(props) {
    const capitalize = (word)=>{
        if(word==="danger"){
            word="error"
        }
        else if(word==="primary")
        {
            word = "loading"
        }
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '0px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg} 
        </div>}
        </div>
    )
}

export default Alerts