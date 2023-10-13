import React, { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HomeIcon from '@mui/icons-material/Home';


const Header = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
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
    </Box>
  );
}



export default Header;