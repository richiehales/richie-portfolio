import React from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from 'mui-image';
import laptop from './images/laptop.JPG';
import code from './images/code.JPG';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';

const imageContainerStyle = {
  position: 'relative',
  textAlign: 'center',
};

const textOnImageStyle = {
  position: 'absolute',
  top: '15%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
  borderRadius: '5px',
};

const textColor = {
  color: 'white', 
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function About() {
  return (
    <Container>
      <Typography
        variant="h3"
        gutterBottom
        color="textSecondary"
        align="center"
      >
        About Component
      </Typography>
      <div style={imageContainerStyle}>
        <Image src={laptop} alt="Laptop" />
        <div style={textOnImageStyle}>
          <Typography
            variant="h3"
            style={textColor} 
          >
            Richie Hales <br/>
            Web Developer
          </Typography>
        </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={8} >
          <Image src={code} alt="code" />
          </Grid>
          <Grid item xs={6} md={4}>
            <Typography
            variant="h5"
            align="center"
            >
            Current Job Role
          </Typography>
          <Typography
            variant="h7"
            align="left"
            gutterBottom
            >
              Electrical Controls Engineer. Programming
              PLCs, HMI's & servo drives. Provide 
              detailed costings to customer and produce
              electrical drawings with manuals for system.
                        
          </Typography>
          <Typography
            variant="h5"
            align="center"
            >
            Web Development Skills
          </Typography>
          <List align="left">
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
                Node
              </ListItemText>      
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <JavascriptIcon />
              </ListItemIcon>
              <ListItemText>
                Express
              </ListItemText>      
            </ListItem>
          </List>
          </Grid>
          <Grid item xs={6} md={4}>
            <Item>xs=6 md=4</Item>
          </Grid>
          <Grid item xs={6} md={8}>
            <Item>xs=6 md=8</Item>
          </Grid>
        </Grid>
      </Box>      
    </Container>
  )
}
