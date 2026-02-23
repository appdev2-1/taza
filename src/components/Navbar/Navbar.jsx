import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, useMediaQuery, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import CakeIcon from '@mui/icons-material/Cake';
import { styled } from '@mui/system';
import logo from '../../assets/logo.jpg';

const GlowingButton = styled(Button)(({ theme }) => ({
  margin: '10px',
  padding: '10px 20px',
  border: 'none',
  outline: 'none',
  color: '#FFF',
  cursor: 'pointer',
  position: 'relative',
  zIndex: 0,
  borderRadius: '12px',
  backgroundColor: '#0b0a0a',
  '&:after': {
    content: '""',
    zIndex: -1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#0d1c9f',
    left: 0,
    top: 0,
    borderRadius: '10px',
  },
  '&:before': {
    content: '""',
    background: 'linear-gradient(45deg, #FF0000, #FF7300, #FFFB00, #48FF00, #00FFD5, #002BFF, #FF00C8, #FF0000)',
    position: 'absolute',
    top: '-2px',
    left: '-2px',
    backgroundSize: '600%',
    zIndex: -1,
    width: 'calc(100% + 4px)',
    height: 'calc(100% + 4px)',
    filter: 'blur(8px)',
    animation: 'glowing 20s linear infinite',
    transition: 'opacity .3s ease-in-out',
    borderRadius: '10px',
    opacity: 0,
  },
  '&:hover:before': {
    opacity: 1,
  },
  '&:active:after': {
    background: 'transparent',
  },
  '&:active': {
    color: '#000',
    fontWeight: 'bold',
  },
  '@keyframes glowing': {
    '0%': { backgroundPosition: '0 0' },
    '50%': { backgroundPosition: '400% 0' },
    '100%': { backgroundPosition: '0 0' },
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
      <List onClick={handleDrawerToggle}>
        <ListItem>
          <GlowingButton component={Link} to="/Homepage">
            Home
          </GlowingButton>
        </ListItem>
        <ListItem>
          <GlowingButton component={Link} to="/programs">
            Programs
          </GlowingButton>
        </ListItem>
        <ListItem>
          <GlowingButton component={Link} to="/about">
            About Us
          </GlowingButton>
        </ListItem>
        <ListItem>
          <GlowingButton component={Link} to="/campus">
            Campus
          </GlowingButton>
        </ListItem>
        <ListItem>
          <GlowingButton component={Link} to="/testimonials">
            Testimonials
          </GlowingButton>
        </ListItem>
        <ListItem>
          <GlowingButton component={Link} to="/contact">
            Contact Us
          </GlowingButton>
        </ListItem>
      </List>
  );

  return (
      <AppBar position="fixed" sx={{ boxShadow: 'none', padding: '10px 0', backgroundColor: '#0b1c8a' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img src={logo} alt="Logo" style={{ width: '80px', height: '80px', objectFit: 'contain' }} />
          </Box>

          {isMobile ? (
              <>
                <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                  <CakeIcon style={{ fontSize: '30px' }} />
                </IconButton>
                <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                  {drawer}
                </Drawer>
              </>
          ) : (
              <>
                <GlowingButton component={Link} to="/Homepage">
                  Home
                </GlowingButton>
                <GlowingButton component={Link} to="/programs">
                  Programs
                </GlowingButton>
                <GlowingButton component={Link} to="/about">
                  About Us
                </GlowingButton>
                <GlowingButton component={Link} to="/campus">
                  Campus
                </GlowingButton>
                <GlowingButton component={Link} to="/testimonials">
                  Testimonials
                </GlowingButton>
                <GlowingButton component={Link} to="/contact">
                  Contact Us
                </GlowingButton>
              </>
          )}
        </Toolbar>
      </AppBar>
  );
};

export default Navbar;
