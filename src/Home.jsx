import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards';
import NavBar from './components/navBar';
import HomePageCard from './components/homePageCard';
function Home() {
  

  return (
    <>
      <NavBar></NavBar>
      <header>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: `url("")`,
          height: 300,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>RJ's Personal Page</h1>
              <h4 className='mb-3'> </h4>
            </div>
          </div>
        </div>
      </div>
    </header>
      <div className="container pt-3">
       
      </div>
    </>
  )
}

export default Home
