import { Box, Typography ,TextField, Container, Button, Link } from '@mui/material'
import { useForm } from "react-hook-form"
import axios from 'axios'

export default function Login() {
  const {register , handleSubmit} =useForm({})
  
    const loginForm = async(values)=>{
  
      try{
        const response = await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/Login`,values);
        if(response.status ===200){
          localStorage.setItem("token",response.data.accessToken)
        }
      }
      catch(err){
        ;console.log(err)
      }
    }
  
    return (
      <Box className="login-form" sx={{ display:'flex', flexDirection:'column' , padding:'50px'}}>
        <Typography sx={{ m:'auto' , fontWeight:'bold' , pb:'50px', color:'#3a3a3a'}} variant='h3' component="h1">Login</Typography>
  
        <Container maxWidth="sm">
        <Box onSubmit={handleSubmit(loginForm)} component={"form"} sx={{display:'flex',gap:'20px' , flexDirection:'column'}}>
        <TextField {...register('email')}  label="Email" variant="outlined" />
        
        <TextField {...register('password')}  label="Password" variant="outlined" />
      <Link href="/auth/sendCode" sx={{m:'auto',fontWeight:'400' , fontFamily:"Helvetica, Arial, sans-serif" , pt:'10px' , textDecoration:'none' , color:'#606060' , cursor:'pointer'}}>Forgot your password?</Link>
        
        <Button sx={{m:'auto', width:'fit-content'}} type='submit' variant="contained">Sign In</Button>
      <Link href="/auth/register" sx={{m:'auto',fontWeight:'400' , fontFamily:"Helvetica, Arial, sans-serif" , py:'10px' , textDecoration:'none' , color:'#606060' , cursor:'pointer'}}>Create account</Link>
        
        </Box>
      </Container>
      </Box>
  
  )
}
