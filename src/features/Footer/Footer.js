import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';


export function Footer() {
  return(
    <div>
    <Box mb={4} />
      <AppBar position=''>
        <Toolbar>
          <Typography
            variant="h5"
            gutterBottom
            align="center"
            sx={{ flexGrow: 1 }}
          >
            Footer
          </Typography>      
        </Toolbar>
      </AppBar>
    </div>

  )
}