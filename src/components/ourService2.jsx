import React, { useState } from "react";
import { Box, Grid, Typography, List, ListItemButton, ListItemText } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CountUp from "react-countup";

const services = [
  {
    id: 1,
    title: "Residential Interior Design",
    description: "Create warm, inviting spaces tailored to your lifestyle.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-6-1024x739.jpg",
  },
  {
    id: 2,
    title: "Outdoor & Landscape Design",
    description: "Transform gardens and outdoor areas into relaxing havens.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-4-1024x739.jpg",
  },
  {
    id: 3,
    title: "Interior Design Consultation",
    description: "Get expert guidance to bring your vision to life.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-3-1024x739.jpg",
  },
  {
    id: 4,
    title: "Commercial Interior Design",
    description: "Design spaces that inspire productivity and reflect your brand.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-5-1024x739.jpg",
  },
  {
    id: 5,
    title: "Renovation and Remodeling",
    description: "Modernize and refresh while keeping the charm intact.",
    img: "https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/service-2-1024x739.jpg",
  },
];

 const stats = [
    {
      label: "Years experience",
      value: 2013,
      description: "Improving homes with expert craftsmanship for years",
      suffix: "",
    },
    {
      label: "Projects completed",
      value: 190,
      description: "Over 250 successful projects delivered with quality and care",
      suffix: "+",
    },
    {
      label: "Skilled Tradespeople",
      value: 260,
      description: "Our team of 30 experts ensures top-quality results",
      suffix: "+",
    },
    {
      label: "Client satisfaction",
      value: 328,
      description: "All of our clients are satisfied with our work and service",
      suffix: "+",
    },
  ];

export default function ServiceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const [transform, setTransform] = useState("translate(0px, 0px)");

  const handleMouseMove = (e) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left - width / 2; // Mouse X relative to center
    const y = e.clientY - top - height / 2; // Mouse Y relative to center

    // Adjust sensitivity
    const moveX = (x / width) * 20; // 20px max left/right
    const moveY = (y / height) * 20; // 20px max up/down

    setTransform(`translate(${moveX}px, ${moveY}px) rotate(${moveX / 10}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("translate(0px, 0px) rotate(0deg)");
  };

  return (

    <>
    <Box sx={{ py: 6, px: 4, padding: 15, marginTop: "-60px" }}>
      <Grid container spacing={4}>
        
        {/* Left Side - Image with overlay text */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <Box
            sx={{
              position: "relative",
              width: "90%",
              height: "500px",
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
            }}
          >
            <Box
              component="img"
              src={services[activeIndex].img}
              alt="Service Preview"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "opacity 0.5s ease",
              }}
            />

            {/* Overlay Text with Title + Description */}
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                backgroundColor: "rgba(0,0,0,0.5)",
                padding: "12px 18px",
                borderRadius: "8px",
                color: "#fff",
                animation: "fadeIn 0.5s ease",
                maxWidth: "80%",
                "@keyframes fadeIn": {
                  from: { opacity: 0, transform: "translateY(10px)" },
                  to: { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                {services[activeIndex].title}
              </Typography>
              <Typography variant="body2">
                {services[activeIndex].description}
              </Typography>
            </Box>
          </Box>
        </Grid>

        {/* Right Side - Headings */}
        <Grid item size={{ xs: 12, md: 6 }}>
          <List disablePadding>
            {services.map((service, index) => (
              <ListItemButton
                key={service.id}
                onMouseEnter={() => setActiveIndex(index)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  transition: "color 0.3s ease",
                  "&:hover": {
                    color: "#f39c12",
                  },
                  "&:hover .arrowIcon": {
                    transform: "translateX(6px)",
                  },
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: "45px",
                    fontWeight: "700",
                    fontFamily: "cursive",
                  }}
                  primary={`${service.id}. ${service.title}`}
                />
                <ArrowForwardIosIcon
                  className="arrowIcon"
                  sx={{
                    fontSize: "1.2rem",
                    transition: "transform 0.3s ease",
                  }}
                />
              </ListItemButton>
            ))}
          </List>
        </Grid>
      </Grid>
    </Box>

     <Box
      sx={{
        background: "linear-gradient(to right, #000, #333)",
        py: 8,
        color: "#fff",
        
      }}
    >
      <Grid container spacing={8} justifyContent="center">
        {stats.map((stat, index) => (
          <Grid key={index} item xs={12} sm={6} md={3}>
            <Typography variant="h3" fontWeight="bold">
              <CountUp end={stat.value} duration={3} suffix={stat.suffix} />
            </Typography>
            <Typography variant="h5" sx={{ mt: 1, fontWeight: "600" }}>
              {stat.label}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 1, opacity: 0.8, maxWidth: 250, mx: "auto" }}
            >
              {stat.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
     <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      mt={4}
      sx={{
        overflow: "hidden",
        "& img": {
          transition: "transform 0.1s ease-out", // smooth following
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="https://demo2.themelexus.com/antra/wp-content/uploads/2025/06/h1-banner02.png"
        alt="Wave Effect"
        style={{
          maxWidth: "100%",
          borderRadius: "12px",
          transform: transform,
        }}
      />
    </Box>
    </Box>
    </>
    
  );
}
