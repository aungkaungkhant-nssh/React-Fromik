import { ErrorMessage, Field } from 'formik'
import React from 'react'

function Radio(props) {
    const {label,name,options,...rest}=props
    return (
        <div className="form-group">
            <label htmlFor={label}>{label}</label>
            <Field name={name}>
                {
                    ({field})=>{
                        return (
                            <React.Fragment>
                                {
                                    options.map((option)=>{
                                        return (
                                            <div>
                                                <input type="radio" name={name} {...field} value={option.value}/>   
                                                <label htmlFor="">{option.key}</label>
                                            </div>
                                        )
                                        
                                    })
                                }
                            </React.Fragment>

                        )   
                    }
                }
            </Field>
            <ErrorMessage name={name}>
                {
                    errorMsg=><div className="text-danger">{errorMsg}</div>
                }
            </ErrorMessage>
        </div>
    )
}

export default Radio
