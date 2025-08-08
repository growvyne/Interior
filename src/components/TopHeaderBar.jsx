import React from 'react';
import { Box, Typography, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Facebook, Instagram, LinkedIn } from '@mui/icons-material';

const TopHeaderBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor: '#000',
        color: '#fff',
        px: 2,
        py: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? 1 : 0,
        }}
      >
        {/* Left: Contact Info */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: isMobile ? 0.5 : 2,
          }}
        >
          <Typography variant="body2">📞 +91 9876543210</Typography>
          <Typography variant="body2">✉️ info@interiordesign.com</Typography>
        </Box>

        {/* Right: Social Icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: isMobile ? 'flex-start' : 'flex-end',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <IconButton size="small" sx={{ color: '#fff' }}>
            <Facebook fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#fff' }}>
            <Instagram fontSize="small" />
          </IconButton>
          <IconButton size="small" sx={{ color: '#fff' }}>
            <LinkedIn fontSize="small" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TopHeaderBar;
