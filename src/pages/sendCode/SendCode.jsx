import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import axios from "axios";


export default function SendCode() {

    const sendCodeForm =async(values)=>{
        try{
            await axios.post(`https://knowledgeshop.runasp.net/api/Auth/Account/SendCode`,values);
        }
        catch(err){
            console.log(err)
        }
    }

  return (
    <Box sx={{display:'flex' , flexDirection:'column' , alignItems:'center' ,justifyContent:'center' , minHeight:'100vh' }}>
        <Typography sx={{ textTransform: "uppercase" , color:'#3a3a3a'}} variant="" component="h1">Reset your password</Typography>
        <Typography sx={{pt:'20px' ,color:'#3a3a3a' , fontSize:'18px', fontWeight:'400' , fontFamily:'Helvetica,Arial,sans-serif'}} variant="" component={"p"}>We will send you an email to reset your password.</Typography>
        
        <Container maxWidth='sm'>
            <Box variant component={'form'} sx={{pt:'20px' }}>
                <TextField  label="Email" fullWidth variant="outlined" />
                <Button  variant="contained" sx={{p:'12px', backgroundColor:'#3a3a3a',textTransform:'uppercase' , mt:'20px' , display:'flex' , alignItems:'center' , mx:'auto' , letterSpacing:'3px'}}>submit</Button>

            </Box>
           
        
        </Container>
         <Link href="/auth/login" sx={{color:'#3a3a3a' , textDecoration:'none' , mt:'25px' , fontSize:'20px'}}>Cancel</Link>
    
    </Box>
  )
}
