import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';


const CartDiscount = () => {
  return (
    <>
      <Typography sx={{ color: 'success.main' }} >
      <Box sx={{ p: 2,  
                 display: 'flex',
                 justifyContent: 'space-between',
                 lineHeight: 1,

                  }}>
       <Box>
        <h2>Discount</h2>
       </Box>
       <Box>
        <h2>-$10</h2>
       </Box>
      </Box>
      </Typography>

    
    
    </>
  )
}

export default CartDiscount