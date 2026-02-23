import React from 'react';
import { TextField, Button, Grid, Typography, Box, Slide, useTheme } from '@mui/material';
import { Phone as PhoneIcon, Email as EmailIcon, LocationOn as LocationOnIcon, Facebook as FacebookIcon, Twitter as TwitterIcon, Instagram as InstagramIcon, LinkedIn as LinkedInIcon } from '@mui/icons-material';

const Contact = () => {
    const theme = useTheme();
    const [result, setResult] = React.useState("");
    const [showForm, setShowForm] = React.useState(false);

    React.useEffect(() => {
        setShowForm(true);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "39585d4b-75be-4eef-8574-89f980365de0");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <Box sx={{ padding: { xs: 2, md: 4 }, textAlign: 'center', backgroundColor: theme.palette.background.default }}>
            <Typography variant="h4" gutterBottom color="primary">Contact Us</Typography>

            {/* Phone and WhatsApp Icons */}
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                    <a href="tel:+254732041103" style={{ color: theme.palette.primary.main }}>
                        <PhoneIcon fontSize="large" sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }} />
                    </a>
                </Grid>
                <Grid item>
                    <a href="https://wa.me/+254707883773" style={{ color: theme.palette.primary.main }}>
                        <PhoneIcon fontSize="large" sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.2)' } }} />
                    </a>
                </Grid>
            </Grid>

            {/* Slide-in Form */}
            <Slide direction="up" in={showForm} mountOnEnter unmountOnExit>
                <Box component="form" onSubmit={onSubmit} sx={{ maxWidth: 600, margin: 'auto', mt: 3, padding: 3, boxShadow: 4, borderRadius: 2, backgroundColor: '#ffffff' }}>
                    <TextField fullWidth name="name" label="Your Name" required sx={{ mb: 2 }} />
                    <TextField fullWidth name="email" label="Your Email" type="email" required sx={{ mb: 2 }} />
                    <TextField fullWidth name="message" label="Your Message" multiline rows={4} required sx={{ mb: 2 }} />
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ transition: 'background-color 0.3s', '&:hover': { backgroundColor: theme.palette.primary.dark } }}>
                        Send Message
                    </Button>
                </Box>
            </Slide>

            {/* Submission Result */}
            <Typography variant="body1" sx={{ mt: 3, color: theme.palette.success.main }}>{result}</Typography>

            {/* Contact Information */}
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h6" color="primary">Contact Information</Typography>
                <Typography><PhoneIcon /> +254 732041103</Typography>
                <Typography><PhoneIcon /> +254 707883773</Typography>
                <Typography><EmailIcon /> tazalin.college@gmail.com</Typography>
                <Typography><LocationOnIcon /> GITHUNGURI TOWN, Rihab Towers 1st floor, NAIROBI, KENYA</Typography>
            </Box>

            {/* Social Media Icons with Hover Scale Effect */}
            <Grid container spacing={2} justifyContent="center" sx={{ mt: 3 }}>
                {[
                    { link: "https://www.facebook.com/TazalinCollege", icon: <FacebookIcon /> },
                    { link: "https://twitter.com/TazalinCollege", icon: <TwitterIcon /> },
                    { link: "https://www.instagram.com/TazalinCollege", icon: <InstagramIcon /> },
                    { link: "https://www.linkedin.com/in/TazalinCollege", icon: <LinkedInIcon /> }
                ].map((item, index) => (
                    <Grid item key={index}>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: theme.palette.primary.main }}>
                            <Box component="span" sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.3)' } }}>
                                {item.icon}
                            </Box>
                        </a>
                    </Grid>
                ))}
            </Grid>

            {/* Google Map Iframe */}
            <Box sx={{ mt: 4, boxShadow: 2, borderRadius: 2, overflow: 'hidden' }}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.139916714725!2d36.777007!3d-1.0566016999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f2e28b658d3ed%3A0xa6c088c929fdbc0d!2sRahab%20Towers%2C%20Githunguri!5e0!3m2!1sen!2ske!4v1724324560590!5m2!1sen!2ske"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </Box>
        </Box>
    );
};

export default Contact;
