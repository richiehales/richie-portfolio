import React, { useState } from "react";
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home'

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function Header(props) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  return (
    <React.Fragment>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
            <ButtonGroup 
              orientation="vertical"
              color="primary"
              aria-label="vertical contained button group"
              variant="text"
              >
              <Button href="/">                
                <MenuItem onClick={handleClose}>About</MenuItem>            
              </Button>
              <Button href="/Projects">
                 <MenuItem onClick={handleClose}>Projects</MenuItem>
              </Button>
              <Button href="/Contact">
                <MenuItem onClick={handleClose}>Contact</MenuItem>
              </Button>
            </ButtonGroup>
          </Menu>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Richie Hales Portfolio
          </Typography>
          <IconButton
            href="/"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"         
          >
            <HomeIcon />
          </IconButton>        
        </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </React.Fragment>
  );
}