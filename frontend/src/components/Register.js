import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const onSubmit = (values, actions) => {
    console.log(values);
    axios.post('http://localhost:5000/register', values)
        .then(res => {
            console.log(res);
            actions.setSubmitting(false);
        })
        .catch(err => {
            console.log(err);
            actions.setSubmitting(false);
        })
        // clear form
    actions.resetForm();
}


const Register = () => {
    const {values, errors, handleBlur, handleChange, touched, isSubmitting, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: '',

        },
        validationSchema: basicSchema,
        onSubmit,
    });
    console.log(values);
    console.log(errors);

    return (

        <>
        <div className="register-page">
        <div className="form">
            <form onSubmit={handleSubmit} className="register-form">
            <div className="inputField">
                <div className="formLabel" htmlFor="firstName">Email</div>
                <input
                    id="email"
                    type="text"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.email && touched.email ? 'input-error' : ""}
                />
                {errors.email && touched.email && <p className='error'>{errors.email}</p>}
            </div>
            <div className="inputField">
                <div className="formLabel" htmlFor="firstName">First Name</div>
                <input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.firstName && touched.firstName ? 'input-error' : ""}
                />
                {errors.firstName && touched.firstName && <p className='error'>{errors.firstName}</p>}
            </div>
            <div className="inputField">
                <div className="formLabel" htmlFor="lastName">Last Name</div>
                <input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.lastName && touched.lastName ? 'input-error' : ""}
                />
                {errors.lastName && touched.lastName && <p className='error'>{errors.lastName}</p>}
            </div>
            <div className="inputField">
                <div className="formLabel" htmlFor="password">Password</div>
                <input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.password && touched.password ? 'input-error' : ""}
                />
                {errors.password && touched.password && <p className='error'>{errors.password}</p>}
            </div>
            <div className="inputField">
                <div className="formLabel" htmlFor="confirmPassword">Confirm Password</div>
                <input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ""}
                />
                {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
            </div>
            <button type="submit" className="btn submit-btn">Submit</button>

            <p className="message">
                Already registered? <a href="#">Sign In</a>
            </p>
            </form>
        </div>
        </div>

        </>

      

    )
};

export default Register;