import * as yup from 'yup'

export const LoginSchema = yup.object({
  email :yup.string("Email should be string ").email("Invalid Email Formate").required("Email Is Required!"),
  password: yup.string("Password should be string").required("Password Is Required!")
                .min(8,"Password must be at least 8 char")
                .matches(/[A-Z]/,"Must contain at least one uppercase letter")
                .matches(/[a-z]/,"Must contain at least one lowercase letter")
                .matches(/[0-9]/,"Must contain at least one digit")
                .matches(/[@#$&!?&]/,"Must contain at least one special char"),
})