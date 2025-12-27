import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Api/axiosInstance';
import { Box, Grid ,Card, Typography, Container } from '@mui/material';

export default function Categories() {

    const [categories , setCategories] = useState([]);

    const getCategories= async ()=>{
        try{
            const response = await axiosInstance.get('/Categories');
            console.log(response);
            setCategories(response.data.response);
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getCategories();
    } , [])

  return (
    <>
    <Box sx={{p:2  }}>
    
    
    <Container maxWidth='lg'>
        <Typography sx={{display:'flex' , justifyContent:'center'}} variant='h4' component={'h2'}>Categories</Typography>
        <Grid container spacing={3}>
            {categories.map((category) => (
            <Grid item size={{ xs: 12, sm:6 ,md: 4 ,lg:3 }}key={category.id}>
        <Card
          sx={{ p: 3, border: '1px solid black', textAlign: 'center' }}
          component="h2"
        >
          {category.name}
        </Card>
            </Grid>
             ))}
        </Grid>
</Container>
      
    
    </Box>
    </>
  )
}
