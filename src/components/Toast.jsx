import React from 'react';
import { Snackbar, Alert, Slide } from '@mui/material';

const SlideTransition = (props) => {
  return <Slide {...props} direction="down" />;
};

const Toast = ({ open, message, severity = 'success', onClose, duration = 4000 }) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      TransitionComponent={SlideTransition}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      sx={{ mt: 8 }}
    >
      <Alert
        onClose={onClose}
        severity={severity}
        variant="filled"
        sx={{
          width: '100%',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
          '& .MuiAlert-icon': {
            fontSize: '24px',
          },
        }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
