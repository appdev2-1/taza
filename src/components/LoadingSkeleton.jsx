import React from 'react';
import { Box, Skeleton, Grid } from '@mui/material';

export const CardSkeleton = () => (
  <Grid item xs={12} md={4}>
    <Box sx={{ p: 2 }}>
      <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2, mb: 2 }} />
      <Skeleton variant="text" height={30} width="80%" />
      <Skeleton variant="text" height={20} width="60%" />
      <Skeleton variant="text" height={20} width="90%" />
    </Box>
  </Grid>
);

export const HeroSkeleton = () => (
  <Box sx={{ height: '80vh', background: '#f0f0f0' }}>
    <Skeleton variant="rectangular" height="100%" animation="wave" />
  </Box>
);

export const ProgramsSkeleton = () => (
  <Grid container spacing={3}>
    {[1, 2, 3, 4, 5, 6].map((i) => (
      <CardSkeleton key={i} />
    ))}
  </Grid>
);
