import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { loginSchema } from "../schemas";
import { useFormik } from "formik";



const onSubmit = (values, actions) => {

    console.log(values);
    axios.post('http://localhost:5000/login', values)
        .then(res => {
            console.log(res);
            actions.setSubmitting(false);
            // set token]
            console.log("TOKEN", res.data.token)
            localStorage.setItem('token', res.data.token);
            // redirect to home not from history

        })
        .catch(err => {
            console.log(err);
            actions.setSubmitting(false);
        })
        // clear form
    actions.resetForm();
}

const Login = () => {
    const history = useNavigate();
    
    const {values, errors, handleBlur, handleChange, touched, isSubmitting, handleSubmit} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: loginSchema,
        onSubmit,
    });

    const handleClick = () => {
        history.push('/');
    };

    console.log(values);
    console.log(errors);

    return (
        <>
        <div className="login-page">
        <div className="form">
            <form onSubmit={handleSubmit} className="login-form">
            <div className="inputField">
                <div className="formLabel" htmlFor="email">Email</div>
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
            <button type="submit" disabled={isSubmitting}>Login</button>
            </form>
        </div>
        </div>
        </>
    )
}

export default Login;

