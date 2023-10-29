import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Image from 'mui-image';
import testingOverview from './images/testingOverview.JPG';
import lighthouse from './images/lighthouse.JPG';




const imageStyle = {
  maxWidth: '100%', // Ensure the image doesn't exceed its container width
  height: 'auto', // Maintain the image's aspect ratio
};


export function FilmFinderTesting() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={12} >
        <Typography                     
          variant="h5"
          gutterBottom
          align="center">
            Testing
        </Typography>              
      </Grid>        
    
      <Grid item xs={12} md={6} >
        <Image src={testingOverview} alt="Testing Overview" style={imageStyle}/>
      </Grid>
      <Grid item xs={12} md={6} >
        <Typography
          variant="h5"
          align="center">
            Test Suites
        </Typography>
        <Typography variant="p" color="textSecondary">
          There are 20 tests in total. They test the components 
          renders the correct data and actions are dispatched to OMDb API
          correctly.                                  
        </Typography> 
      </Grid>              
          
      <Grid item xs={12} md={12} >
        <Box mb={8} />
        <Typography
          variant="h5"
          align="center">
            Lighthouse Report
        </Typography>
        <Image src={lighthouse} alt="Reddit App" style={imageStyle}/>
        <Box mb={8} />
      </Grid>
        
    </Grid>   
  )
}