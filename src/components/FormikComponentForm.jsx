import { Formik,Form ,Field, ErrorMessage, FastField, FieldArray} from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup'
const initialValues={
    name:"",
    email:"",
    comments:"",
    address:"",
    socialMedia:{
       
    },
    phone:["",""],
    phoneNumbers:[""],

}
const validationSchema=Yup.object({
    name:Yup.string().required("Required"),
    email:Yup.string().email("Invalid format").required("Required"),
    comments:Yup.string().required("Required"),
    address:Yup.string().required("Required"),
    socialMedia:Yup.object().required("Required"),
    phone:Yup.array().required("Required")
})
const loadsaveData={
    name:"Aung Kaung Khant",
    email:"akkgit0909@gmail.com",
    comments:"testing",
    address:"Pyin Oo Lwin",
    social:{
        facebook:"",
        twitter:""
    },
    phone:["",""],
    phoneNumbers:[""]
}
const onSubmit=(values,onSubmitProps)=>{
    console.log(values)
    onSubmitProps.setSubmitting(false);// reset form
    onSubmitProps.resetForm() //rest form
}
function FormikComponentForm() {
    
    const [saveFormValues,setSaveFormValues]=useState(null);
    return (
        
        <div className="container">
            <Formik 
                initialValues={ saveFormValues||initialValues}
                validationSchema={validationSchema}
                enableReinitialize //loadsavedata
                onSubmit={onSubmit}
                // validateOnChange={false}
                // validateOnBlur={false}
                
            >
                {
                    formik=>{
                        console.log(formik)
                        return(
                            <Form>
                            <div className="form-group">
                                <label htmlFor="">Name</label>
                                <Field name="name" type="text" className="form-control"></Field>
                                <ErrorMessage name="name">
                                    {
                                        errorMessage=><div className="text-danger">{errorMessage}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Email</label>
                                <Field name="email" className="form-control">
                                    {
                                        ({field,meta})=>{
                                            return(
                                                <div>
                                                    <input type="email" {...field} className="form-control"/>
                                                    {
                                                        meta.touched && meta.error ?
                                                        <div className="text-danger">
                                                            {meta.error}
                                                        </div>:null
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </Field>
                              
                            </div>
                            <div className="form-group">
                                 <label htmlFor="">Comments</label>
                                 <Field as="textarea" name="comments" className="form-control"></Field>
                                 <ErrorMessage name="comments">
                                     {
                                         errorMessage=><div className="text-danger">{errorMessage}</div>
                                     }
                                 </ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Address</label>
                                <FastField name="address">
                                    {
                                        props=>{
                                            console.log("first field")
                                            const {field,form,meta}=props
                                            return (
                                                <div>
                                                    <input type="text" {...field} className="form-control"/>
                                                    {
                                                        meta.touched && meta.error ? <div className="text-danger">
                                                            {meta.error}
                                                        </div>:null
                                                    }
                                                </div>   
                                            )
                                        }
                                    }
                                </FastField>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Facebook</label>
                                <Field name="socialMedia.facebook" type="text" className="form-control"></Field>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Twitter</label>
                                <Field name="socialMedia.twitter" type="text" className="form-control"></Field>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone 1</label>
                                <Field name="phone[0]" type="text" className="form-control"></Field>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone 2</label>
                                <Field name="phone[1]" type="text" className="form-control"></Field>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone Numbers One</label>
                                <FieldArray name="phoneNumbers">
                                    {
                                        props=>{
                                           const {form,push,remove}=props;
                                            const {values}=form;
                                            const {phoneNumbers}=values;
                                            return(
                                                <div>
                                                    {
                                                        phoneNumbers.map((phoneNumber,index) =>{
                                                            return(
                                                                <div key={index}>
                                                                    <Field name={`phoneNumbers[${index}]`}></Field>
                                                                    {
                                                                        index>0 &&
                                                                        <button onClick={()=>remove(index)}>-</button>
                                                                    }
                                                                    
                                                                    <button onClick={()=>push("")}>+</button>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            )
                                        }
                                    }
                                </FieldArray>
                            </div>
                            <button type="rest" className="btn btn-block btn-primary mb-2">Reset</button>
                            <button onClick={()=>setSaveFormValues(loadsaveData)}className="btn btn-warning mb-2 btn-block ">Load Save Data</button>
                            <input type="submit" className="btn btn-success btn-block" disabled={!formik.isValid && !formik.isSubmitting}/>
                          
                        </Form>
                        )
                    }
                }
               
             </Formik>
        </div>
      
    )
}

export default FormikComponentForm
