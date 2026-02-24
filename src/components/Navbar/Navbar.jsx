import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, useMediaQuery, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import logo from '../../assets/logo.jpg';

const StyledAppBar = styled(AppBar)(({ scrolled }) => ({
  background: scrolled ? 'rgba(11, 28, 138, 0.95)' : 'rgba(11, 28, 138, 0.85)',
  backdropFilter: 'blur(10px)',
  boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
  transition: 'all 0.3s ease',
  padding: scrolled ? '5px 0' : '10px 0',
}));

const NavButton = styled(Button)(({ active }) => ({
  margin: '0 5px',
  padding: '8px 20px',
  color: '#FFF',
  fontSize: '15px',
  fontWeight: active ? 600 : 500,
  borderRadius: '8px',
  position: 'relative',
  overflow: 'hidden',
  background: active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'transparent',
  transition: 'all 0.3s ease',
  '&:before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    width: active ? '100%' : '0%',
    height: '2px',
    background: '#fff',
    transform: 'translateX(-50%)',
    transition: 'width 0.3s ease',
  },
  '&:hover': {
    background: active ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : 'rgba(255, 255, 255, 0.1)',
    transform: 'translateY(-2px)',
  },
  '&:hover:before': {
    width: '80%',
  },
}));

const LogoBox = styled(Box)(({ scrolled }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  textDecoration: 'none',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  '& img': {
    width: scrolled ? '60px' : '70px',
    height: scrolled ? '60px' : '70px',
    borderRadius: '50%',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s ease',
  },
}));

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActive = (path) => location.pathname === path;

  const navItems = [
    { label: 'Home', path: '/Homepage' },
    { label: 'Programs', path: '/programs' },
    { label: 'About Us', path: '/about' },
    { label: 'Campus', path: '/campus' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const drawer = (
    <Box sx={{ width: 280, height: '100%', background: 'linear-gradient(180deg, #0b1c8a 0%, #1a2380 100%)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#fff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ px: 2 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} sx={{ py: 1, px: 0 }}>
            <Button
              component={Link}
              to={item.path}
              fullWidth
              onClick={handleDrawerToggle}
              sx={{
                color: '#fff',
                justifyContent: 'flex-start',
                padding: '12px 20px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: isActive(item.path) ? 600 : 500,
                background: isActive(item.path) ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              {item.label}
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <StyledAppBar position="fixed" scrolled={scrolled}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1400px', width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
        <LogoBox component={Link} to="/" scrolled={scrolled}>
          <img src={logo} alt="Tazalin College" loading="eager" />
          {!isMobile && (
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, letterSpacing: '0.5px' }}>
              Tazalin College
            </Typography>
          )}
        </LogoBox>

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
              sx={{
                '&:hover': { background: 'rgba(255, 255, 255, 0.1)' },
              }}
            >
              <MenuIcon sx={{ fontSize: '32px' }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              PaperProps={{
                sx: { background: 'transparent' },
              }}
            >
              {drawer}
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {navItems.map((item) => (
              <NavButton
                key={item.path}
                component={Link}
                to={item.path}
                active={isActive(item.path) ? 1 : 0}
              >
                {item.label}
              </NavButton>
            ))}
          </Box>
        )}
      </Toolbar>
    </StyledAppBar>
  );
};

export default Navbar;