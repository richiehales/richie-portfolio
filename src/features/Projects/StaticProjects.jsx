import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import Image from 'mui-image'
import BasicHTML1 from './images/BasicHTML1.JPG'
import BasicHTML2 from './images/BasicHTML2.JPG'


const imageStyle = {
  maxWidth: '100%', // Ensure the image doesn't exceed its container width
  height: 'auto', // Maintain the image's aspect ratio 
};

export function StaticProjects() {

  return (
    
    <Grid container spacing={2}>
      <Grid item xs={12} md={4} >
        <Image src={BasicHTML1} alt="BasicHTML1" style={imageStyle}/>        
      </Grid>
      <Grid item xs={12} md={4} >
        <Typography                     
          variant="h5"
          gutterBottom
          align="center">
            Static HTML Pages
        </Typography>
        <Typography variant="p" color="textSecondary">
          Basic single page projects to practice HTML 
          and CSS technologies. Produced at start 
          of <Link href="https://www.codecademy.com" color="textSecondary">Codecademy</Link> course.                  
        </Typography>
        <Box mb={12} />
        <Typography
          variant="h5"
          align="center">
            Technologies Used
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <HtmlIcon />
            </ListItemIcon>
            <ListItemText>
              HTML
            </ListItemText>      
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CssIcon />
            </ListItemIcon>
            <ListItemText>
              CSS
            </ListItemText>      
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={12} md={4} >
        <Image src={BasicHTML2} alt="BasicHTML2" style={imageStyle}/>        
      </Grid>    
    </Grid>

  )
}