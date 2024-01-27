import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">Button 1</Button>
      <Button variant="outlined">Button 2</Button>
    </Stack>
  );
}