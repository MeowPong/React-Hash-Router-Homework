import React from "react";
import Box from '@mui/material/Box';
import BasicButtons from "./BasicButtons";

const HomeHeader = () => {
  return (
    <>
    <Box
        sx={{
          display: 'flex',
          justifyContent: 'center'
        }}
      >
              <h1>Welcome to Day23</h1>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt:-3,
          mb:5
        }}
      >
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Voluptatum magni eligendi nostrum impedit?
      </p>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt:-1,
          mb:10
        }}>
       <BasicButtons />
      </Box>
      

    </>
  );
};

export default HomeHeader;
