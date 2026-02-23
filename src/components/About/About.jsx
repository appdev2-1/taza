import React from 'react';
import './About.css';
import { Box, Grid, Typography, Card, CardMedia } from '@mui/material';
import faculty1 from '../../assets/DSC_6226.jpg';
import faculty2 from '../../assets/DSC_6227.jpg';
import faculty3 from '../../assets/DSC_6228.jpg';
import schoolImg from '../../assets/DSC_6310.jpg';

const facultyImages = [faculty1, faculty2, faculty3];

const About = () => {

    return (
        <Box sx={{ padding: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
            <Box sx={{ flex: 1, position: 'relative' }}>
                <img src="/src/assets/about.jpg" alt="About College" className='about-img' style={{ width: '100%', borderRadius: '10px' }} />
            </Box>
            <Box sx={{ flex: 2, paddingLeft: { md: 4 }, paddingTop: { xs: 2, md: 0 } }}>
                <Typography variant="h3" gutterBottom>ABOUT COLLEGE</Typography>
                <Typography variant="h5" gutterBottom>Nurturing Tomorrow's Leaders Today</Typography>
                <Typography variant="body1" paragraph>
                    Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.
                </Typography>
                <Typography variant="body1" paragraph>
                    With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.
                </Typography>
                <Typography variant="body1" paragraph>
                    Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers the perfect pathway to achieve your goals and unlock your full potential in shaping the future of education.
                </Typography>

                {/* Faculty Photos */}
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h5">Meet Our Faculty</Typography>
                    <Grid container spacing={2} sx={{ marginTop: 2 }}>
                        {facultyImages.map((url, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Card>
                                    <CardMedia
                                        component="img"
                                        image={url}
                                        alt={`Faculty Member ${index + 1}`}
                                        sx={{ height: 200 }}
                                    />
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* School Photo */}
                <Box sx={{ marginTop: 4 }}>
                    <Typography variant="h5">Our Campus</Typography>
                    <Card>
                        <CardMedia
                            component="img"
                            image={schoolImg}
                            alt="School Campus"
                            sx={{ height: 300 }}
                        />
                    </Card>
                </Box>
            </Box>
        </Box>
    );
}

export default About;
