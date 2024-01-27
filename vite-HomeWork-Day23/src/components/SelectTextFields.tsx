
import TextField from '@mui/material/TextField';



export default function SelectTextFields() {
  return (
    <TextField
    id="outlined-number"
    label="Quantity"
    type="number"
    InputLabelProps={{
      shrink: true,
    }}
  />
  );
}