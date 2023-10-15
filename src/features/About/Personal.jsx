import  Gaming  from "./images/Gaming.JPG"
import Typography from "@mui/material/Typography";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'mui-image';
import profilepic from './images/profilepic.JPG';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HikingIcon from '@mui/icons-material/Hiking';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';




export function Personal() {

  return(
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>          
          <Typography
            variant="h5"
            align="center">
              About Me
          </Typography>
          <Typography variant="p" color="textSecondary">
            An enthusiastic professional individual who is seeking a 
            new challenging career after many years of working as a 
            competent electrical engineer with a comprehensive 
            knowledge of designing, developing and maintaining 
            electrical control systems. A consistent track record of 
            successfully completing projects from the concept 
            through to design, implementation, testing and 
            handover. I am currently looking to change careers 
            to a software developer after recently starting to study 
            for a  BSc Computing and IT degree with the Open University. 
            I have completed 55% of the Full-Stack Engineer course on 
            Codecademy (covered HTML, CSS, Git, React, Redux, API calls, 
            node.js, Express.js etc).                        
          </Typography>
          <Box mb={6} />
      
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>              
              <Image src={Gaming} alt="Gaming" height={'18rem'}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h5"
                align="center">
                  Hobbies
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <DirectionsRunIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Running
                  </ListItemText>      
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HikingIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Hiking
                  </ListItemText>      
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsSoccerIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Football
                  </ListItemText>      
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Gym
                  </ListItemText>      
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsEsportsIcon />
                  </ListItemIcon>
                  <ListItemText>
                    Gaming
                  </ListItemText>      
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Image src={profilepic} alt="code" height={'33.5rem'}/>
        </Grid>
      </Grid>
    </Box> 
  )
}