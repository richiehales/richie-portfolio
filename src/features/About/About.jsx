import { Career } from './Career';
import { Personal } from './Personal';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from 'mui-image';
import laptop from './images/laptop.JPG';
import profilepic from './images/profilepic.JPG';
import code from './images/code.JPG';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const imageContainerStyle = {
  position: 'relative',
  textAlign: 'center',
};

const textOnImageStyle = {
  position: 'absolute',
  top: '10%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
  borderRadius: '5px',
};

const textColor = {
  color: 'white', 
};


export function About() {
  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        color="textSecondary"
        align="center"
      >
        About
      </Typography>
      <div style={imageContainerStyle}>
        <Image src={laptop} alt="Laptop" />
        <div style={textOnImageStyle}>
          <Typography
            variant="h4"
            style={textColor} 
          >
            Web Developer
          </Typography>
        </div>
      </div>
      <Box mb={4} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} >
          <Image src={code} alt="code" height={'46rem'}/>
          </Grid>
          <Grid item xs={12} md={4}>
            <Career />      
          </Grid>
          <Grid item xs={12} md={8}>
            <Personal />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image src={profilepic} alt="code" height={'33.5rem'}/>
          </Grid>
        </Grid>
      </Box>      
    </Container>
  )
}
