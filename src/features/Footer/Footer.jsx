import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Image from 'mui-image';
import logo from './images/logo.JPG';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

theme.typography.h6 = {
  fontSize: '1rem',
  '@media (min-width:600px)': {
    fontSize: '0.6rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};



export function Footer() {
  return (
    <div>
    <Box mb={4} />
      <AppBar position='static'>
        <Toolbar>
          <ThemeProvider theme={theme}>     
            <Typography
              variant="h6"            
              align="center"
              sx={{ flexGrow: 1 }}
            >
              Richie Hales
            </Typography>
          </ThemeProvider> 
          <Image src={logo} alt="logo" height={'3rem'} width={''}/>
          <ThemeProvider theme={theme}>
            <Typography
              variant="h6"            
              align="center"
              sx={{ flexGrow: 1 }}
            >
              Web Developer
            </Typography>
          </ThemeProvider>               
          </Toolbar>
      </AppBar>
    </div>
  )
}