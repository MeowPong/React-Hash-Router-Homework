import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';



export default function ProductReviews() {
    return (
      <>
         <Box sx={{ bgcolor: '#eeeeee', 
                     height: '3vh',
                     justifyContent: 'left',
                     alignItems: 'center',
                     display: 'flex',
                     mx:2,
                     pl:1   
                  }}>
           <h3>Reviews</h3>
          </Box> 
          <Box sx={{  
                     height: '3vh',
                     justifyContent: 'left',
                     alignItems: 'center',
                     mt:-1,
                     mx:2,
                     mb:5,
                     pl:1,
                     lineHeight: 0.5
                   }}>
           <h4>John Doe</h4>
           <p>Lorem ipsum dolor sit amet consectetur.</p>
          </Box> 
          <Divider sx={{  
                     height: '1vh',
                     mt:-1,
                     mx:2,
                     mb:5,
                   }}/>
          <Box sx={{  
                     height: '3vh',
                     justifyContent: 'left',
                     alignItems: 'center',
                     mt:-1,
                     mx:2,
                     mb:5,
                     pl:1,
                     lineHeight: 0.5
                   }}>
           <h4>Katy Bee</h4>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, delectus?</p>
          </Box> 
          <Divider sx={{  
                     height: '1vh',
                     mt:-1,
                     mx:2,
                     mb:5,
                   }}/>
          <Box sx={{  
                     height: '3vh',
                     justifyContent: 'left',
                     alignItems: 'center',
                     mt:-1,
                     mx:2,
                     mb:5,
                     pl:1,
                     lineHeight: 0.5
                   }}>
           <h4>Harry P.</h4>
           <p>Lorem ipsum dolor, sit amet consectetur  delectus</p>
          </Box>
          <Divider sx={{  
                     height: '1vh',
                     mt:-1,
                     mx:2,
                     mb:5,
                   }}/>
    
      </>    
  
    );
  }