import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'


export default function AddToCartButton() {
  return (
    <Box sx={{ '& button': { m: 1 , mt:2} }}>
      <div>
      <Link to="/checkout">
        <Button variant="contained" size="medium">
          Add to Cart
        </Button>
    </Link>
      </div>
    </Box>
  );
}