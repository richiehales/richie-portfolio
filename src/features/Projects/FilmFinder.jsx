import { FilmFinderTesting } from "./FilmFinderTesting";
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
import JavascriptIcon from '@mui/icons-material/Javascript';
import GitHubIcon from '@mui/icons-material/GitHub';
import movieFinder from './images/movieFinder.mp4'





const imageStyle = {
  maxWidth: '100%', // Ensure the image doesn't exceed its container width
  height: 'auto', // Maintain the image's aspect ratio
};



export function FilmFinder() {

  return (
    <div>
      <Link href="https://movie-finder-richie.netlify.app/">
        <Typography                     
          variant="h5"
          gutterBottom
          align="center">
            Film Finder
        </Typography>
      </Link>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12} >
        <Link href="https://movie-finder-richie.netlify.app/">
        <video
            autoPlay
            loop
            muted
            style={imageStyle}
          >
            <source
              src={movieFinder}
              type="video/mp4"
            />
          </video>
          </Link>
        </Grid>
      
        <Grid item xs={12} md={12}>
          <Box sx={{ backgroundColor: 'lightblue', height: '0.5rem' }} mb={8} />
        </Grid>

        <Grid item xs={12} md={5} >
          <Typography                     
            variant="h5"
            gutterBottom
            align="center">
              Film Finder
          </Typography>
          <Typography variant="p" color="textSecondary">
            An app for searchng  <Link href="https://www.omdbapi.com/" color="textSecondary">OMDb API</Link> API 
            and mapping results to Search component. The movies can then be added to and removed from a Watchlist 
            component.                               
          </Typography>
          <Box mb={2} />
          <Typography variant="p" color="textSecondary">
            There is a badge in the AppBar to indicate number of movies added to watchlist which is 
            reset when these additions are viewed.                                      
          </Typography>
          <Box mb={24} />
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
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href="https://github.com/richiehales/richie-reddit-app">Git</Link>
              </ListItemText>
            </ListItem>
          </List>
          <Box mb={24} />
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
                1. Improve colour schemes
              </ListItemText>      
            </ListItem>
            <ListItem>
              <ListItemText>
                2. Display popup when movie already exists in watchlist
              </ListItemText>      
            </ListItem>
            <ListItem>
              <ListItemText>
                3. Connecting to server/database
              </ListItemText>      
            </ListItem>
            <ListItem>
              <ListItemText>
                4. Invesigate possibility of user signup/login
              </ListItemText>      
            </ListItem>
          </List>          
        </Grid>      
        
        <Grid item xs={12} md={7} >
          <FilmFinderTesting />
        </Grid>   
      </Grid>
    </div>
  )
}