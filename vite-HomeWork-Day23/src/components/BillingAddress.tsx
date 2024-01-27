import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import CountrySelector from './CountrySelector';
import CitySelector from './CitySelector';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';




const BillingAddress = () => {
  return (
    <>
    <h1>Billing adress</h1>
    <Box component="form"
         sx={{
        '& .MuiTextField-root': { m: 1, width: '50ch' },
             }}
         noValidate
         autoComplete="off">
     <TextField
          id="outlined-required"
          label="First name"
        />
     <TextField
          id="outlined-required"
          label="Last name"
        />
    </Box>
    <Box component="form"
         sx={{
        '& .MuiTextField-root': { m: 1, width: '102ch' },
             }}
         noValidate
         autoComplete="off">
     <TextField
          id="outlined-required"
          label="Email"
        />
     <TextField
          id="outlined-required"
          label="Address"
        /> 
    </Box>
    <Box component="form"
         sx={{
               '& .MuiTextField-root': { m: 1, width: '32.8ch' },
               display:'flex'
             }}
         noValidate
         autoComplete="off">
      <CountrySelector />
      <CitySelector />
      <TextField
          id="outlined-required"
          label="Zip code"
        /> 
    </Box>
      <FormControlLabel control={<Checkbox />} 
                        label="Save this information for next time"
                        sx={{pl:1 , pt:1}} />
    <h1>Payment method</h1>
    <FormGroup sx={{pl:1}}>
      <FormControlLabel control={<Checkbox />} label="Credit Card" />
      <FormControlLabel control={<Checkbox />} label="PayPal" />
      <FormControlLabel control={<Checkbox />} label="Pay on delivery" />

    </FormGroup>

    </>
  )
}

export default BillingAddress