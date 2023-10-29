import Box from '@mui/material/Box';
import Link from "@mui/material/Link";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import theme from '../custom/theme';
import { ThemeProvider } from '@mui/material/styles';
import { AlignHorizontalRight } from '@mui/icons-material';
export default function Footer(){
    return(
        <ThemeProvider theme={theme}>
        <div
        className='bg-color'
        style={{
          backgroundColor: theme.palette.primary.light,
          height: 200,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
      <div className="container pt-3">
      <h2 className="text-white" style={{}}>Contact Me 
      <img src="https://cdn-icons-png.flaticon.com/128/4151/4151471.png" alt="icon" 
            style={{
                width:'35px',
                height:'35px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
      </h2>
      <h5 className="text-white pt-2">
      <img src="https://cdn-icons-png.flaticon.com/128/542/542689.png" alt="icon" 
            style={{
                width:'20px',
                height:'20px',
                verticalAlign:'middle',
                marginRight:'5px'
             }}
            ></img>
        <Link
                  href="mailto:a0970220839@gmail.com"
                  sx={{ color: "white", fontSize: 20 }}
                >
                  a0970220839@gmail.com
        </Link>
      </h5>
      
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

      <Box sx={{ flexGrow: 0, display: 'flex', gap: '10px',justifyContent:'flex-end'}}>
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
      <Typography color="white" sx={{ textAlign: "center" }}>
              Copyright © 2023. All rights reserved.
            </Typography>
      </div>
      </ThemeProvider>
    )
}
