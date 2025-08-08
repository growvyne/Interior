import React from "react";
import { Box, Grid, Card, CardContent, Typography, Divider } from "@mui/material";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import StyleIcon from "@mui/icons-material/Style";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";

const services = [
  {
    title: "Architectural Design",
    icon: <ArchitectureIcon fontSize="large" sx={{ color: "#4CAF50" }} />,
    description:
      "Dream it, we’ll design it! From big picture layouts to the tiniest details, our architectural magic brings your ideas to life with creativity and precision!",
  },
  {
    title: "Interior Design & Planning",
    icon: <StyleIcon fontSize="large" sx={{ color: "#4CAF50" }} />,
    description:
      "Make your space shine! Our team creates inviting, beautiful interiors that reflect your style and make every room a favorite place to be.",
  },
  {
    title: "Consulting Services",
    icon: <TipsAndUpdatesIcon fontSize="large" sx={{ color: "#4CAF50" }} />,
    description:
      "Consider us your design whisperers! We provide expert advice to help your project sparkle with creativity, efficiency, and spot-on solutions.",
  },
  {
    title: "Project Management",
    icon: <AssignmentTurnedInIcon fontSize="large" sx={{ color: "#4CAF50" }} />,
    description:
      "We handle the hustle! From start to finish, we keep your project on track, on budget, and stress-free – so you can sit back and watch the magic happen.",
  },
];

export default function ServicesSection() {
  return (
    <div style={{ padding: '20px' }}>
      <Box sx={{ flexGrow: 1, py: 4, px: 4 ,marginTop:'30px'}}>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {services.map((service, index) => (
          <Grid item size={{ xs: 12, md: 3 }} key={index}>
            <Card
              sx={{
                height: "100%",
                backgroundColor: "#fff",
                color: "#000",
                boxShadow: 4,
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 10,
                },
              }}
            >
              <CardContent>
                {/* Title + Icon */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mb: 1,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold", color: "#000",padding:'10px'    }}>
                    {service.title}
                  </Typography>
                  {service.icon}
                </Box>
                <br />
                &nbsp;

                {/* Divider */}
                <Divider sx={{ backgroundColor: "#ddd", mb: 1 }} />
                  <br />
                {/* Description */}
                <Typography variant="body2" sx={{ color: "#555" }}>
                  {service.description}
                </Typography>
                <br />
                <br />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}
