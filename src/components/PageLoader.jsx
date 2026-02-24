import React from 'react';
import { Box, Typography } from '@mui/material';
import './PageLoader.css';

const PageLoader = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0b1c8a 0%, #1a2380 100%)',
        zIndex: 9999,
      }}
    >
      <div className="loader"></div>
      <Typography variant="h6" sx={{ color: '#fff', fontWeight: 600, mt: 3 }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default PageLoader;
