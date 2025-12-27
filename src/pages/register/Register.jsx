import { Box, Typography ,TextField, Container, Button } from '@mui/material'
import { useForm } from "react-hook-form"
import axios from 'axios'
import {yupResolver } from "@hookform/resolvers/yup"
import { RegisterSchema } from '../../validations/RegisterSchema'
import { useState } from 'react'
import axiosInstance from '../../Api/axiosInstance'



export default function Register() {

  const [serverErrors, setServerErrors] =useState([]);
  const {register , handleSubmit , formState:{errors}} =useForm({
    resolver:yupResolver(RegisterSchema),
    mode:'onBlur'
  })

  const registerForm = async(values)=>{
 
    try{
      const response = await axiosInstance.post(`/Auth/Account/Register`,values);
    }
    catch(err){
      console.log(err.response?.data);
      setServerErrors(err.response.data.errors);
    }
  }

  return (
    <Box className="register-form" sx={{ display:'flex', flexDirection:'column' , padding:'50px'}}>
      <Typography sx={{ m:'auto' , fontWeight:'bold' , pb:'50px'}} variant='h3' component="h1">Create Account</Typography>

      <Container maxWidth="sm">
        {serverErrors.length >0 ?
        serverErrors.map( (err)=>
          <Typography sx={{color:"red" , pb:'20px'}}>{err}</Typography>
        )
        :null}
      <Box onSubmit={handleSubmit(registerForm)} component={"form"} sx={{display:'flex',gap:'20px' , flexDirection:'column'}}>
      <TextField {...register('fullName')}  label="Full Name" variant="outlined" 
      error={errors.fullName} helperText={errors.fullName?.message}/>
      <TextField {...register('userName')}  label="User Name" variant="outlined"
      error={errors.userName} helperText={errors.userName?.message}/>
      <TextField {...register('email')}  label="Email" variant="outlined"
      error={errors.email} helperText={errors.email?.message}/>
      <TextField {...register('password')}  label="Password" variant="outlined"
      error={errors.password} helperText={errors.password?.message}/>
      <TextField {...register('phoneNumber')}  label="Phone Number" variant="outlined" 
      error={errors.phoneNumber} helperText={errors.phoneNumber?.message}/>
      <Button sx={{m:'auto', width:'fit-content'}} type='submit' variant="contained">Create</Button>
      </Box>
    </Container>
    </Box>

    
  )
}
