import React from 'react';
import { Box, Grid, Typography, Container, Card, CardContent, Avatar, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import faculty1 from '../../assets/DSC_6226.jpg';
import faculty2 from '../../assets/DSC_6227.jpg';
import faculty3 from '../../assets/DSC_6228.jpg';
import schoolImg from '../../assets/DSC_6310.jpg';
import aboutImg from '../../assets/DSC_6194.jpg';

const stats = [
  { icon: <SchoolIcon />, value: '500+', label: 'Students Enrolled' },
  { icon: <EmojiEventsIcon />, value: '15+', label: 'Years Experience' },
  { icon: <GroupsIcon />, value: '20+', label: 'Expert Instructors' },
  { icon: <WorkspacePremiumIcon />, value: '95%', label: 'Success Rate' },
];

const values = [
  { title: 'Excellence', description: 'We strive for the highest standards in education and training.' },
  { title: 'Innovation', description: 'Cutting-edge curriculum designed for modern industry needs.' },
  { title: 'Integrity', description: 'Honest, transparent, and ethical in all our practices.' },
  { title: 'Community', description: 'Building a supportive network of learners and professionals.' },
];

const About = () => {
  return (
    <Box sx={{ background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          backgroundImage: `linear-gradient(rgba(11, 28, 138, 0.8), rgba(11, 28, 138, 0.8)), url(${aboutImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          textAlign: 'center',
        }}
      >
        <Container>
          <Chip label="About Us" sx={{ mb: 2, background: 'rgba(255,255,255,0.2)', color: '#fff', fontWeight: 600 }} />
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 }}>
            Tazalin College
          </Typography>
          <Typography variant="h5" sx={{ opacity: 0.95, maxWidth: '700px', mx: 'auto' }}>
            Nurturing Tomorrow's Leaders Today
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Card
                sx={{
                  textAlign: 'center',
                  p: 3,
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: '#fff',
                  transition: 'transform 0.3s ease',
                  '&:hover': { transform: 'translateY(-8px)' },
                }}
              >
                <Avatar sx={{ width: 60, height: 60, mx: 'auto', mb: 2, background: 'rgba(255,255,255,0.2)' }}>
                  {stat.icon}
                </Avatar>
                <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  {stat.value}
                </Typography>
                <Typography variant="body2">{stat.label}</Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Mission & Vision */}
      <Box sx={{ background: '#fff', py: 6 }}>
        <Container>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#0b1c8a' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8, color: '#666' }}>
                To empower students with quality education and practical skills through innovative programs, hands-on learning, and personalized mentorship that prepares them for successful careers in their chosen fields.
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 700, mb: 3, color: '#0b1c8a' }}>
                Our Vision
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#666' }}>
                To be the leading technical and vocational training institution in Kenya, recognized for excellence in education, innovation, and producing industry-ready professionals who make meaningful contributions to society.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={schoolImg}
                alt="Campus"
                sx={{
                  width: '100%',
                  borderRadius: '16px',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Core Values */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 5, color: '#0b1c8a' }}>
          Our Core Values
        </Typography>
        <Grid container spacing={3}>
          {values.map((value, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  height: '100%',
                  p: 3,
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.2)',
                  },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: '#667eea' }}>
                  {value.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666' }}>
                  {value.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Faculty Section */}
      <Box sx={{ background: '#fff', py: 6 }}>
        <Container>
          <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 2, color: '#0b1c8a' }}>
            Meet Our Faculty
          </Typography>
          <Typography variant="body1" align="center" sx={{ mb: 5, color: '#666', maxWidth: '600px', mx: 'auto' }}>
            Our experienced instructors are industry professionals dedicated to your success
          </Typography>
          <Grid container spacing={4}>
            {[faculty1, faculty2, faculty3].map((img, index) => (
              <Grid item xs={12} sm={4} key={index}>
                <Card
                  sx={{
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'translateY(-8px)' },
                  }}
                >
                  <Box
                    component="img"
                    src={img}
                    alt={`Faculty ${index + 1}`}
                    loading="lazy"
                    sx={{ width: '100%', height: 300, objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Instructor {index + 1}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666' }}>
                      Expert Educator
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Container sx={{ py: 6 }}>
        <Box
          sx={{
            textAlign: 'center',
            p: 6,
            borderRadius: '16px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
            Ready to Join Us?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Start your journey towards a successful career today
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/apply" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  px: 4,
                  py: 1.5,
                  background: '#fff',
                  color: '#667eea',
                  borderRadius: '8px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': { background: '#f8f9fa' },
                }}
              >
                Apply Now
              </Box>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <Box
                sx={{
                  px: 4,
                  py: 1.5,
                  border: '2px solid #fff',
                  color: '#fff',
                  borderRadius: '8px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  '&:hover': { background: 'rgba(255,255,255,0.1)' },
                }}
              >
                Contact Us
              </Box>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;