import { Box, Typography ,TextField, Container, Button } from '@mui/material'
import { useForm } from "react-hook-form"
import axios from 'axios'

export default function Register() {

  const {register , handleSubmit} =useForm({})

  const registerForm = async(values)=>{

    try{
      const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Register`,values);
    }
    catch(err){
      ;console.log(err.response?.data)
    }
  }

  return (
    <Box className="register-form" sx={{ display:'flex', flexDirection:'column' , padding:'50px'}}>
      <Typography sx={{ m:'auto' , fontWeight:'bold' , pb:'50px'}} variant='h3' component="h1">Create Account</Typography>

      <Container maxWidth="sm">
      <Box onSubmit={handleSubmit(registerForm)} component={"form"} sx={{display:'flex',gap:'20px' , flexDirection:'column'}}>
      <TextField {...register('fullName')}  label="Full Name" variant="outlined" />
      <TextField {...register('userName')}  label="User Name" variant="outlined" />
      <TextField {...register('email')}  label="Email" variant="outlined" />
      <TextField {...register('password')}  label="Password" variant="outlined" />
      <TextField {...register('phoneNumber')}  label="Phone Number" variant="outlined" />
      <Button sx={{m:'auto', width:'fit-content'}} type='submit' variant="contained">Create</Button>
      </Box>
    </Container>
    </Box>

    
  )
}
