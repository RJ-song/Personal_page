import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import NavBar from "../components/navBar";
import theme from "../custom/theme";
import Footer from '../components/footer';

function Notes (){

    return(
            <MuiThemeProvider theme = {theme}>
                <NavBar/>
                <header>
                    <div
                        className='p-5 text-center bg-image'
                        style={{
                            backgroundImage: `url("https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRha2UlMjBub3RlfGVufDB8MHwwfHx8MA%3D%3D")`,
                            height: 350,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                    <div className='d-flex justify-content-center align-items-center h-100'>
                    <div className='text-white'>
                        <h1 className='mb-3'>學習筆記</h1>
                        <h4 className='mb-3'> </h4>
                    </div>
                    </div>
                    </div>
                    </div>
                 </header>
                <div className='container'>
                        <h1 className='text-center'>Under Development...</h1>
                </div>
                {/* <Footer/> */}
            </MuiThemeProvider>
    )
}

export default Notes;