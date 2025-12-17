import * as yup from 'yup'

export const RegisterSchema = yup.object({
  fullName:yup.string("Full Name should be string ").required("Full Name Is Required!"),
  email :yup.string("Email should be string ").email("Invalid Email Formate").required("Email Is Required!"),
  userName: yup.string("User Name should be string").required("User Name Is Required!")
               .matches(/^[a-zA-Z0-9.-_]+$/,"Inavlid UserName").min(4,"UserName must be at least 4 char"),
  password: yup.string("Password should be string").required("Password Is Required!")
                .min(8,"Password must be at least 8 char")
                .matches(/[A-Z]/,"Must contain at least one uppercase letter")
                .matches(/[a-z]/,"Must contain at least one lowercase letter")
                .matches(/[0-9]/,"Must contain at least one digit")
                .matches(/[@#$&!?&]/,"Must contain at least one special char"),
  phoneNumber: yup.string("Phone Number should be string").required("Phone Number Is Required!").length(10)
})