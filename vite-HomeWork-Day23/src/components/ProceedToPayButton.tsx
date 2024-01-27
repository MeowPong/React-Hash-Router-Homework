import React from 'react'
import Button from '@mui/material/Button';
import { Box } from '@mui/material';


const ProceedToPayButton = () => {
  return (
    <Box sx={{ mb:10}}>
       <Button 
              variant="contained" 
              size="large">
                Proceed to checkout
       </Button>

    </Box>


  )
}

export default ProceedToPayButton