import * as yup from 'yup';

 export const basicSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    firstName: yup.string().required("Please enter your first name"),
    lastName: yup.string().required("Please enter your last name"),

    password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Please enter a password with at least 8 characters")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Please enter a password with at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
    ),

    confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password"), null], "Passwords do not match"),
    


});

export const loginSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email").required(),
    password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Please enter a password with at least 8 characters")
    .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
        "Please enter a password with at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character"
    ),
});
