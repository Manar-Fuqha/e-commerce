import * as yup from 'yup'

export const SendCodeSchema = yup.object({
  email :yup.string("Email should be string ").email("Invalid Email Formate").required("Email Is Required!"),

})