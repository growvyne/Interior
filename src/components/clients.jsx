import React from "react";
import { Box, Grid, Typography, Avatar, Rating, IconButton } from "@mui/material";
import Slider from "react-slick";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const clients = [
  {
    id: 1,
    name: "John Doe",
    location: "New York, USA",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback: "The service was outstanding! Highly recommend to everyone.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah Smith",
    location: "London, UK",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback: "Amazing experience. The team was very professional and helpful.",
    rating: 4
  },
  {
    id: 3,
    name: "Raj Kumar",
    location: "Delhi, India",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    feedback: "A seamless process from start to finish. Thank you!",
    rating: 5
  }
];

// Custom Prev Arrow
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: "-50px",
        transform: "translateY(-50%)",
        background: "#000",
        boxShadow: 5,
        zIndex: 1,
        color:"#fff",
        "&:hover": {
          background: "#333"
        }
      }}
    >
      <ArrowBackIos fontSize="medium" color="#fff"  />
    </IconButton>
  );
}

// Custom Next Arrow
function NextArrow(props) {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        right: "-50px",
        transform: "translateY(-50%)",
        background: "#000",
        boxShadow: 5,
        zIndex: 1,
        color:"#fff",
        "&:hover": {
          background: "#333"
        }
      }}
    >
      <ArrowForwardIos fontSize="medium" color="#fff" />
    </IconButton>
  );
}

export default function OurClientsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <Box sx={{ maxWidth: "900px", margin: "auto", py: 6 }}>
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        mb={4}
        sx={{ fontSize:"45px" }}
      >
        Our Clients
      </Typography>
<br />
      <Slider {...settings}>
        {clients.map((client) => (
          <Grid container spacing={4} key={client.id} alignItems="center">
            {/* Left Side - Photo + Name + Location */}
            <Grid item xs={12} md={6} textAlign="center">
              <Avatar
                src={client.photo}
                alt={client.name}
                sx={{ width: 150, height: 150, margin: "auto", mb: 2 }}
              />
              <Typography variant="h6" fontWeight="bold" alignItems='center'>
                {client.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {client.location}
              </Typography>
            </Grid>

            {/* Right Side - Feedback + Rating */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="body1"
                sx={{
                  fontStyle: "italic",
                  textAlign:'center',
                  mb: 2
                }}
              >
                "{client.feedback}"
              </Typography>


            <Box display="flex" justifyContent="center" alignItems="center">
  <Rating value={client.rating} precision={0.5} readOnly />
</Box>
            </Grid>
          </Grid>
        ))}
      </Slider>
    </Box>
  );
}
