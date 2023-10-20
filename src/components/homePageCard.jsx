import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
  } from 'mdb-react-ui-kit';
import { Button } from '@mui/material';
  import { useNavigate, Link, useHref } from 'react-router-dom';
  function HomePageCard ({image,title,description, pageUrl,repoUrl}){
    const handleCheckOut = (url) => {
        window.open(url, '_blank');
    }
    return(
        <MDBCard  style={{ width: '400px', height: '400px' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src= {image} fluid alt='loading'
        style={{ 
            maxWidth: '150pt',  
            maxHeight: '150pt',  
            width: '150pt',     
            height: '150pt',    
            objectFit: 'cover',
            display: 'flex',
            justifyContent: 'center',
          }}
        />
        <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle><b>{title}</b></MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <button  onClick={() => handleCheckOut(pageUrl)} type="button" className="btn btn-dark">CheckOut</button>
        <Button  onClick={() => handleCheckOut(repoUrl)} variant='outlined' type="button" sx={{
            backgroundColor: 'white', 
            color: 'black', 
            borderColor: 'black', 
        }}>GitHub repo</Button>
        </div>
      </MDBCardBody>
    </MDBCard>
    )
  }
  export default HomePageCard;