
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form"
import axios from "axios";
import {yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";
import { ResetPassSchema } from "../../validations/resetPassSchema";
import { useNavigate } from "react-router-dom";


export default function ResetPassword() {
    const navigate = useNavigate();
    const [serverErrors, setServerErrors] =useState([]);
    const {register , handleSubmit , formState:{errors}} =useForm({
        resolver:yupResolver(ResetPassSchema),
        mode:'onBlur'
      })
    const setPassForm =async(values)=>{
         const email = localStorage.getItem("email");
        try{
           const response= await axios.patch(`https://knowledgeshop.runasp.net/api/Auth/Account/ResetPassword`,{
            newPassword: values.newPassword,
            code: values.code,
            email: email,
           });
           console.log(response.data.message);

            if (response.data.success) {
             navigate("/auth/login");
             localStorage.removeItem("email");
            }
        }
        catch(err){
            console.log(err) 
            setServerErrors([err.response.data.message])
        }
    }

  return (
    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center' ,justifyContent:'center' , minHeight:'100vh' }}>
        <Typography sx={{ textTransform: "uppercase" , fontWeight:'bold' , color:'#3a3a3a'}}  component="h1">Add New password</Typography>
        
        
        <Container maxWidth='sm'>
            {serverErrors.length >0 ?
                serverErrors.map( (err)=>
                <Typography sx={{color:"red"  , fontWeight:'bold' , py:'20px'}}>{err}</Typography>
                )
                :null}
            <Box onSubmit={handleSubmit(setPassForm)}  component={'form'} sx={{pt:'20px' , display:'flex' , flexDirection:'column' , gap:'10px' }}>
                <TextField {...register('newPassword')}  label="New Password" fullWidth variant="outlined" 
                error={errors.newPassword} helperText={errors.newPassword?.message}/>
                <TextField {...register('code')}  label="Your Code" fullWidth variant="outlined" 
                error={errors.code} helperText={errors.code?.message}/>
                <Button type='submit' variant="contained" sx={{p:'12px', backgroundColor:'#3a3a3a',textTransform:'uppercase' , mt:'20px' , display:'flex' , alignItems:'center' , mx:'auto' , letterSpacing:'3px'}}>submit</Button>

            </Box>
           
        
        </Container>
         <Link href="/auth/sendCode" sx={{color:'#3a3a3a' , textDecoration:'none' , mt:'25px' , fontSize:'20px'}}>Cancel</Link>
    
    </Box>
  )
}