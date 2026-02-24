import React, { useState } from 'react';
import { Box, Grid, IconButton, Modal, Typography, Container, Chip, Card, CardContent } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import ComputerIcon from '@mui/icons-material/Computer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import barista1 from '../../assets/barista (1).jpg';
import DSC_6101 from '../../assets/DSC_6191.jpg';
import DSC_6207 from '../../assets/DSC_6207.jpg';
import DSC_6192 from '../../assets/DSC_6192.jpg';
import DSC_6217 from '../../assets/DSC_6217.jpg';
import caregiving from '../../assets/caregiving.jpg';
import mixology from '../../assets/mixology.jpg';
import DSC_6232 from '../../assets/DSC_6232.jpg';

const images = [
    { src: barista1, category: 'Training' },
    { src: DSC_6101, category: 'Facilities' },
    { src: DSC_6207, category: 'Campus' },
    { src: DSC_6192, category: 'Students' },
    { src: DSC_6217, category: 'Facilities' },
    { src: caregiving, category: 'Training' },
    { src: mixology, category: 'Training' },
    { src: DSC_6232, category: 'Campus' },
];

const facilities = [
    { icon: <LocalLibraryIcon />, title: 'Modern Classrooms', description: 'Well-equipped learning spaces' },
    { icon: <ComputerIcon />, title: 'Computer Labs', description: 'Latest technology and software' },
    { icon: <RestaurantIcon />, title: 'Training Kitchen', description: 'Professional culinary facilities' },
    { icon: <LocationOnIcon />, title: 'Prime Location', description: 'Githunguri Town, Rahab Towers' },
];

const Campus = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [filter, setFilter] = useState('All');

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage('');
    };

    const filteredImages = filter === 'All' ? images : images.filter(img => img.category === filter);
    const categories = ['All', 'Campus', 'Training', 'Facilities', 'Students'];

    return (
        <Box sx={{ background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)', py: 6 }}>
            <Container>
                {/* Header */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700, mb: 2, color: '#0b1c8a' }}>
                        Githunguri Campus
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#666', mb: 3 }}>
                        Explore our state-of-the-art facilities and vibrant campus life
                    </Typography>
                    
                    {/* Filter Chips */}
                    <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
                        {categories.map((cat) => (
                            <Chip
                                key={cat}
                                label={cat}
                                onClick={() => setFilter(cat)}
                                sx={{
                                    background: filter === cat ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e0e0e0',
                                    color: filter === cat ? '#fff' : '#666',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        background: filter === cat ? 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)' : '#d0d0d0',
                                    },
                                }}
                            />
                        ))}
                    </Box>
                </Box>

                {/* Gallery Grid */}
                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {filteredImages.map((image, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                onClick={() => handleOpen(image.src)}
                                sx={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '12px',
                                    cursor: 'pointer',
                                    height: '280px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 12px 30px rgba(102, 126, 234, 0.3)',
                                    },
                                    '&:hover img': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:hover .overlay': {
                                        opacity: 1,
                                    },
                                }}
                            >
                                <Box
                                    component="img"
                                    src={image.src}
                                    alt={`Campus ${index + 1}`}
                                    loading={index < 3 ? 'eager' : 'lazy'}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease',
                                    }}
                                />
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease',
                                    }}
                                >
                                    <ZoomInIcon sx={{ fontSize: 48, color: '#fff' }} />
                                </Box>
                                <Chip
                                    label={image.category}
                                    size="small"
                                    sx={{
                                        position: 'absolute',
                                        top: 12,
                                        right: 12,
                                        background: 'rgba(255,255,255,0.9)',
                                        fontWeight: 600,
                                    }}
                                />
                            </Box>
                        </Grid>
                    ))}
                </Grid>

                {/* Facilities Section */}
                <Box sx={{ mb: 6 }}>
                    <Typography variant="h4" align="center" sx={{ fontWeight: 700, mb: 4, color: '#0b1c8a' }}>
                        Campus Facilities
                    </Typography>
                    <Grid container spacing={3}>
                        {facilities.map((facility, index) => (
                            <Grid item xs={12} sm={6} md={3} key={index}>
                                <Card
                                    sx={{
                                        textAlign: 'center',
                                        p: 3,
                                        height: '100%',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-8px)',
                                            boxShadow: '0 12px 30px rgba(102, 126, 234, 0.2)',
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            mx: 'auto',
                                            mb: 2,
                                            color: '#fff',
                                        }}
                                    >
                                        {facility.icon}
                                    </Box>
                                    <CardContent sx={{ p: 0 }}>
                                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                            {facility.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            {facility.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>

                {/* Location Info */}
                <Box
                    sx={{
                        textAlign: 'center',
                        p: 5,
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: '#fff',
                    }}
                >
                    <LocationOnIcon sx={{ fontSize: 48, mb: 2 }} />
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                        Visit Our Campus
                    </Typography>
                    <Typography variant="body1" sx={{ opacity: 0.95 }}>
                        Githunguri Town, Rahab Towers 1st Floor, Kiambu County
                    </Typography>
                </Box>
            </Container>

            {/* Modal */}
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    }}
                    onClick={handleClose}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 20,
                            right: 20,
                            color: '#fff',
                            background: 'rgba(255,255,255,0.1)',
                            '&:hover': { background: 'rgba(255,255,255,0.2)' },
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    {selectedImage && (
                        <Box
                            component="img"
                            src={selectedImage}
                            alt="Selected Campus"
                            sx={{
                                maxHeight: '90%',
                                maxWidth: '90%',
                                borderRadius: '12px',
                                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                            }}
                            onClick={(e) => e.stopPropagation()}
                        />
                    )}
                </Box>
            </Modal>
        </Box>
    );
};

export default Campus;