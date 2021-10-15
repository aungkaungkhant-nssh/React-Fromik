import React from 'react'
import DateView from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import {Field} from 'formik'
function Date(props) {
    const {label,name,...rest}=props;
    return (
        <div>
            <label htmlFor={label}>{label}</label>
            <Field name={name}>
                {
                    ({field,form})=>{
                        const {value}=field;
                        const {setFieldValue}=form;
                        return(
                            <DateView  {...field} selected={value}  onChange={(value)=>setFieldValue(name,value)}>

                            </DateView>
                        )
                    }
                }
            </Field>
            
        </div>
    )
}

export default Date
