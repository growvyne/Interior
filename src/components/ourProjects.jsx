import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Padding } from "@mui/icons-material";

// Projects data
const projects = [
  {
    title: "Serene Space Studio",
    location: "Germany",
    year: 2025,
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-6-1024x739.jpg",
    category: "RESIDENTIAL",
  },
  {
    title: "Urban Zen Apartment",
    location: "Berlin, Germany",
    year: 2025,
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-4-1024x739.jpg",
    category: "RESIDENTIAL",
  },
  {
    title: "Art Deco Revival",
    location: "Berlin, Germany",
    year: 2025,
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-3-1024x739.jpg",
    category: "SINGLE HOME",
  },
  {
    title: "Art Deco Revival",
    location: "Berlin, Germany",
    year: 2025,
    image: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-2-1024x739.jpg",
    category: "SINGLE HOME",
  },
];

export default function OurProjects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,          // enable auto sliding
    autoplaySpeed: 3000,     // slide interval: 3 seconds
    pauseOnHover: false,     // keep autoplay on hover
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Box sx={{ py: 6, backgroundColor: "#fafafa",marginTop: 10 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: 700, mb: 2, "& span": { color: "#c6a25c" } }}
      >
        Creative Projects That <span>Define</span> Our Style
      </Typography>
      <Typography
        variant="body1"
        align="center"
        sx={{ maxWidth: 700, mx: "auto", color: "grey.600", mb: 5 }}
      >
        Our portfolio showcases a diverse range of projects, from beautifully
        crafted residential spaces to functional and stylish commercial interiors.
      </Typography>

     <div style={{padding:'30px'}}>
         <Slider {...settings} style={{ outline: "none" ,}}>
        {projects.map((proj, index) => (
          <Box key={index} sx={{ px: 1, outline: "none" ,}}>
            <Box
              sx={{
                borderRadius: 3,
                overflow: "hidden",
                bgcolor: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                transition: "transform 0.6s ease",
                position: "relative",
                cursor: "pointer",
                "&:hover": { transform: "scale(1.03)" },
              }}
            >
              <Box
                sx={{ position: "relative", overflow: "hidden", height: 280 }}
              >
                <Box
                  component="img"
                  src={proj.image}
                  alt={proj.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 3s ease",
                    animation: "zoomEffect 8s ease-in-out infinite",
                  }}
                />
                <Typography
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    backgroundColor: "rgba(0,0,0,0.6)",
                    color: "#fff",
                    fontSize: 12,
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    textTransform: "uppercase",
                  }}
                >
                  {proj.category}
                </Typography>
              </Box>

              <Box sx={{ p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {proj.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {proj.location}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {proj.year}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
     </div>

      <style>{`
        @keyframes zoomEffect {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}</style>
    </Box>
  );
}
