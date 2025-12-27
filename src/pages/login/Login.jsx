import { Box, Typography ,TextField, Container, Button, Link } from '@mui/material'
import { useForm } from "react-hook-form"
import axios from 'axios'
import {yupResolver } from "@hookform/resolvers/yup"
import { LoginSchema } from '../../validations/LoginSchema'
import { useState } from 'react'
import axiosInstance from '../../Api/axiosInstance'

export default function Login() {
  const [serverErrors, setServerErrors] =useState([]);
  const {register , handleSubmit , formState:{errors}} =useForm({
    resolver:yupResolver(LoginSchema),
    mode:'onBlur'
  })
  
    const loginForm = async(values)=>{
  
      try{
        const response = await axiosInstance.post(`/Auth/Account/Login`,values);
        if(response.status ===200){
          localStorage.setItem("token",response.data.accessToken)
        }
      }
      catch(err){
        console.log(err)
        setServerErrors([err.response.data.message])
      }
    }
  
    return (
      <Box className="login-form" sx={{ display:'flex', flexDirection:'column' , padding:'50px'}}>
        <Typography sx={{ m:'auto' , fontWeight:'bold' , pb:'50px', color:'#3a3a3a'}} variant='h3' component="h1">Login</Typography>
  
        <Container maxWidth="sm">
          {serverErrors.length >0 ?
                serverErrors.map( (err)=>
                <Typography sx={{color:"red"  , fontWeight:'bold' , py:'20px'}}>{err}</Typography>
                )
                :null}
        <Box onSubmit={handleSubmit(loginForm)} component={"form"} sx={{display:'flex',gap:'20px' , flexDirection:'column'}}>
        <TextField {...register('email')}  label="Email" variant="outlined" 
        error={errors.email} helperText={errors.email?.message}/>
        
        <TextField {...register('password')}  label="Password" variant="outlined" 
        error={errors.password} helperText={errors.password?.message}/>
      <Link href="/auth/sendCode" sx={{m:'auto',fontWeight:'400' , fontFamily:"Helvetica, Arial, sans-serif" , pt:'10px' , textDecoration:'none' , color:'#606060' , cursor:'pointer'}}>Forgot your password?</Link>
        
        <Button sx={{m:'auto', width:'fit-content'}} type='submit' variant="contained">Sign In</Button>
      <Link href="/auth/register" sx={{m:'auto',fontWeight:'400' , fontFamily:"Helvetica, Arial, sans-serif" , py:'10px' , textDecoration:'none' , color:'#606060' , cursor:'pointer'}}>Create account</Link>
        
        </Box>
      </Container>
      </Box>
  
  )
}
