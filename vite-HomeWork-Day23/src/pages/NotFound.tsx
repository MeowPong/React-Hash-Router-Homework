import React from 'react'
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'



const NotFound = () => {
  return (
    <>
    <Box sx={{ textAlign: 'center' }}>
    <Box sx={{ fontSize: 60, fontWeight:'medium',lineHeight:0.25, pt:5}}><p>404</p></Box>
    <Box sx={{ fontSize: 30, lineHeight:0.25}}><p>Page Not Found</p></Box>
    <Box sx={{ fontSize: 16, pt:5}}>
     <p>We're sorry, the page you requested could not be found</p>
     <p>Please go back the homepage</p>
    </Box>
    <Link to="/">
     <Button variant="contained" 
             size="large" 
             sx={{ mt:5 }}>
              Go Home
      </Button>
      
    </Link>
    
 
    </Box>
    </>
  )
}

export default NotFound