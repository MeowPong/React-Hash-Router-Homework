import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom'

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="/src/images/product-image.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat corrupti 
        </Typography>
      </CardContent>
      <CardActions>
        <Link to="/checkout"><Button size="small">Buy Now</Button></Link>
        <Link to="/ProductDetails"> <Button size="small">Learn More</Button></Link>
      </CardActions>
    </Card>
  );
}