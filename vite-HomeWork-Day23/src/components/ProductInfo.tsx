import React from 'react'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import './components.css'
import ProgressBar from './ProgressBar';
import SelectTextFields from './SelectTextFields';
import AddToCartButton from './AddToCartButton';



const ProductInfo = () => {
  return (
    <>
    <Box sx={{ flexGrow: 1, mx:2 , mt:5}}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={6} lg={6} sx={{ pr:3}}>
            <img src="src/images/product-image.png" alt="product image" />
            <h3>Stock ( 70/100 )</h3>
            <ProgressBar />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={6}>
          <h2>Product Name</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Aliquid illo voluptate corporis porro hic eveniet id autem 
            magni perspiciatis alias.
          </p>
          <h4>Price: $99</h4>
          <SelectTextFields />
          <AddToCartButton />
          
        </Grid>
      </Grid>
    </Box>
    </>
  )
}

export default ProductInfo