import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

const country = [
  {
    value: 'Thailand',
    label: 'Thailand',
  },
  {
    value: 'Japan',
    label: 'Japan',
  },
  {
    value: 'Korea',
    label: 'Korea',
  },
  {
    value: 'USA',
    label: 'United State',
  },
];

export default function CountrySelector() {
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
          label="Country"
        >
          {country.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}