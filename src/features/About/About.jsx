import { Career } from './Career';
import { Personal } from './Personal';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from 'mui-image';
import laptop from './images/laptop.JPG';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

theme.typography.h4 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '0.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1.2rem',
  },
};



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
      <Box mb={4} />
      <Typography
        variant="h4"
        gutterBottom
        color="textSecondary"
        align="center"
      >
        About
      </Typography>
      <Box mb={4} />
      <div style={imageContainerStyle}>
        <Image src={laptop} alt="Laptop" />
        <div style={textOnImageStyle}>
          <ThemeProvider theme={theme}>
          <Typography
            variant="h4"
            style={textColor} 
          >
            Web Developer
          </Typography>
          </ThemeProvider>
        </div>
      </div>
      <Box mb={8} />
      <Career />
      <Box mb={8} />
      <Personal />    
    </Container>
  )
}
