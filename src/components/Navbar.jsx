import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = ['Home', 'About', 'Services', 'Gallery', 'FAQ’s', 'Blogs', 'Contact'];

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          top: 0,
          backgroundColor: '#fff',
          color: '#333',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          px: 2,
          zIndex: 1200,
          height:isMobile? '60px':'105px',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Left: Logo */}
          <Box sx={{ flex: '1 1 auto' }}>
           <img src="/public/assets/glogonew.webp" alt="logo"  style={{height:isMobile?'60px':'100px',width:isMobile?'60px':'100px'}}/>
          </Box>

          {/* Center: Nav menu (Desktop only) */}
          {!isMobile && (
            <Box
              sx={{
                display: 'flex',
                flex: '2 1 auto',
                justifyContent: 'center',
                gap: 3,
                flexWrap: 'wrap',
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{
                    color: '#333',
                    fontSize: '16px',
                    fontWeight: 500,
                    textTransform: 'none',
                    fontWeight: 700,
                    textTransform: 'none',
                    '&:hover': { color: 'green' },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}

          {/* Right: Connect Button or Mobile Menu */}
          <Box sx={{ flex: '1 1 auto', display: 'flex', justifyContent: 'flex-end' }}>
            {!isMobile ? (
              <Button
                variant="outlined"
                sx={{
                  border: '2px solid #068A52',
                  color: '#068A52',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  boxShadow: '0 0 5px #068A52, 0 0 15px #068A52',
                  '&:hover': {
                    backgroundColor: '#068A52',
                    color: '#fff',
                    boxShadow: '0 0 10px #068A52, 0 0 25px #068A52',
                  },
                }}
              >
                Connect Us
              </Button>
            ) : (
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
