import React from 'react';
import { TextField, Button, Grid, Typography, Box, Container, Card, CardContent, IconButton, Snackbar, Alert } from '@mui/material';
import { Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationOnIcon, WhatsApp as WhatsAppIcon, AccessTime as AccessTimeIcon, Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

const contactMethods = [
    {
        icon: <PhoneIcon sx={{ fontSize: 40 }} />,
        title: 'Call Us',
        info: '+254 732 041 103',
        link: 'tel:+254732041103',
        color: '#667eea'
    },
    {
        icon: <WhatsAppIcon sx={{ fontSize: 40 }} />,
        title: 'WhatsApp',
        info: '+254 707 883 773',
        link: 'https://wa.me/254707883773',
        color: '#25D366'
    },
    {
        icon: <EmailIcon sx={{ fontSize: 40 }} />,
        title: 'Email Us',
        info: 'tazalin.college@gmail.com',
        link: 'mailto:tazalin.college@gmail.com',
        color: '#667eea'
    },
    {
        icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
        title: 'Visit Us',
        info: 'Githunguri Town, Rahab Towers 1st Floor',
        link: 'https://maps.google.com/?q=Rahab+Towers+Githunguri',
        color: '#667eea'
    },
];

const Contact = () => {
    const [result, setResult] = React.useState('');
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');
        const formData = new FormData(event.target);
        formData.append('access_key', '39585d4b-75be-4eef-8574-89f980365de0');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult('Message sent successfully!');
            setSnackbarSeverity('success');
            setOpenSnackbar(true);
            event.target.reset();
        } else {
            setResult('Failed to send message');
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    return (
        <Box sx={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)', py: 6 }}>
            <Container>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#0b1c8a' }}>
                        Get In Touch
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#666', maxWidth: '700px', mx: 'auto' }}>
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                    </Typography>
                </Box>

                {/* Contact Methods */}
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {contactMethods.map((method, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card
                                component="a"
                                href={method.link}
                                target={method.link.startsWith('http') ? '_blank' : '_self'}
                                rel="noopener noreferrer"
                                sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    height: '100%',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 30px rgba(102, 126, 234, 0.2)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        width: 70,
                                        height: 70,
                                        borderRadius: '50%',
                                        background: `${method.color}15`,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mx: 'auto',
                                        mb: 2,
                                        color: method.color,
                                    }}
                                >
                                    {method.icon}
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, color: '#0b1c8a' }}>
                                    {method.title}
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#666' }}>
                                    {method.info}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Form and Map Section */}
                <Grid container spacing={4}>
                    {/* Contact Form */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ p: 4, height: '100%' }}>
                            <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0b1c8a' }}>
                                Send Us a Message
                            </Typography>
                            <Box component="form" onSubmit={onSubmit}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    label="Your Name"
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    name="email"
                                    label="Your Email"
                                    type="email"
                                    required
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    name="phone"
                                    label="Phone Number"
                                    sx={{ mb: 2 }}
                                />
                                <TextField
                                    fullWidth
                                    name="message"
                                    label="Your Message"
                                    multiline
                                    rows={4}
                                    required
                                    sx={{ mb: 3 }}
                                />
                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    size="large"
                                    sx={{
                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                        py: 1.5,
                                        fontSize: '16px',
                                        fontWeight: 600,
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                                        },
                                    }}
                                >
                                    Send Message
                                </Button>
                            </Box>
                        </Card>
                    </Grid>

                    {/* Map and Info */}
                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: '100%', overflow: 'hidden' }}>
                            <Box sx={{ height: '400px' }}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.139916714725!2d36.777007!3d-1.0566016999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f2e28b658d3ed%3A0xa6c088c929fdbc0d!2sRahab%20Towers%2C%20Githunguri!5e0!3m2!1sen!2ske!4v1724324560590!5m2!1sen!2ske"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    title="Tazalin College Location"
                                />
                            </Box>
                            <CardContent sx={{ p: 3 }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <AccessTimeIcon sx={{ mr: 1, color: '#667eea' }} />
                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 600 }}>
                                            Office Hours
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            Mon - Fri: 8:00 AM - 5:00 PM
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            Sat: 9:00 AM - 1:00 PM
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                {/* Social Media */}
                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 3, color: '#0b1c8a' }}>
                        Follow Us
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center' }}>
                        {[
                            { link: 'https://www.facebook.com/TazalinCollege', icon: <FacebookIcon />, color: '#1877f2' },
                            { link: 'https://twitter.com/TazalinCollege', icon: <TwitterIcon />, color: '#1da1f2' },
                            { link: 'https://www.instagram.com/TazalinCollege', icon: <InstagramIcon />, color: '#e4405f' },
                            { link: 'https://www.linkedin.com/in/TazalinCollege', icon: <LinkedInIcon />, color: '#0077b5' },
                        ].map((social, index) => (
                            <IconButton
                                key={index}
                                component="a"
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    width: 50,
                                    height: 50,
                                    background: `${social.color}15`,
                                    color: social.color,
                                    '&:hover': {
                                        background: social.color,
                                        color: '#fff',
                                        transform: 'translateY(-4px)',
                                    },
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {social.icon}
                            </IconButton>
                        ))}
                    </Box>
                </Box>
            </Container>

            {/* Snackbar */}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={() => setOpenSnackbar(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{ width: '100%' }}>
                    {result}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;