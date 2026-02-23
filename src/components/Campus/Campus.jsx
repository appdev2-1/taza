import React, { useEffect, useState } from 'react';
import { Box, Grid, IconButton, Modal, Typography, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import { storage } from '/src/components/firebase.js';
import { getDownloadURL, ref } from 'firebase/storage';

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

const imageNames = [
    'barista (1).jpg',
    'DSC_6101.jpg',
    'DSC_6207.jpg',
    'DSC_6192.jpg',
    'DSC_6217.jpg',
    'caregiving.jpg',
    'mixology.jpg',
    'DSC_6232.jpg'
];

const Campus = () => {
    const [open, setOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const urls = await Promise.all(
                    imageNames.map(async (imageName) => {
                        const imageRef = ref(storage, `images/${imageName}`);
                        try {
                            return await getDownloadURL(imageRef);
                        } catch (error) {
                            console.error(`Error fetching ${imageName}:`, error);
                            return null;
                        }
                    })
                );
                const validUrls = urls.filter((url) => url !== null); // Filter out any null URLs from errors
                setImages(validUrls);
            } catch (error) {
                console.error("Error fetching images from Firebase:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

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
            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
                    <CircularProgress />
                </Box>
            ) : (
                <Grid container spacing={2}>
                    {images.length > 0 ? (
                        images.map((image, index) => (
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
                        ))
                    ) : (
                        <Typography variant="body1" align="center" sx={{ marginTop: 4, width: '100%' }}>
                            No images available
                        </Typography>
                    )}
                </Grid>
            )}
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
