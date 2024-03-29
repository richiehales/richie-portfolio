import Typography from "@mui/material/Typography";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import GitHubIcon from '@mui/icons-material/GitHub';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Image from 'mui-image';
import code from './images/code.JPG';


export function Career() {

  const cardStyle = {
    backgroundColor: 'lightgray', // Change the color to your desired background color
    // Add any other styles you need
  };

  return (  
    
    <Grid container spacing={2}>        
      <Grid item xs={12} md={8} >
        <Box mb={2} />
        <Image src={code} alt="code" height={'46rem'}/>
      </Grid>
      <Grid item xs={12} md={4}>
        <Card variant="outlined" style={cardStyle}>
          <CardContent>
            <Typography
              variant="h5"
              align="center">
                Current Job Role
            </Typography>
            <Typography variant="p" color="textSecondary">
              Electrical Controls Engineer. Programming
              PLCs, HMI's & servo drives. Provide 
              detailed costings to customer and produce
              electrical drawings with manuals for system.                        
            </Typography>
            <Box mb={4} />
            <Typography
              variant="h5"
              align="center">
                Career Goals
            </Typography>
            <Typography variant="p" color="textSecondary">
              Complete <Link href="https://www.codecademy.com" color="textSecondary">Codecademy</Link> Full 
              Stack Career Path and pursue a 
              career in web development.                        
            </Typography>
            <Box mb={4} />
            <Typography
              variant="h5"
              align="center">
                Web Development Technologies
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
              <ListItem>
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText>
                  JavaScript
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText>
                  React
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText>
                  Redux
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText>
                  Node / Express
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <StorageIcon />
                </ListItemIcon>
                <ListItemText>
                  PostgresQL
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <JavascriptIcon />
                </ListItemIcon>
                <ListItemText>
                  Material UI
                </ListItemText>   
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://github.com/richiehales/richie-portfolio">Git</Link>
                </ListItemText>   
              </ListItem>
            </List>
          </CardContent>
        </Card>       
      </Grid>                
    </Grid>   
  )
}