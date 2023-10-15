import { Career } from './Career';
import { Personal } from './Personal';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from 'mui-image';
import laptop from './images/laptop.JPG';
import Box from '@mui/material/Box';



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
      <Career />
      <Personal />
      
           
    </Container>
  )
}
