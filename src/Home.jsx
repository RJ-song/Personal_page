import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards';
import NavBar from './components/navBar';
import HomePageCard from './components/WebCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from './custom/theme'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import Tooltip from '@mui/material/Tooltip';

function Home() {
  

  return (
    <>
      <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <header>
      <div
        className='p-5 text-center bg-color'
        style={{
          backgroundColor: theme.palette.primary.light,
          height: 300,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>RJ's Personal Page</h1>
              <h4 className='mb-3'>RJ's page</h4>
            </div>
          </div>
        </div>
      </div>
    </header>
      <div className="container pt-3">
      <h2 className="" style={{ borderBottom: '2px solid #000' }}>Introduction 
      <img src="https://cdn-icons-png.flaticon.com/128/7334/7334113.png" alt="icon" 
            style={{
                width:'38px',
                height:'38px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
      </h2>
      </div>

      <div className="container pt-5">
      <h2 className="" style={{ borderBottom: '2px solid #000' }}>Skills  
      <img src="https://cdn-icons-png.flaticon.com/128/2444/2444286.png" alt="icon" 
            style={{
                width:'38px',
                height:'38px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
      </h2>

      <h4 className="">Currently Learning 
      <img src="https://cdn-icons-png.flaticon.com/128/2702/2702069.png" alt="icon" 
            style={{
                width:'30px',
                height:'30px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
      </h4>

      </div>

      
      <div
        className='bg-color'
        style={{
          backgroundColor: theme.palette.primary.light,
          height: 300,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container pt-3">
      <h2 className="text-white" style={{ borderBottom: '2px solid #fff' }}>Contact Me 
      <img src="https://cdn-icons-png.flaticon.com/128/4151/4151471.png" alt="icon" 
            style={{
                width:'35px',
                height:'35px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
      </h2>
      <h5 className="text-white">
      <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="icon" 
            style={{
                width:'20px',
                height:'20px',
                verticalAlign:'middle',
                marginRight:'5px'
             }}
            ></img>
      : a0970220839@gmail.com</h5>
      
      <h5 className="text-white">
      <img src="https://cdn-icons-png.flaticon.com/128/597/597177.png" alt="icon" 
            style={{
                width:'20px',
                height:'20px',
                verticalAlign:'middle',
                marginRight:'5px'
             }}
            ></img>
      : 0970220839</h5>

      <Box sx={{ flexGrow: 0, display: 'flex', gap: '10px' }}>
          <Tooltip title="GitHub">
              <IconButton sx={{ p: 0 }}>
                <a href="https://github.com/RJ-song" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <img src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../releases/preview/2012/png/iconmonstr-github-1.png&r=0&g=0&b=0" alt="icon" style={{ width: '30px', height: '30px' }} />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="FaceBook">
              <IconButton sx={{ p: 0 }}>
                <a href="https://www.facebook.com/profile.php?id=100009635312124" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <img src="https://cdn-icons-png.flaticon.com/512/2175/2175193.png" alt="icon" style={{ width: '30px', height: '30px' }} />
                </a>
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton sx={{ p: 0 }}>
                <a href="https://www.instagram.com/rj_song618/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  <img src="https://cdn-icons-png.flaticon.com/128/3670/3670274.png" alt="icon" style={{ width: '30px', height: '30px' }} />
                </a>
              </IconButton>
            </Tooltip>
            
          </Box>
      
      </div>
      </div>
      
      </ThemeProvider>
      
    </>
  )
}

export default Home
