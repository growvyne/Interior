import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SecurityIcon from '@mui/icons-material/Security';
import StyleIcon from '@mui/icons-material/Style';

const data = [
  {
    title: 'Reasonable Pricing',
    description:
      'Unlock your dream home: 1 BHK Retreats @1.5 Lakhs | 2 BHK Sanctuary @3.0 Lakhs | 3 BHK @4.5 Lakhs',
    icon: <HomeIcon sx={{ fontSize: 60 }} />,
  },
  {
    title: '10 Years Warranty',
    description:
      'We provide upto 10 years warranty on our interior design projects, guaranteeing quality, functionality, and lasting value.',
    icon: <SecurityIcon sx={{ fontSize: 60 }} />,
  },
  {
    title: 'Exclusive Catalog',
    description:
      'Discover our Exclusive Catalog with 300+ handpicked design materials and finishes to create your dream space.',
    icon: <StyleIcon sx={{ fontSize: 60 }} />,
  },
];

const ThreeSectionGrid = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        boxShadow: '0px 6px 40px rgba(0, 0, 0, 0.2)',
        borderRadius: '16px',
        mt: 6,
        py: 6,
      }}
    >
      <Grid container spacing={0}>
        {data.map((item, index) => (
          <Grid
            item
           size={{ xs: 12, md: 4 }}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              px: 4,
              py: 5,
              background: index === 1
                ? 'linear-gradient(135deg, rgb(255, 94, 98), rgb(255, 153, 102))'
                : 'transparent',
              color: index === 1 ? 'white' : 'inherit',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.02)',
              },
            }}
          >
            <Box>{item.icon}</Box>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: 'bold' }}>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, maxWidth: '90%' }}>
              {item.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
    
  );
};

export default ThreeSectionGrid;
