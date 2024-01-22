import { Box, Typography, Button } from '@mui/material';
// import { heroImage } from '../assets'; // Replace with actual image import
import heroImage from '../public/heroImage.jpeg'; 
export default function Hero() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2" color="primary">
        Unlock the secrets of professional photography and shoot like a pro.
      </Typography>
      <Typography variant="body1" color="secondary">
        Master composition, lighting, exposure, and more in this comprehensive
        online course.
      </Typography>
      <Button variant="contained" color="primary">
        Enroll Now & Get 10% Off!
      </Button>
    </Box>
  );
}
