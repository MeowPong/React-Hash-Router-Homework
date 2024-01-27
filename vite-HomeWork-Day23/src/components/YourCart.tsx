import React from 'react'
import Box from '@mui/system/Box';
import CartList from './CartList';
import Divider from '@mui/material/Divider';
import CartDiscount from './CartDiscount';
import CartTotal from './CartTotal';
import CartDisCountCode from './CartDisCountCode';


const YourCart = () => {
  return (
    <>
      <h1>Your Cart</h1>
      <Box sx={{ border: '1px solid grey' }}>
        <CartList />
        <Divider light sx={{ mx:2 }}/>
        <CartList />
        <Divider light sx={{ mx:2 }}/>
        <CartList />
        <Divider light sx={{ mx:2 }}/>
        <CartDiscount />
        <Divider light sx={{ mx:2 }}/>
        <CartTotal />
        <Divider light sx={{ mx:2 }}/>
        <CartDisCountCode />
        

      </Box>

    
    
    </>
  )
}

export default YourCart