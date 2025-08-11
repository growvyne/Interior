import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  IconButton,
  Link,
  TextField,
  Button,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const navItems = [
  "Home",
  "About",
  "Services",
  "Gallery",
  "FAQ’s",
  "Blogs",
  "Contact",
];
const serviceLinks = ["Consulting", "Design", "Development", "Support"];

const socialLinks = {
  facebook: "https://facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://instagram.com",
};

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setEmail("");
  };

  return (
    <Box
      component="footer"
      sx={{
        p: 0,
        mt: 8,
        background: "linear-gradient(135deg, #111 70%, #232526 100%)",
        color: "#fff",
        borderTop: "1px solid #444",
      }}
    >
      <Container maxWidth="xl">
        {/* Responsive Grid with extra gap on desktop */}
        <Grid
          container
          spacing={{ xs: 3, md: 8 }}
          sx={{
            py: { xs: 4, sm: 6 },
          }}
        >
          {/* Logo & Company Info */}
          <Grid item xs={12} sm={6} md={3} sx={{ px: { xs: 0, md: 3 } }}>
            <Box sx={{ mb: 2 }}>
                <a href="/">
              <img
                src="https://i.ibb.co/21SfCHK1/glogonew.webp" 
                alt="logo"
                style={{ height: 150, marginBottom: 8 }}
              />
              </a>
            </Box>
            <Typography variant="body1" sx={{ fontFamily: "fantasy" }}>
              We transform your vision into <br />
              <span style={{ color: "#CAA05C" }}>beautifully crafted</span> spaces.
            </Typography>
          </Grid>

          {/* Pages + Services */}
          <Grid item xs={12} sm={6} md={3} sx={{ px: { xs: 0, md: 3 } }}>
            <Box sx={{ display: "flex", gap: 5 }}>
              {/* Pages */}
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, mb: 1, textDecoration: "underline" }}
                >
                  Pages
                </Typography>
                {navItems.map((item) => (
                  <Link
                    key={item}
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{
                      display: "block",
                      fontWeight: 500,
                      fontSize: 18,
                      lineHeight: 1.8,
                      letterSpacing: 0.5,
                      opacity: 0.9,
                      "&:hover": { color: "#CDA564", opacity: 1 },
                    }}
                  >
                    {item}
                  </Link>
                ))}
              </Box>
&nbsp;
              {/* Services */}
              <Box>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, mb: 1, textDecoration: "underline" }}
                >
                  Services
                </Typography>
                {serviceLinks.map((service) => (
                  <Link
                    key={service}
                    href="#"
                    underline="hover"
                    color="inherit"
                    sx={{
                      display: "block",
                      fontWeight: 500,
                      fontSize: 18,
                      lineHeight: 1.8,
                      letterSpacing: 0.5,
                      opacity: 0.9,
                      "&:hover": { color: "#CDA564", opacity: 1 },
                    }}
                  >
                    {service}
                  </Link>
                ))}
              </Box>
            </Box>
          </Grid>
         

          {/* Contact Info */}
          <Grid item xs={12} sm={6} md={3} sx={{ px: { xs: 0, md: 3 } }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 1, textDecoration: "underline" }}
            >
              Contact
            </Typography>
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography variant="body1" color="grey.300">
                Street Number 372, Action Area I,IIF,<br /> Newtown, Kolkata, Chakpachuria,<br /> West Bengal 700160
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <PhoneIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography variant="body1" color="grey.300">
                +1 (555) 123-4567
              </Typography>
            </Box>
            <br />
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: 22 }} />
              <Typography variant="body1" color="grey.300">
                info@example.com
              </Typography>
            </Box>
          </Grid>

          {/* Newsletter */}
          <Grid item xs={12} sm={6} md={3} sx={{ px: { xs: 0, md: 3 } }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, mb: 1, textDecoration: "underline" }}
            >
              Subscribe
            </Typography>
            <form onSubmit={handleSubscribe}>
              <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  InputProps={{
                    style: { color: "#fff", background: "rgba(255,255,255,0.05)" },
                  }}
                  sx={{
                    flex: 1,
                    input: { color: "#fff" },
                    "& fieldset": { borderColor: "rgba(255,255,255,0.2)" },
                  }}
                />
                <Button
  type="submit"
  variant="contained"
  sx={{
    bgcolor: "primary.main",
    fontWeight: 600,
    textTransform: "none",
    display: "flex",
    alignItems: "center",
    gap: 1,
    transition: "all 0.3s ease",
    "&:hover": {
      bgcolor: "#0f9d58", // hover color
      pl: 2,              // small left padding for arrow movement space
    },
    "& .arrow": {
      transition: "transform 0.3s ease",
    },
    "&:hover .arrow": {
      transform: "translateX(5px)", // arrow moves to right on hover
    },
  }}
>
  Submit
  <span className="arrow">➜</span>
</Button>

              </Box>
              {submitted && (
                <Typography sx={{ fontSize: 13, color: "success.light", mt: 1 }}>
                  Thank you for subscribing!
                </Typography>
              )}
            </form>
            {/* Social icons */}
            <Box sx={{ mt: 2 }}>
              <IconButton
                component="a"
                href={socialLinks.facebook}
                target="_blank"
                sx={{
                  color: "#fff",
                  background: "rgba(255,255,255,0.05)",
                  m: 0.5,
                  "&:hover": {
                    color: "#1877F3",
                    background: "rgba(24, 119, 243, 0.08)",
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.twitter}
                target="_blank"
                sx={{
                  color: "#fff",
                  background: "rgba(255,255,255,0.05)",
                  m: 0.5,
                  "&:hover": {
                    color: "#1DA1F2",
                    background: "rgba(29, 161, 242, 0.08)",
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                component="a"
                href={socialLinks.instagram}
                target="_blank"
                sx={{
                  color: "#fff",
                  background: "rgba(255,255,255,0.05)",
                  m: 0.5,
                  "&:hover": {
                    color: "#E4405F",
                    background: "rgba(228, 64, 95, 0.08)",
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Typography
          variant="body2"
          color="grey.500"
          align="center"
          sx={{ pt: 3, pb: 2, fontSize: 13 }}
        >
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
