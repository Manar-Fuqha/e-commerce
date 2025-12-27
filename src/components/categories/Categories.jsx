import React, { useEffect, useState } from 'react'
import axiosInstance from '../../Api/axiosInstance';
import { Box, Grid ,Card, Typography, Container, CircularProgress } from '@mui/material';
import {useQuery} from '@tanstack/react-query'
import { useCategories } from '../../hooks/useCategories';

export default function Categories() {

     
    const {isLoading,isError,data} = useCategories();

    if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography>Error...</Typography>



  return (
    <>
    <Box sx={{p:2  }}>
    
    
    <Container maxWidth='lg'>
        <Typography sx={{display:'flex' , justifyContent:'center'}} variant='h4' component={'h2'}>Categories</Typography>
        <Grid container spacing={3}>
            {data.map((category) => (
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
