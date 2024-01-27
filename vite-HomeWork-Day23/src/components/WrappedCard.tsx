import React from 'react'
import ProductCard from '../components/ProductCard'
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';




const WrappedCard = () => {
  return (
    <>
 

      <Grid 
        container 
        spacing={{ xs: 2, md: 2 }} 
        sx={{ ml: 1}} >
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        <Grid xs={12} sm={6} md={3} lg={2.4}>
          <ProductCard />
        </Grid>
        

  
     </Grid>
 

    </>
  )
}

export default WrappedCard