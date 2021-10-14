import { useFormik } from 'formik'
import React from 'react'

function SimpleForm() {
    const formik=useFormik({
        initialValues:{
            name:"a",
            email:"",
            phone:"",
            password:""
        },
        validate:values=>{
            let error={};
            if(!values.name){
                error.name="Required"
            }
            if(!values.email){
                error.email="Required"
            }
            if(!values.phone){
                error.phone="Required"
            }
            if(!values.password){
                error.password="Required"
            }
            return error
        },
        onSubmit:values=>console.log(values)
    })
    console.log(formik.errors)
    return (
        <div className="container mt-4">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control" name="name" 
                    value={formik.values.name} 
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur}/>
                    {formik.touched.name && formik.errors.name ? <span className="text-danger">{formik.errors.name}</span>:null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? <span className="text-danger">{formik.errors.email}</span>:null}
                </div>
                <div className="from-group">
                    <label htmlFor="">Phone</label>
                    <input type="number"  className="form-control" name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                      {formik.touched.phone && formik.errors.phone ? <span className="text-danger">{formik.errors.phone}</span>:null}
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input type="text" className="form-control" name="password" 
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password ?<span className="text-danger">{formik.errors.password}</span>:null}
                </div>
                <input type="submit"  className="btn btn-success mt-2"/>
            </form>
        </div>
    )
}

export default SimpleForm
