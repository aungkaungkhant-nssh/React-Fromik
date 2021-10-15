import React from 'react'
import {ErrorMessage, Field} from 'formik'
function CheckBox(props) {
    const {label,name,options,...rest}=props;
    return (
        <div>
            <label htmlFor="">{label}</label>
            <Field name={name}>
                {
                    ({field})=>{
                        return (
                           <React.Fragment>
                                {
                                    options.map(option =>{
                                        return (
                                            <div>
                                                <input type="checkbox" name={name} {...field} value={option.value}/>
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

export default CheckBox
