import React, { useState } from 'react';
import { Grid, Typography, Container, Box, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ApplicationForm from './ApplicationForm';
import TypingAnimation from '../TypingAnimation';
import ScrollIndicator from '../ScrollIndicator';
import DSC_6194 from '../../assets/DSC_6194.jpg';
import DSC_6270 from '../../assets/DSC_6270.jpg';
import DSC_6310 from '../../assets/DSC_6310.jpg';
import homeImg from '../../assets/home.jpg';
import barista1 from '../../assets/barista (1).jpg';
import caregiving from '../../assets/caregiving.jpg';
import DSC_6242 from '../../assets/DSC_6242.jpg';
import mixology from '../../assets/mixology.jpg';
import DSC_6240 from '../../assets/DSC_6240.jpg';

const campusImages = [DSC_6194, DSC_6270, DSC_6310, homeImg];
const programImages = [barista1, caregiving, DSC_6242, mixology, DSC_6240, DSC_6240];

const HeroSection = ({ onApplyClick }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (
        <Box sx={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
            <Slider {...settings}>
                {campusImages.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Campus Life ${index + 1}`}
                            loading="lazy"
                            style={{ width: '100%', height: '80vh', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </Slider>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <TypingAnimation 
                    texts={[
                        'Welcome to Tazalin College',
                        'Your Future Starts Here',
                        'Explore Your Potential'
                    ]} 
                />
                <Typography variant="h6" sx={{ marginBottom: 2, mt: 2 }}>
                    Join us and transform your career with industry-leading programs.
                </Typography>
                <Button 
                    variant="contained" 
                    size="large" 
                    onClick={onApplyClick}
                    sx={{
                        background: '#FF6B35',
                        '&:hover': { background: '#e55a2a' },
                        px: 4,
                        py: 1.5,
                        fontSize: '18px',
                        fontWeight: 600,
                    }}
                >
                    Apply Now
                </Button>
                <ScrollIndicator />
            </Box>
        </Box>
    );
};

const ProgramCard = ({ imageUrl, title, details }) => (
    <Grid item xs={12} md={4}>
        <Box
            sx={{
                padding: 2,
                backgroundColor: '#f4f4f4',
                textAlign: 'center',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                '&:hover': {
                    backgroundColor: '#fff',
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                },
            }}
        >
            <img src={imageUrl} alt={title} width="100%" loading="lazy" style={{ borderRadius: '8px' }}/>
            <Typography variant="h6" sx={{ mt: 2, fontWeight: 'bold' }}>{title}</Typography>
            <Box component="ul" sx={{ textAlign: 'left', pl: 2 }}>
                {details}
            </Box>
        </Box>
    </Grid>
);

const Programs = () => {
    return (
        <Container sx={{ padding: '32px 0' }}>
            <Typography variant="h4" align="center" gutterBottom>
                Our Programs
            </Typography>
            <Grid container spacing={3}>
                {programImages.map((imageUrl, index) => {
                    return (
                        <ProgramCard
                            key={index}
                            imageUrl={imageUrl}
                            title={['Barista', 'Nurse Assistant', 'HairDressing & Beauty', 'Mixology', 'Certificate in Plumbing & Pipe Fitting', 'Hospitality Management'][index]}
                            details={
                                <ul>
                                    {[
                                        ['Introduction to Coffee', 'Espresso Techniques', 'Latte Art', 'Advanced Brewing Methods', 'Customer Service'],
                                        ['Patient Care Fundamentals', 'Vital Signs Monitoring', 'Basic Healthcare Procedures', 'Professional Communication', 'Emergency Response'],
                                        ['Skin Care', 'Makeup Application', 'Hair Care and Styling', 'Nail Care', 'Waxing and Hair Removal'],
                                        ['Cocktail Fundamentals', 'Classic Cocktails', 'Creative Mixology', 'Presentation and Garnishing', 'Advanced Techniques'],
                                        ['Plumbing Basics', 'Pipe Fitting Techniques', 'Safety Protocols', 'Water Systems', 'Fixture Installations'],
                                        ['Reception Management', 'Customer Communication', 'Reservation Systems', 'Basic Accounting', 'Office Protocols']
                                    ][index].map((detail, i) => <li key={i}>{detail}</li>)}
                                </ul>
                            }
                        />
                    );
                })}
            </Grid>
        </Container>
    );
};

const HomePage = () => {
    const [showForm, setShowForm] = useState(false);

    return (
        <>
            <HeroSection onApplyClick={() => setShowForm(true)} />
            {showForm && <ApplicationForm />}
            <Programs />
            <Box sx={{ padding: '24px 0', backgroundColor: '#030e73', color: '#ffffff' }}>
                <Container>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">About Us</Typography>
                            <Typography>Learn more about our mission and values.</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Contact Us</Typography>
                            <Typography>Email: tazalin.college@gmail.com</Typography>
                            <Typography>Phone: +254732041103</Typography>
                            <Typography>Whatsapp: +254707883773</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Typography variant="h6">Follow Us</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 1 }}>
                                <a href="https://www.facebook.com/TazalinCollege" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s' }}>
                                    <FacebookIcon sx={{ fontSize: 32, color: '#EBECFE', '&:hover': { color: '#1877f2', transform: 'scale(1.2)' } }} />
                                </a>
                                <a href="https://twitter.com/TazalinCollege" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s' }}>
                                    <TwitterIcon sx={{ fontSize: 32, color: '#EBECFE', '&:hover': { color: '#1da1f2', transform: 'scale(1.2)' } }} />
                                </a>
                                <a href="https://www.instagram.com/TazalinCollege" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s' }}>
                                    <InstagramIcon sx={{ fontSize: 32, color: '#EBECFE', '&:hover': { color: '#e4405f', transform: 'scale(1.2)' } }} />
                                </a>
                                <a href="https://www.linkedin.com/in/TazalinCollege" target="_blank" rel="noopener noreferrer" style={{ transition: 'all 0.3s' }}>
                                    <LinkedInIcon sx={{ fontSize: 32, color: '#EBECFE', '&:hover': { color: '#0077b5', transform: 'scale(1.2)' } }} />
                                </a>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default HomePage;
