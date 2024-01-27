import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const city = [
  {
    value: 'Bangkok',
    label: 'Bangkok',
  },
  {
    value: 'Amnat Charoen',
    label: 'Amnat Charoen',
  },
  {
    value: 'Ang Thong',
    label: 'Ang Thong',
  },
  {
    value: 'Bueng Kan',
    label: 'Bueng Kan',
  },
  {
    value: 'other',
    label: 'other',
  },
];

export default function CitySelector() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1,  },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="City"
        >
          {city.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}