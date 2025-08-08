import React from "react";
import { Box, Grid, Button, Typography } from "@mui/material";

export default function OurServicesSection() {
    
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        // background: "linear-gradient(135deg, #000000, #1a1a1a)",
        // color: "#fff",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Section */}
        <Grid item size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
          <Button
            variant="oulined"
            disabled
            sx={{
              backgroundColor: "transparent",
              color: "#fff",
              fontWeight: "bold",
              borderRadius: "30px",
              px: 4,
              py: 1.5,
              fontSize: "13px",
              "&.Mui-disabled": {
                backgroundColor: "transparent",
                color: "#000",
                border: "1px solid #000",
              },
            }}
          >
            Our Services
          </Button>
        </Grid>

        {/* Right Section */}
        <Grid item size={{ xs: 12, md: 8 }}>
          
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mt: 1,
              mb: 2,
              marginTop:'50px',
              lineHeight: 1.4,
              fontSize:'60px'
            }}
          >
            Explore Our <span style={{color:'#CDA564'}}> comprehensive  <br />Interior Design</span> Services
          </Typography>
          <br />
          <Typography variant="body1" sx={{ color: "grey", maxWidth: "700px" }}>
            We specialize in transforming visions into reality. Explore our
            portfolio of innovative architectural and interior design projects
            crafted with precision.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
