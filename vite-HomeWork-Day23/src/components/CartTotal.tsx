import React from 'react'
import Box from '@mui/system/Box';

const CartTotal = () => {
  return (
    <>

      <Box sx={{ p: 2,  
                 display: 'flex',
                 justifyContent: 'space-between',
                 lineHeight: 1
                  }}>
       <Box>
        <h2>Total</h2>
       </Box>
       <Box>
        <h2>$26</h2>
       </Box>
      </Box>

    
    
    </>
  )
}

export default CartTotal