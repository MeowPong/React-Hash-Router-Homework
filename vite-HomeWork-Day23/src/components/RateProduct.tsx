import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function RateProduct() {
  return (
    <>
       <Box sx={{ bgcolor: '#eeeeee', 
                   height: '3vh',
                   mt:10,
                   justifyContent: 'left',
                   alignItems: 'center',
                   display: 'flex',
                   mx:2,
                   pl:1   }}>

         <h3>Rate this product</h3>
        </Box>
\
        <Box sx={{  
                   height: '5vh',
                   justifyContent: 'left',
                   alignItems: 'center',
                   display: 'flex',
                   mt:-3,
                   mx:2,
                   pl:1   }}>
          <Rating name="size-large" defaultValue={4}/> 
        </Box>
        
    </>

        

  );
}