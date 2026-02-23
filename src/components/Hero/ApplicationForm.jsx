import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
    Grid,
    Select,
    MenuItem,
    InputLabel,
    FormControl,
    IconButton,
    Slide,
    Grow,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useInView } from 'react-intersection-observer';

const ApplicationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        coverLetter: '',
        file: null,
    });

    const { ref, inView } = useInView({
        threshold: 0.1,
    });

    // Debugging: Check if inView is working
    console.log('Is the back arrow in view?', inView);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, file: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <Container
            sx={{
                marginTop: 4,
                padding: 3,
                backgroundColor: '#f5f5f5',
                borderRadius: '10px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                maxWidth: '600px',
                '@media (max-width: 600px)': {
                    padding: 2,
                },
            }}
        >
            {/* Slide Animated Back Arrow */}
            <Slide direction="right" in={inView} timeout={600}>
                <IconButton
                    ref={ref}
                    sx={{
                        mb: 2,
                        color: '#333',
                        '&:hover': {
                            color: '#000',
                            transform: 'scale(1.1)',
                            transition: 'all 0.3s ease',
                        },
                    }}
                    onClick={() => window.history.back()}
                >
                    <ArrowBackIcon fontSize="large" />
                </IconButton>
            </Slide>

            {/* Animated Title */}
            <Grow in timeout={1000}>
                <Typography variant="h4" align="center" gutterBottom sx={{ color: '#333' }}>
                    Apply Now
                </Typography>
            </Grow>

            {/* Form */}
            <Grow in timeout={1200}>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Full Name"
                                name="name"
                                variant="outlined"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#0056b3',
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                variant="outlined"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#0056b3',
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Phone Number"
                                name="phone"
                                variant="outlined"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                    },
                                    '& .MuiOutlinedInput-root': {
                                        '&:hover fieldset': {
                                            borderColor: '#0056b3',
                                        },
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormControl fullWidth variant="outlined" required>
                                <InputLabel>Program of Study</InputLabel>
                                <Select
                                    name="program"
                                    value={formData.program}
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: '#fff',
                                        borderRadius: '4px',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                        },
                                    }}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="barista">Barista</MenuItem>
                                    <MenuItem value="nurse_assistant">Nurse Assistant</MenuItem>
                                    <MenuItem value="beauty">Beauty</MenuItem>
                                    <MenuItem value="mixology">Mixology</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Cover Letter"
                                name="coverLetter"
                                variant="outlined"
                                multiline
                                rows={4}
                                value={formData.coverLetter}
                                onChange={handleChange}
                                required
                                sx={{
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
                                    },
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                accept=".pdf, .doc, .docx"
                                style={{ display: 'block', margin: '10px 0' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                fullWidth
                                sx={{
                                    padding: '10px 0',
                                    fontSize: '16px',
                                    backgroundColor: '#0056b3',
                                    '&:hover': {
                                        backgroundColor: '#003f7f',
                                        transform: 'scale(1.05)',
                                        transition: 'all 0.3s ease',
                                    },
                                }}
                            >
                                Submit Application
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grow>
        </Container>
    );
};

export default ApplicationForm;
