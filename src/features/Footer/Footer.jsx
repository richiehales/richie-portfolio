import AppBar from '@mui/material/AppBar';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';


export function Footer() {
  return(
    <div>
    <Box mb={4} />
      <AppBar position='static'>
      <Box mb={2} />      
        <Typography
          variant="h4"            
          align="center"
          sx={{ flexGrow: 2 }}
        >
          Richie Hales
        </Typography>
        <Typography
          variant="h5"            
          align="center"
          sx={{ flexGrow: 1 }}
        >
          Web Developer
        </Typography>        
        <Box mb={2} />
      </AppBar>
    </div>
  )
}