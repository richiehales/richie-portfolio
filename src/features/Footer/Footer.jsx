import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Image from 'mui-image';
import logo from './images/logo.JPG';


export function Footer() {
  return (
    <div>
    <Box mb={4} />
      <AppBar position='static'>
        <Toolbar>     
          <Typography
            variant="h5"            
            align="center"
            sx={{ flexGrow: 1 }}
          >
            Richie Hales
          </Typography>
          <Image src={logo} alt="logo" height={'3rem'} width={''}/>
          <Typography
            variant="h5"            
            align="center"
            sx={{ flexGrow: 1 }}
          >
            Web Developer
          </Typography>      
          </Toolbar>
      </AppBar>
    </div>
  )
}