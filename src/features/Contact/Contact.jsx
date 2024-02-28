import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Image from 'mui-image'
import Link from '@mui/material/Link';
import map from './images/map.JPG'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import richieCv from './images/richieCv.pdf'




const imageStyle = {
  maxWidth: '100%', // Ensure the image doesn't exceed its container width
  height: 'auto', // Maintain the image's aspect ratio
};



export function Contact() {

  return (
    <Container>
      <Box mb={4} />
      <Typography                     
        variant="h4"
        gutterBottom
        color="textSecondary"
        align="center">
          Contact
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} >
        <Box mb={6} />
        <List>
            <ListItem button key="Email" component="a" href="mailto:richiecontrolsystems@outlook.com">
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText>
                <Link>Email</Link>
              </ListItemText>      
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href="https://www.linkedin.com/in/richie-hales-472686131">LinkedIn</Link>
              </ListItemText>      
            </ListItem >
            <ListItem button>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href="https://www.facebook.com/profile.php?id=100084223683969">facebook</Link>
              </ListItemText>      
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText>
                <Link href="https://github.com/richiehales">GitHub</Link>
              </ListItemText>      
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PictureAsPdfIcon />
              </ListItemIcon>
              <ListItemText>
              <Link href={richieCv} target="_blank" rel="noopener noreferrer">CV</Link>
              </ListItemText>      
            </ListItem>
        </List> 
        </Grid>
        <Grid item xs={12} md={4} ></Grid>
        <Grid item xs={12} md={4} >
          <Image src={map} alt="Map" style={imageStyle}/>
        </Grid>
      </Grid>
  
    </Container>
  )
}