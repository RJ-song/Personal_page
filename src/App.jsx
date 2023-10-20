import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Portfolio from './Pages/portfolio';
import Notes from './Pages/notes';
import NotFound from './Pages/notFound';

function App() {
  

  return (
    <>    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Notes' element={<Notes />} />
        <Route path='*' element={<NotFound />} />
      </Routes> 
    </>
  )
}

export default App
