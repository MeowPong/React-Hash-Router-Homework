import React from 'react'
import Box from '@mui/material/Box';

const CheckOutHeader = () => {
  return (
    <>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
              <h1>Checkout form</h1>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt:-3,
          mb:5
        }}
      >
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptatum magni eligendi nostrum impedit?
      </p>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt:-7,
          mb:5
        }}
      >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, cumque!
      </p>

      </Box>
      

    </>
  )
}

export default CheckOutHeader