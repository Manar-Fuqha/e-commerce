import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form"
import axios from "axios";
import { SendCodeSchema } from "../../validations/SendCodeSchema";
import {yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react";



export default function SendCode() {
    const [serverErrors, setServerErrors] =useState([]);
    const {register , handleSubmit , formState:{errors}} =useForm({
        resolver:yupResolver(SendCodeSchema),
        mode:'onBlur'
      })
    const sendCodeForm =async(values)=>{
        try{
           const response= await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/SendCode`,values);
           console.log(response.data.message)
        }
        catch(err){
            console.log(err) 
            setServerErrors([err.response.data.message])
        }
    }

  return (
    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center' ,justifyContent:'center' , minHeight:'100vh' }}>
        <Typography sx={{ textTransform: "uppercase" , color:'#3a3a3a'}}  component="h1">Reset your password</Typography>
        <Typography sx={{pt:'20px' ,color:'#3a3a3a' , fontSize:'18px', fontWeight:'400' , fontFamily:'Helvetica,Arial,sans-serif'}}  component={"p"}>We will send you an email to reset your password.</Typography>
        
        <Container maxWidth='sm'>
            {serverErrors.length >0 ?
                serverErrors.map( (err)=>
                <Typography sx={{color:"red"  , fontWeight:'bold' , py:'20px'}}>{err}</Typography>
                )
                :null}
            <Box onSubmit={handleSubmit(sendCodeForm)}  component={'form'} sx={{pt:'20px' }}>
                <TextField {...register('email')}  label="Email" fullWidth variant="outlined" 
                error={errors.email} helperText={errors.email?.message}/>
                <Button type='submit' variant="contained" sx={{p:'12px', backgroundColor:'#3a3a3a',textTransform:'uppercase' , mt:'20px' , display:'flex' , alignItems:'center' , mx:'auto' , letterSpacing:'3px'}}>submit</Button>

            </Box>
           
        
        </Container>
         <Link href="/auth/login" sx={{color:'#3a3a3a' , textDecoration:'none' , mt:'25px' , fontSize:'20px'}}>Cancel</Link>
    
    </Box>
  )
}
