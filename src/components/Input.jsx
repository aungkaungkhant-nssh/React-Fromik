import { ErrorMessage,Field } from 'formik'
import React from 'react'
function Input(props) {
    const {label,name,type,...rest}=props
    return (
        <div className="form-group">
            <label htmlFor="">{label}</label>
            <Field name={name} className="form-control" type={type}></Field>
            <ErrorMessage name={name}>
                {
                    errorMessage=><div className="text-danger">{errorMessage}</div>
                }
            </ErrorMessage>
        </div>
    )
}

export default Input
