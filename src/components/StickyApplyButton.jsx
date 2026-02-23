import React, { useState, useEffect } from 'react';
import { Fab, Zoom } from '@mui/material';
import { Link } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';

const StickyApplyButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <Zoom in={visible}>
      <Fab
        component={Link}
        to="/apply"
        color="primary"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: 'linear-gradient(45deg, #212EA0 30%, #0b1c8a 90%)',
          '&:hover': {
            transform: 'scale(1.1)',
            boxShadow: '0 8px 24px rgba(33, 46, 160, 0.4)',
          },
        }}
        aria-label="apply now"
      >
        <SchoolIcon />
      </Fab>
    </Zoom>
  );
};

export default StickyApplyButton;
