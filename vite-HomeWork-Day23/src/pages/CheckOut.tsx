import React from 'react'
import CheckOutHeader from '../components/CheckOutHeader'
import Grid from '@mui/system/Unstable_Grid';
import Box from '@mui/system/Box';
import BillingAddress from '../components/BillingAddress'
import YourCart from '../components/YourCart'
import ProceedToPayButton from '../components/ProceedToPayButton'

const CheckOut = () => {
  return (
    <>
    <CheckOutHeader />
    <Box sx={{ flexGrow: 1, mx:2 , mt:5}}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={8} lg={8} sx={{ pr:3}}>
          <BillingAddress />
        </Grid>
        <Grid xs={12} sm={12} md={4} lg={4}>
          <YourCart />          
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ flexGrow: 1, mx:2 , mt:10, display:"flex", justifyContent:"center"}}>
     <ProceedToPayButton />
    </Box>
    
   
    
    </>
  )
}

export default CheckOut





