import React from 'react';
import { Box, Container, Typography, Card, CardContent, Avatar, Rating, Grid, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';
import user4 from '../../assets/user4.jpg';

const testimonialsData = [
    {
        name: "Emily Williams",
        program: "Barista Training",
        year: "2023",
        message: "Choosing to pursue my training at Tazalin College was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to excellence have truly exceeded my expectations.",
        image: user1,
        rating: 5
    },
    {
        name: "William Jackson",
        program: "Hospitality Management",
        year: "2023",
        message: "The faculty is incredibly supportive and knowledgeable. I've gained invaluable skills that will help me in my future career. Highly recommend!",
        image: user2,
        rating: 5
    },
    {
        name: "Emily Johnson",
        program: "Nurse Assistant",
        year: "2024",
        message: "Tazalin College has provided me with the resources and opportunities to grow personally and professionally. The hands-on training was exceptional!",
        image: user3,
        rating: 5
    },
    {
        name: "Robert Smith",
        program: "Mixology",
        year: "2024",
        message: "The diverse programs offered at Tazalin College cater to everyone's interests and career goals. It's a great place to learn and develop new skills.",
        image: user4,
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <Box sx={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)', py: 6 }}>
            <Container>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#0b1c8a' }}>
                        Student Success Stories
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#666', maxWidth: '700px', mx: 'auto' }}>
                        Hear from our graduates about their transformative experiences at Tazalin College
                    </Typography>
                </Box>

                {/* Testimonials Grid */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    {testimonialsData.map((testimonial, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card
                                sx={{
                                    height: '100%',
                                    position: 'relative',
                                    p: 3,
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 40px rgba(102, 126, 234, 0.2)',
                                    },
                                }}
                            >
                                <FormatQuoteIcon
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        right: 16,
                                        fontSize: 48,
                                        color: '#667eea',
                                        opacity: 0.2,
                                    }}
                                />
                                <CardContent sx={{ p: 0 }}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        <Avatar
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            sx={{
                                                width: 70,
                                                height: 70,
                                                mr: 2,
                                                border: '3px solid #667eea',
                                            }}
                                        />
                                        <Box>
                                            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0b1c8a' }}>
                                                {testimonial.name}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: '#667eea', fontWeight: 600 }}>
                                                {testimonial.program}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: '#999' }}>
                                                Class of {testimonial.year}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Rating value={testimonial.rating} readOnly sx={{ mb: 2 }} />
                                    <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8, fontStyle: 'italic' }}>
                                        "{testimonial.message}"
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Stats Section */}
                <Box
                    sx={{
                        textAlign: 'center',
                        p: 5,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: '#fff',
                        mb: 6,
                    }}
                >
                    <Grid container spacing={4}>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                500+
                            </Typography>
                            <Typography variant="body1">Happy Students</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                95%
                            </Typography>
                            <Typography variant="body1">Success Rate</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                15+
                            </Typography>
                            <Typography variant="body1">Years Experience</Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography variant="h3" sx={{ fontWeight: 700, mb: 1 }}>
                                4.9
                            </Typography>
                            <Typography variant="body1">Average Rating</Typography>
                        </Grid>
                    </Grid>
                </Box>

                {/* CTA Section */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#0b1c8a' }}>
                        Ready to Write Your Success Story?
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#666', mb: 3, maxWidth: '600px', mx: 'auto' }}>
                        Join hundreds of successful graduates who have transformed their careers with Tazalin College
                    </Typography>
                    <Link to="/apply" style={{ textDecoration: 'none' }}>
                        <Box
                            component="button"
                            sx={{
                                px: 5,
                                py: 2,
                                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                fontSize: '18px',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 8px 24px rgba(102, 126, 234, 0.4)',
                                },
                            }}
                        >
                            Apply Now
                        </Box>
                    </Link>
                </Box>
            </Container>
        </Box>
    );
};

export default Testimonials;