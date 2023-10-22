import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards';
import NavBar from './components/navBar';
import HomePageCard from './components/WebCard';
import { ThemeProvider } from '@mui/material/styles';
import theme from './custom/theme'
import Footer from './components/footer';

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
          height: 250,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>RJ's Personal Page</h1>
              <h4 className='mb-3'>RJ 的個人網頁</h4>
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
      <Footer/>
      </ThemeProvider>
      
    </>
  )
}

export default Home
