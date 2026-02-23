import React from 'react';
import { Box, keyframes } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const ScrollIndicator = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Box
      onClick={scrollToContent}
      sx={{
        position: 'absolute',
        bottom: 30,
        left: '50%',
        transform: 'translateX(-50%)',
        cursor: 'pointer',
        animation: `${bounce} 2s infinite`,
        zIndex: 10,
      }}
    >
      <KeyboardArrowDownIcon sx={{ fontSize: 48, color: '#fff' }} />
    </Box>
  );
};

export default ScrollIndicator;
