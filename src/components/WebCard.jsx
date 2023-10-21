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
  import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
  import theme from "../custom/theme";

  function WebCard ({image,title,description, pageUrl,repoUrl}){
    const handleCheckOut = (url) => {
        window.open(url, '_blank');
    }
    return(
      
        <MDBCard  style={{ width: '400px', height: '450px', display: 'flex', flexDirection: 'column' }}>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src= {image} fluid alt='loading'
        style={{ 
            position: "relative",
            maxWidth: '295pt',  
            maxHeight: '150pt',  
            width: '295pt',     
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
      <MuiThemeProvider theme = {theme}>
      <MDBCardBody
        style={{
          flex: '1',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <MDBCardTitle><b>{title}</b></MDBCardTitle>
        <MDBCardText>
          {description}
        </MDBCardText>
        <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Button  onClick={() => handleCheckOut(pageUrl)} type="button" variant='contained'>CheckOut</Button>
        <Button  onClick={() => handleCheckOut(repoUrl)} variant='outlined' type="button" sx={{
            backgroundColor: 'white', 
            color: 'primary', 
            borderColor: 'secondary', 
        }}>GitHub repo</Button>
        </div>
      </MDBCardBody>
      </MuiThemeProvider>
    </MDBCard>
    )
  }
  export default WebCard;