import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useProducts } from '../../hooks/useProducts'

export default function Products() {
    const {isLoading,isError,data} = useProducts();
     if(isLoading) return <CircularProgress></CircularProgress>
    if(isError) return <Typography>Error...</Typography>
  return (
    <>
      <Box sx={{p:2}}>
         <Container maxWidth='lg'>
            <Grid container spacing={3}>
                {
                    data.map((product)=>
                        <Grid item size={{ xs: 12, sm:6 ,md: 4 ,lg:3 }} key={product.id}>
                             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
       component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'contain' ,cursor:'pointer'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        
      </CardContent>
      <CardActions>
        <Button size="small">Add To Cart</Button>
        <Button size="small">Show Details</Button>
      </CardActions>
    </Card>
                        </Grid>
                    )
                }
                
            </Grid>
        </Container>
      </Box>
    </>
  )
}
