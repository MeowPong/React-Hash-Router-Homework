import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CartDisCountCode() {
    return (
   <>
    <Box sx={{ display: "flex", alignContent:"center" }}>
      <Box
          component="form"
          sx={{'& > :not(style)': { m: 2, width: '40ch' },}}
    >
      <TextField id="outlined-basic" label="Enter Discount Code" variant="outlined" />
      </Box>
      <Button variant="outlined" size="medium" sx={{ height:60, width:100, mt:2 }}>
          Apply
        </Button>    
      </Box>

    </>
    );
}