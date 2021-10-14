import { Formik,Form ,Field, ErrorMessage, FastField} from 'formik'
import React from 'react'
import * as Yup from 'yup'
function FormikComponentForm() {
    const initialValues={
        name:"",
        email:"",
        comments:"",
        address:"",
        socialMedia:{
           
        },
        phone:["",""]
    }
    const validationSchema=Yup.object({
        name:Yup.string().required("Required"),
        email:Yup.string().email("Invalid format").required("Required"),
        comments:Yup.string().required("Required"),
        address:Yup.string().required("Required"),
        socialMedia:Yup.object().required("Required"),
        phone:Yup.array().required("Required")
    })
    const onSubmit=values=>console.log(values)
    return (
        <div className="container">
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
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
                        <Field name="email" type="email" className="form-control"></Field>
                        <ErrorMessage name="email">
                            {
                                errorMessage=><div className="text-danger">{errorMessage}</div>
                            }
                        </ErrorMessage>
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
                    <input type="submit" className="btn btn-success btn-block"/>
                </Form>
             </Formik>
        </div>
      
    )
}

export default FormikComponentForm
