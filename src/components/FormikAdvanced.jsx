import React from 'react'
import FormikControl from './FormikControl'
import * as Yup from 'yup';
import {Formik,Form} from 'formik'
const initialValues={
    email:"",
    password:"",
    confirm_password:"",
    modeOfContact:"",
    phoneNumber:"",
    address:"",
    options:"",
    gender:"",
    skills:[],
    date:""
}
const validationSchema=Yup.object({
    email:Yup.string().email("Invalid Format").required("Required"),
    password:Yup.string().required("Required"),
    confirm_password:Yup.string().oneOf([Yup.ref("password"),""],"Password Match").required("Required"),
    modeOfContact:Yup.string().required("Required"),
    phoneNumber:Yup.string().when('modeOfContact',{
        is:"istelephone",
        then:Yup.string().required("Required")
    }),
    address:Yup.string().required("Required"),
    options:Yup.string().required("Required"),
    gender:Yup.string().required("Required"),
    skills:Yup.array().required("Required"),
    date:Yup.date().required().nullable()
})
const onSubmit=values=>console.log(values);
const genderOptions=[
    {key:"Male",value:"male"},
    {key:"Female",value:"female"},
    {key:"Other",value:"other"},
]
const selectOptions=[
    {key:"Select You Options",value:""},
    {key:"Options 1",value:"option 1"},
    {key:"Options 2",value:"option 2"},
    {key:"Options 3",value:"option 3"},
]
const skills=[
    {key:"React",value:"react"},
    {key:"Vue",value:'vue'},
    {key:"Angular",value:"angular"}
]
const modeOfContact=[
    {key:"select contact",value:""},
    {key:"TelePhone",value:"istelephone"},
    {key:"Email",value:"isemail"},
]
function FormikAdvanced() {
    return (
        <div className="container">
            <Formik 
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
            {
                formik =>{
                    return (
                        <Form>
                            <FormikControl control="input" name="email" label="Email"/>
                            <FormikControl control="input" type="password" name="password" label="Password"/>
                            <FormikControl control="input" type="password" name="confirm_password" label="Confirm Password"/>
                            <FormikControl control="select" name="modeOfContact" label="Mode Of Contact" options={modeOfContact}/>
                            <FormikControl control="input" name="phoneNumber" label="Phone Numbers"/>
                            <FormikControl control="textarea" name="address" label="Address"/>
                            <FormikControl control="select" name="options" label="Select Your Options" options={selectOptions}/>
                            <FormikControl control="radio" name="gender" label="Select Your gender" options={genderOptions}/>
                            <FormikControl control="checkbox" name="skills" label="Select Your Skills" options={skills}/>
                            <FormikControl control="date" name="date" label="Select Date"/>
                            <input type="submit" className="btn btn-success mt-3"/>
                        </Form>
                    )
                }
            }
           
        </Formik>
        </div>
        
    )
}

export default FormikAdvanced
