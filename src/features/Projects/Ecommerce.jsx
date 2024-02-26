import { EcommerceTesting } from "./EcommerceTesting";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from "@mui/material/Typography";
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'mui-image'
import RRKSports from './images/RRKSports.jpg'


const imageStyle = {
  maxWidth: '100%', // Ensure the image doesn't exceed its container width
  height: 'auto', // Maintain the image's aspect ratio
  border: 'solid darkgray 1px'
};

const cardStyle = {
  backgroundColor: 'lightgray', // Change the color to your desired background color
  // Add any other styles you need
};

export function Ecommerce() {  

  return (
    <Card variant="outlined" style={cardStyle}>
      <CardContent>
          
        <Link href="https://ecommerce-static-client.onrender.com">
          <Typography                     
            variant="h5"
            gutterBottom
            align="center">
              RRK Sports
          </Typography>
        </Link>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} >            
            <Link href="https://ecommerce-static-client.onrender.com">
              <Image src={RRKSports} alt="Reddit App" style={imageStyle}/>                
            </Link>
            <Box mb={6} />
          </Grid>
          
        
          

          <Grid item xs={12} md={5} >
            <Typography                     
              variant="h5"
              gutterBottom
              align="center">
                Ecommerce - RRK Sports
            </Typography>
            <Typography variant="p" color="textSecondary">
              A basic ecommerce Full-Stack App using React/Redux for front end, express.js 
              for server side and PostgresQL fo the database.                                           
            </Typography>
            <Box mb={2} />
            <Typography variant="p" color="textSecondary">
              Enables user to create account, login, select products and 
              carry out a mock purchase.                                     
            </Typography>
            <Box mb={2} />
            <Typography variant="p" color="textSecondary">
              Hosted on Render                                     
            </Typography>
            <Box mb={16} />
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
                  Material UI
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
                  React Testing Library (RTL)
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
                  Express.js
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
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link href="https://github.com/richiehales/richie_ecommerce_fullstack">Git</Link>
                </ListItemText>
              </ListItem>
            </List>
            <Box mb={16} />
            <Typography
              variant="h5"
              align="center">
                Improvements
            </Typography>
            <Typography variant="p" color="textSecondary">
              Future improvements I plan to implement include:                                 
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  1. Setup stock levels
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemText>
                  2. Add colour selections
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemText>
                  3. Add colour and size selections to database order records
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemText>
                  4. Improve appearance
                </ListItemText>      
              </ListItem>
            </List>          
          </Grid>      
          
          <Grid item xs={12} md={7} >
            <EcommerceTesting />
          </Grid>   
        </Grid>
          
      </CardContent>
    </Card>
  )
}