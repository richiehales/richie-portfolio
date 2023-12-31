import { RedditTesting } from "./RedditTesting";
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
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'mui-image'
import redditApp from './images/redditApp.JPG'



const imageStyle = {
  maxWidth: '100%', // Ensure the image doesn't exceed its container width
  height: 'auto', // Maintain the image's aspect ratio
  border: 'solid darkgray 1px'
};

const cardStyle = {
  backgroundColor: 'lightgray', // Change the color to your desired background color
  // Add any other styles you need
};

export function RedditApp() {

  return (
    <Card variant="outlined" style={cardStyle}>
      <CardContent>    
        <Link href="https://richie-reddit-app.netlify.app/">
          <Typography                     
            variant="h5"
            gutterBottom
            align="center">
              Simplified Reddit App
          </Typography>
        </Link>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} >
          <Link href="https://richie-reddit-app.netlify.app/">
            <Image src={redditApp} alt="Reddit App" style={imageStyle}/>
            </Link>
          </Grid>
        
          <Grid item xs={12} md={12}>
            <Box mb={8} />
          </Grid>

          <Grid item xs={12} md={5} >
            <Typography                     
              variant="h5"
              gutterBottom
              align="center">
                Reddit - Richie Edition
            </Typography>
            <Typography variant="p" color="textSecondary">
              A simplified version of the <Link href="https://www.reddit.com/" color="textSecondary">Reddit App.</Link> The 
              subreddits are pulled from the reddit site and mapped to buttons
              displayed on the left hand side. The subreddit buttons can be clicked
              and posts for that subreddit are displayed in a component on the right hand side. Comments 
              for each post can be displayed by clicking 'comments' button which are then displayed in a 
              comments component using the browser router.                                      
            </Typography>
            <Box mb={2} />
            <Typography variant="p" color="textSecondary">
              There is a search field in the header that searches
              the reddit website and displays the results in the posts component.                                     
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
                  1. Improve appearence using Meterial UI
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemText>
                  2. Display comments underneath relevant posts
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemText>
                  3. Invesigate displaying replies to comments
                </ListItemText>      
              </ListItem>
              <ListItem>
                <ListItemText>
                  4. Invesigate possibility of user logging into their account and adding comments
                </ListItemText>      
              </ListItem>
            </List>          
          </Grid>      
          
          <Grid item xs={12} md={7} >
            <RedditTesting />
          </Grid>   
        </Grid>   
      </CardContent>
    </Card>
  )
}