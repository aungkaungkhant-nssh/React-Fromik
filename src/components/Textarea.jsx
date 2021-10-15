import React from 'react'
import {Field,ErrorMessage} from 'formik'
function Textarea(props) {
    const {label,name,...rest}=props
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <Field as="textarea" name={name} {...rest} className="form-control"></Field>
            <ErrorMessage name={name}>
                {
                    errorMsg=><div className="text-danger">{errorMsg}</div>
                }
            </ErrorMessage>
        </div>
    )
}

export default Textarea