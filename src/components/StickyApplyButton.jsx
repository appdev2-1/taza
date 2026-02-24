import React, { useState, useEffect } from 'react';
import { Fab, Zoom, Tooltip } from '@mui/material';
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
      <Tooltip title="Apply Now" placement="left" arrow>
        <Fab
          component={Link}
          to="/apply"
          sx={{
            position: 'fixed',
            bottom: 90,
            right: 24,
            zIndex: 1000,
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: '#fff',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.4)',
            '&:hover': {
              transform: 'scale(1.1)',
              boxShadow: '0 8px 30px rgba(102, 126, 234, 0.6)',
            },
            transition: 'all 0.3s ease',
          }}
          aria-label="apply now"
        >
          <SchoolIcon />
        </Fab>
      </Tooltip>
    </Zoom>
  );
};

export default StickyApplyButton;