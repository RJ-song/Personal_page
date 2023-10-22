import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
const pages = ['Collections', 'Notes'];

function NavBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleNav = (page) => {
    if (page === 'Collections') {
      navigate('/Portfolio')
    } else if (page === 'Notes') {
      navigate('/Notes')
    }
  };

  return (
    
      <AppBar position="static" sx={{backgroundColor: '#991AEE'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <IconButton sx={{ p: 0 }} className='pe-2'>
          <img
            src='https://cdn-icons-png.flaticon.com/128/6420/6420767.png'
            alt="icon"
            style={{
              width: '32px',
              height: '32px',
            }}
          />
      </IconButton>  
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            RJ's Personal Page
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
          
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleNav(page)}
                sx={{ my: 2, color: location.pathname === `/${page === 'Collections' ? 'Portfolio' : 'Notes'}` ? 'yellow' : 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* <Box sx={{  flexGrow: 0, display: 'flex', gap: '10px' }}>
          <Tooltip title="GitHub">
              <IconButton sx={{ p: 0 }}>
                <a href="https://github.com/RJ-song" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0" alt="icon" style={{ width: '24px', height: '24px' }} />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="FaceBook">
              <IconButton sx={{ p: 0 }}>
                <a href="https://www.facebook.com/profile.php?id=100009635312124" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="icon" style={{ width: '24px', height: '24px' }} />
                </a>
              </IconButton>
            </Tooltip>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
    
  );
}

export default NavBar;

