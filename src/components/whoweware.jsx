import React from 'react';
import { Box, Grid, Typography,Container,Button } from '@mui/material';

const GridLayout48 = () => {
      const text = "Experience The Art Of Interior Design";
  return (
    <div style={{backgroundColor:"#F6F6F6",height:"100%",paddingTop:"20px"}}>

 <Container maxWidth="lg" sx={{ marginTop: 10,}}>
      <Grid container spacing={0}>
        <Grid item size={{ xs: 12, md: 4 }}>
        <Button variant="outlined" disabled style={{borderRadius:'15px',color:'#000',fontWeight:'900',borderColor:'#000',padding:'15px',cursor:'not-allowed'}}>
  Who We Are
</Button>
        </Grid>

        <Grid item size={{ xs: 12, md: 8 }}s>
         
            
  <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
      {text.split('').map((char, index) => {
        const isGreen =
          text.includes('The Art Of Interior') &&
          index >= text.indexOf('The Art Of Interior') &&
          index < text.indexOf('The Art Of Interior') + 'The Art Of Interior'.length;

        return (
          <Box
  key={index}
  component="span"
  sx={{
    fontSize: '75px',
    fontWeight: 'bold',
    color: isGreen ? '#068A52' : '#000',
    display: 'inline-block',
    transition: 'transform 0.3s ease, background-color 0.3s ease, top 0.5s ease',
    position: 'relative',
    top: '-30px',
    animation: 'slideDown 0.6s ease forwards',
    animationDelay: `${index * 0.05}s`,
    '&:hover': {
      transform: 'scale(1.4)',
    //   backgroundColor: 'rgba(6, 138, 82, 0.15)',
      borderRadius: '50%',
      padding: '8px',
    },
    '@keyframes slideDown': {
      from: { top: '-30px', opacity: 0 },
      to: { top: '0px', opacity: 1 },
    },
  }}
>
  {char === ' ' ? '\u00A0' : char}
</Box>

        );
      })}
    </Box>
            <br />
                      <div style={{maxWidth:'500px',marginTop:'15px'}}>
                        <p style={{fontSize:'15px',color:'grey',fontWeight:'500',lineHeight:'1.6'}}>
                          At Guins Interior, we believe that every space has a story to tell. Our team of expert designers is dedicated to transforming your vision into reality, creating interiors that are not only aesthetically pleasing but also functional and comfortable.
                      </p>
                      <br />
                      <br />

                      </div>
        </Grid>
      </Grid>
    </Container>
    </div>
   
  );
};

export default GridLayout48;
