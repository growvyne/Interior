import React, { useState, useRef } from "react";
import { Box, Grid, Typography, Divider, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { keyframes } from "@mui/system";

const moveArrow = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(5px); }
  100% { transform: translateX(0); }
`;

export default function AboutSection() {

 const [lensStyle, setLensStyle] = useState({ display: "none" });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = imgRef.current.getBoundingClientRect();
    const { left, top, width, height } = rect;
    const x = e.clientX - left;
    const y = e.clientY - top;

    const lensSize = 120; // circle size
    const zoom = 2; // zoom factor

    if (x < 0 || y < 0 || x > width || y > height) {
      setLensStyle({ display: "none" });
      return;
    }

    setLensStyle({
      display: "block",
      left: `${x - lensSize / 2}px`,
      top: `${y - lensSize / 2}px`,
      backgroundPosition: `-${x * zoom - lensSize / 2}px -${
        y * zoom - lensSize / 2
      }px`,
      backgroundSize: `${width * zoom}px ${height * zoom}px`,
    });
  };


  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #000000, #1a1a1a)",
        py: 8,
        px: { xs: 2, md: 6 },
      }}
    >
      <Grid container spacing={4}>
        {/* Left Section (6) */}
        <Grid item size={{ xs: 12, md: 6 }} sx={{ padding: "80px" }}>
          {/* Disabled Button */}
          <Button
            variant="outlined"
            disabled
            sx={{
              backgroundColor: "transparent",
              borderRadius: "20px",
              color: "#fff",
              cursor: "not-allowed",
              border: "1px solid #fff",
              mb: 2,
              "&.Mui-disabled": {
                color: "#fff",
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Started in 2000
          </Button>

          {/* Side Heading */}
          <Typography
            variant="h5"
            fontWeight="bold"
            gutterBottom
            sx={{ color: "#fff", fontSize: "60px" }}
          >
            Where Spaces Inspire, and{" "}
            <span style={{ color: "#CAA05C" }}>Design Comes <br />Alive</span>
          </Typography>

          <Divider sx={{ bgcolor: "#fff", width: "60px", mb: 3 }} />

          {/* Bullet Points in 2:2 Grid */}
          <Grid container spacing={2} mb={3}>
            <Grid item xs={6}>
              <Typography sx={{ color: "#ccc" }}>✔ Latest technologies</Typography>
              <Typography sx={{ color: "#ccc" }}>✔ 5 Years Warranty</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography sx={{ color: "#ccc" }}>✔ High-Quality Designs</Typography>
              <Typography sx={{ color: "#ccc" }}>✔ Residential Design</Typography>
            </Grid>
          </Grid>

          {/* Description */}
          <Typography variant="body1" sx={{ color: "#ccc", mb: 3, lineHeight: 1.8 }}>
            Whether it’s your home, office, or a commercial project, we <br />
            are always dedicated to bringing your vision to life. Our <br />
            numbers speak better than words:
          </Typography>

          {/* Animated More About Us Button */}
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: "bold",
              borderRadius: "50px",
              padding: "15px 35px",
              textTransform: "none",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "#CAA05C",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(202, 160, 92, 0.5)",
                "& .MuiSvgIcon-root": {
                  animation: `${moveArrow} 0.6s ease-in-out infinite`,
                },
              },
            }}
          >
            More About Us
          </Button>
        </Grid>

        {/* Right Section (6) - Image */}
        <Grid item size={{ xs: 12, md: 6 }}>
           <Box
      sx={{
        position: "relative",
        display: "inline-block",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setLensStyle({ display: "none" })}
    >
      {/* Main Image */}
      <Box
        component="img"
        ref={imgRef}
        src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner01.jpg"
        alt="About Us"
        sx={{
          width: "100%",
          borderRadius: "16px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
        }}
      />

      {/* Lens Circle */}
      <Box
        sx={{
          position: "absolute",
          pointerEvents: "none",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "2px solid white",
          backgroundImage:
            "url('https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner01.jpg')",
          backgroundRepeat: "no-repeat",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
          ...lensStyle,
        }}
      />
    </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
