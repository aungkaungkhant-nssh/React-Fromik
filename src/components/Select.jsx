import React from 'react'
import {Field} from 'formik'
function Select(props) {
    const {label,name,options,...rest}=props;
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <Field name={name}>
                {
                    ({field,meta})=>{
                        return (
                            <div>
                                <select name={name} id="" {...field} className="form-control">
                                {
                                    options.map((option)=>{
                                        return (
                                            <option value={option.value}>{option.key}</option>
                                        )
                                    })
                                }
                                </select>
                                {
                                    meta.touched && <div className="text-danger">{meta.error}</div> || ""
                                }
                            </div>
                            
                            
                        )
                    }
                }
            </Field>
        </div>
    )
}

export default Select
