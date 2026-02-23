import React, { useEffect, useState } from 'react';
import { Grid, Typography, Container, Box, Button, CircularProgress } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ApplicationForm from './ApplicationForm';
import { storage } from '/src/components/firebase.js';
import { getDownloadURL, ref } from 'firebase/storage';
import AutoBot from './AutoBot';
const HeroSection = ({ onApplyClick }) => {
    const [campusImages, setCampusImages] = useState([]);
    const [loadingImages, setLoadingImages] = useState(true);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const imageFiles = ['DSC_6194.jpg', 'DSC_6270.jpg', 'DSC_6310.jpg', 'home.jpg'];

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const urls = await Promise.all(
                    imageFiles.map(fileName => {
                        const imageRef = ref(storage, `images/${fileName}`);
                        console.log(`Fetching image from: ${imageRef.fullPath}`);
                        return getDownloadURL(imageRef);
                    })
                );
                setCampusImages(urls);
            } catch (error) {
                console.error("Error fetching campus images: ", error.message);
            } finally {
                setLoadingImages(false);
            }
        };

        fetchImages().then(r =>{} );
    }, []);

    if (loadingImages) {
        return <Typography variant="h6" align="center">Loading...</Typography>;
    }

    return (
        <Box sx={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
            <Slider {...settings}>
                {campusImages.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
                            alt={`Campus Life ${index + 1}`}
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
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: 'bold' }}>
                    Welcome to Tazalin College
                </Typography>
                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                    Your future starts here. Join us and explore your potential.
                </Typography>
                <Button variant="contained" color="primary" size="large" onClick={onApplyClick}>
                    Apply Now
                </Button>
                <AutoBot />
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
                '&:hover': {
                    backgroundColor: '#ddd',
                },
            }}
        >
            <img src={imageUrl} alt={title} width="100%" loading="lazy"/>
            <Typography variant="h6">{title}</Typography>
            <Typography>{details}</Typography>
        </Box>
    </Grid>
);

const Programs = () => {
    const [programImages, setProgramImages] = useState([]);
    const [loadingPrograms, setLoadingPrograms] = useState(true);

    useEffect(() => {
        const fetchProgramImages = async () => {
            const programFiles = ['barista (1).jpg', 'caregiving.jpg', 'DSC_6242.jpg', 'mixology.jpg','plumbing.jpg','DSC_6240.jpg'];
            try {
                const urls = await Promise.all(
                    programFiles.map(fileName => {
                        const programRef = ref(storage, `images/${fileName}`);
                        console.log(`Fetching program image from: ${programRef.fullPath}`);
                        return getDownloadURL(programRef);
                    })
                );
                setProgramImages(urls);
            } catch (error) {
                console.error("Error fetching program images: ", error.message);
                setError(error.message); // Optionally add error handling in the state
            } finally {
                setLoadingPrograms(false);
            }
        };

        fetchProgramImages().then(r => {});
    }, []);


    if (loadingPrograms) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <CircularProgress />
            </Box>
        );
    }

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
                            <Box sx={{ display: 'flex', justifyContent: 'space-around', color: '#EBECFE' }}>
                                <a href="https://www.facebook.com/TazalinCollege" target="_blank" rel="noopener noreferrer">
                                    <FacebookIcon />
                                </a>
                                <a href="https://twitter.com/TazalinCollege" target="_blank" rel="noopener noreferrer">
                                    <TwitterIcon />
                                </a>
                                <a href="https://www.instagram.com/TazalinCollege" target="_blank" rel="noopener noreferrer">
                                    <InstagramIcon />
                                </a>
                                <a href="https://www.linkedin.com/in/TazalinCollege" target="_blank" rel="noopener noreferrer">
                                    <LinkedInIcon />
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
