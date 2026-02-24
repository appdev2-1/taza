import React, { useState } from 'react';
import { Grid, Button, Container, Box, Typography, Card, CardContent, CardMedia, Chip, Divider, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SchoolIcon from '@mui/icons-material/School';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import barista5 from '../../assets/barista (5).jpg';
import caregiving from '../../assets/caregiving.jpg';
import mixology from '../../assets/mixology.jpg';
import DSC_6240 from '../../assets/DSC_6240.jpg';

const programsData = [
  {
    title: "Barista Training",
    image: barista5,
    description: "Learn the art of coffee making and customer service.",
    fee: "20,500",
    duration: "1 month",
    examBody: "NiTA",
    popular: true,
  },
  {
    title: "Certified Nurse Assistant",
    image: caregiving,
    description: "Gain the skills needed to assist in patient care.",
    fee: "17,500",
    duration: "4 months",
    examBody: "NiTA",
    popular: true,
  },
  {
    title: "Mixology",
    image: mixology,
    description: "Master the craft of cocktail mixing and presentation.",
    fee: "20,500",
    duration: "1 month",
    examBody: "NiTA",
  },
  {
    title: "Certificate in Plumbing & Pipe Fitting",
    image: barista5,
    description: "Learn plumbing and pipe fitting techniques for various settings.",
    fee: "11,000",
    duration: "3 terms",
    examBody: "NITA",
  },
  {
    title: "Hospitality Management",
    image: DSC_6240,
    description: "Develop skills in hospitality and customer relations.",
    fee: "20,500",
    duration: "4 terms",
    examBody: "NITA",
  },
  {
    title: "Front Office",
    image: DSC_6240,
    description: "Training in front office operations and management.",
    fee: "19,000",
    duration: "4 terms",
    examBody: "NITA",
  },
  {
    title: "German Language",
    image: caregiving,
    description: "Learn German language skills for communication.",
    fee: "20,000",
    duration: "1 term",
    examBody: "Internal",
  },
  {
    title: "Baking and Pastry",
    image: mixology,
    description: "Hands-on training in baking and pastry creation.",
    fee: "28,000",
    duration: "1 term",
    examBody: "Internal",
  },
  {
    title: "Computer Packages",
    image: barista5,
    description: "Basic to advanced computer applications.",
    fee: "4,500",
    duration: "1 month",
    examBody: "Internal",
  },
];

const Programs = () => {
  return (
    <Box sx={{ py: 6, background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)' }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#0b1c8a' }}>
            Our Programs
          </Typography>
          <Typography variant="h6" sx={{ color: '#666', maxWidth: '700px', mx: 'auto' }}>
            Choose from our industry-leading programs designed to launch your career
          </Typography>
        </Box>

        {/* Program Cards */}
        <Grid container spacing={3} sx={{ mb: 6 }}>
          {programsData.map((program, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'visible',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-12px)',
                    boxShadow: '0 12px 40px rgba(102, 126, 234, 0.2)',
                  },
                }}
              >
                {program.popular && (
                  <Chip
                    label="Popular"
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      zIndex: 1,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: '#fff',
                      fontWeight: 600,
                    }}
                  />
                )}
                <CardMedia
                  component="img"
                  height="200"
                  image={program.image}
                  alt={program.title}
                  loading={index < 3 ? 'eager' : 'lazy'}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1.5, color: '#0b1c8a' }}>
                    {program.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                    {program.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AccessTimeIcon sx={{ fontSize: 18, color: '#667eea' }} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {program.duration}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <AttachMoneyIcon sx={{ fontSize: 18, color: '#667eea' }} />
                      <Typography variant="body2" sx={{ color: '#666', fontWeight: 600 }}>
                        KES {program.fee}/-
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SchoolIcon sx={{ fontSize: 18, color: '#667eea' }} />
                      <Typography variant="body2" sx={{ color: '#666' }}>
                        {program.examBody}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    component={Link}
                    to="/apply"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 2,
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      },
                    }}
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Admissions Info */}
        <Box sx={{ mb: 6 }}>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Admissions Process
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                <CheckCircleIcon sx={{ color: '#667eea', mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                    Intake Ongoing
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Applications are currently being accepted for all programs. Don't miss this opportunity!
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                <LocationOnIcon sx={{ color: '#667eea', mt: 0.5 }} />
                <Box>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                    Visit Our Campus
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Githunguri Main Campus, Rahab Towers 1st Floor
                  </Typography>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Fee Payment & Financial Aid
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                We offer flexible payment plans and financial aid options to help you achieve your educational goals.
              </Typography>
              <Button
                component={Link}
                to="/contact"
                variant="outlined"
                sx={{ borderColor: '#667eea', color: '#667eea' }}
              >
                Contact Us for Details
              </Button>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                Accommodation
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body2" sx={{ color: '#666' }}>
                Information on on-campus and off-campus housing options available. Contact our admissions office for detailed information on costs and policies.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        {/* CTA Section */}
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
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
            Join hundreds of students who have transformed their careers with us
          </Typography>
          <Button
            component={Link}
            to="/apply"
            variant="contained"
            size="large"
            sx={{
              background: '#fff',
              color: '#667eea',
              px: 5,
              py: 1.5,
              fontSize: '18px',
              fontWeight: 600,
              '&:hover': {
                background: '#f8f9fa',
              },
            }}
          >
            Apply Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Programs;