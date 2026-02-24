import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../../assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ background: 'linear-gradient(135deg, #0b1c8a 0%, #1a2380 100%)', color: '#fff', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
              <img src={logo} alt="Tazalin College" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
              <Typography variant="h6" sx={{ fontWeight: 700 }}>Tazalin College</Typography>
            </Box>
            <Typography variant="body2" sx={{ mb: 2, opacity: 0.9, lineHeight: 1.7 }}>
              Empowering students with quality education and practical skills for a successful future.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {[
                { icon: <FacebookIcon />, link: 'https://www.facebook.com/TazalinCollege' },
                { icon: <TwitterIcon />, link: 'https://twitter.com/TazalinCollege' },
                { icon: <InstagramIcon />, link: 'https://www.instagram.com/TazalinCollege' },
                { icon: <LinkedInIcon />, link: 'https://www.linkedin.com/in/TazalinCollege' },
              ].map((social, idx) => (
                <IconButton
                  key={idx}
                  component="a"
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#fff',
                    background: 'rgba(255, 255, 255, 0.1)',
                    '&:hover': { background: 'rgba(255, 255, 255, 0.2)', transform: 'translateY(-3px)' },
                    transition: 'all 0.3s ease',
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Quick Links</Typography>
            {['Home', 'Programs', 'About Us', 'Campus', 'Contact Us'].map((item, idx) => (
              <Typography
                key={idx}
                component={Link}
                to={`/${item.toLowerCase().replace(' ', '')}`}
                sx={{
                  display: 'block',
                  color: '#fff',
                  textDecoration: 'none',
                  mb: 1,
                  opacity: 0.8,
                  fontSize: '14px',
                  '&:hover': { opacity: 1, pl: 1 },
                  transition: 'all 0.3s ease',
                }}
              >
                {item}
              </Typography>
            ))}
          </Grid>

          {/* Programs */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Popular Programs</Typography>
            {['Barista Training', 'Nurse Assistant', 'Mixology', 'Hospitality'].map((program, idx) => (
              <Typography key={idx} sx={{ mb: 1, opacity: 0.8, fontSize: '14px' }}>
                {program}
              </Typography>
            ))}
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>Contact Us</Typography>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 1.5 }}>
              <LocationOnIcon sx={{ fontSize: 20, mt: 0.3 }} />
              <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>
                Githunguri Town, Rahab Towers 1st Floor
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
              <PhoneIcon sx={{ fontSize: 20 }} />
              <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>+254 732 041 103</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <EmailIcon sx={{ fontSize: 20 }} />
              <Typography sx={{ fontSize: '14px', opacity: 0.9 }}>tazalin.college@gmail.com</Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        {/* Bottom Bar */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 2 }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {currentYear} Tazalin College. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography
              component={Link}
              to="/terms"
              sx={{ fontSize: '14px', color: '#fff', textDecoration: 'none', opacity: 0.8, '&:hover': { opacity: 1 } }}
            >
              Terms of Service
            </Typography>
            <Typography
              component={Link}
              to="/privacy"
              sx={{ fontSize: '14px', color: '#fff', textDecoration: 'none', opacity: 0.8, '&:hover': { opacity: 1 } }}
            >
              Privacy Policy
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;