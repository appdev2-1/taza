import React, { useState } from 'react';
import { Box, Grid, IconButton, Modal, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import barista1 from '../../assets/barista (1).jpg';
import DSC_6101 from '../../assets/DSC_6191.jpg';
import DSC_6207 from '../../assets/DSC_6207.jpg';
import DSC_6192 from '../../assets/DSC_6192.jpg';
import DSC_6217 from '../../assets/DSC_6217.jpg';
import caregiving from '../../assets/caregiving.jpg';
import mixology from '../../assets/mixology.jpg';
import DSC_6232 from '../../assets/DSC_6232.jpg';

const ImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover img': {
        transform: 'scale(1.1)',
        transition: 'transform 0.5s ease',
    },
}));

const ModalBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
}));

const images = [
    barista1,
    DSC_6101,
    DSC_6207,
    DSC_6192,
    DSC_6217,
    caregiving,
    mixology,
    DSC_6232
];

const Campus = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleOpen = (image) => {
        setSelectedImage(image);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImage('');
    };

    return (
        <Box sx={{ padding: 2 }}>
            <Typography variant="h4" align="center" sx={{ marginBottom: 2 }}>
                Githunguri Campus
            </Typography>
            <Grid container spacing={2}>
                {images.map((image, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ImageContainer onClick={() => handleOpen(image)}>
                            <img
                                src={image}
                                alt={`Campus ${index + 1}`}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease',
                                }}
                            />
                        </ImageContainer>
                    </Grid>
                ))}
            </Grid>
            <Modal open={open} onClose={handleClose}>
                <ModalBox>
                    <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 20, right: 20, color: '#fff' }}>
                        <CloseIcon />
                    </IconButton>
                    {selectedImage && (
                        <img
                            src={selectedImage}
                            alt="Selected Campus"
                            style={{
                                maxHeight: '90%',
                                maxWidth: '90%',
                                borderRadius: '10px',
                            }}
                        />
                    )}
                </ModalBox>
            </Modal>
        </Box>
    );
};

export default Campus;
