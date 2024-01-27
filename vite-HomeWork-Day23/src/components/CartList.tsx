import React from 'react'
import Box from '@mui/system/Box';
import Typography from '@mui/material/Typography';

const CartList = () => {
  return (
    <>

     <Typography sx={{ color: 'text.secondary' }}>
      <Box sx={{ p: 2,  
                 display: 'flex',
                 justifyContent: 'space-between',
                 lineHeight: 1
                  }}>
       <Box>
        <h2>Product name</h2>
        <p>Lorem, ipsum dolor.</p>
       </Box>
       <Box>
        <h2>$12</h2>
       </Box>
      </Box>

      </Typography>

    
    
    </>
  )
}

export default CartList