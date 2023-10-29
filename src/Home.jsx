import { useState,useEffect} from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards';
import NavBar from './components/navBar';
import WebCard from './components/WebCard';
import { ThemeProvider } from '@mui/material/styles';
import Avatar from "@mui/material/Avatar";
import theme from './custom/theme'
import Footer from './components/footer';
import avatar from "../public/img/avatar.png"
import planets from "../public/img/planets.jpg"
import tetris from "../public/img/tetris.jpg"
import todo from "../public/img/todo.jpg"
import { Button } from '@mui/material';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    const delaytimer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); 

    return () => clearTimeout(delaytimer); 
  }, []);

  return (
    <> 
    {isLoading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <h2>Loading...</h2>
        </div>
      ):(
        <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <header>
      <div
        className='p-5 text-center bg-color'
        style={{
          backgroundColor: theme.palette.primary.light,
          height: 220,
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
      <div className="container pt-5 pb-6">
      <h2 className="" style={{ borderBottom: `3px solid ${theme.palette.primary.dark}`, paddingBottom: '12px' }}>Introduction 
      <img src="https://cdn-icons-png.flaticon.com/128/7334/7334113.png" alt="icon" 
            style={{
                width:'38px',
                height:'38px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
      </h2>
      <div className='container pt-3' style={{display:'flex',alignItems:'center', gap:'100px'}}>
          <h5 className='text-center'>H! 我是來自彰化的RJ，目前就讀國立雲林科技大學資訊管理系四年級，即將畢業成為社會新鮮人，具責任心、個性好相處，擅長與其他人溝通交流，
          對網頁設計有興趣，喜歡學習新技術和接觸新事物，歡迎多多指教!</h5>
          <Avatar
                src={avatar}
                sx={{ width: "20%", height: "20%" }}
          ></Avatar>
          
      </div>
      
      </div>
          
      <div className="container pt-5 pb-6">
      <h2 className="" style={{ borderBottom: `3px solid ${theme.palette.primary.dark}`, paddingBottom: '12px' }}>Skills  
      <img src="https://cdn-icons-png.flaticon.com/128/2444/2444286.png" alt="icon" 
            style={{
                width:'38px',
                height:'38px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
      </h2>
      <div className='container pt-5' style={{display:'flex',alignItems:'center',justifyContent:'center', gap:'50px'}}>
            <img src="https://cdn-icons-png.flaticon.com/128/186/186320.png" alt="html" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            <img src="https://cdn-icons-png.flaticon.com/128/11229/11229335.png" alt="js" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            <img src="https://cdn-icons-png.flaticon.com/128/186/186319.png" alt="css" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            <img src="https://cdn-icons-png.flaticon.com/128/1126/1126012.png" alt="react" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="bootstap" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            <img src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png" alt="python" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            <img src="https://cdn-icons-png.flaticon.com/128/226/226777.png" alt="Java" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            
      </div>
      <div className='container pt-5 pb-6' style={{display:'flex',alignItems:'center',justifyContent:'center', gap:'50px'}}>
            <img src="https://cdn-icons-png.flaticon.com/128/11518/11518876.png" alt="git" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="github" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            
            <img src="https://1.bp.blogspot.com/-LgTa-xDiknI/X4EflN56boI/AAAAAAAAPuk/24YyKnqiGkwRS9-_9suPKkfsAwO4wHYEgCLcBGAsYHQ/s0/image9.png" 
            alt="android" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            <img src="https://user-images.githubusercontent.com/322107/88122097-1113c100-cb9e-11ea-90bb-b72d84ef84a6.png" 
            alt="flutter" 
              style={{
                width:'80px',
                height:'80px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            
          </div>

      <h4 className="pt-5">Language Skills 
      <img src="https://cdn-icons-png.flaticon.com/128/9346/9346647.png" alt="icon" 
            style={{
                width:'30px',
                height:'30px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
      </h4>
      <div className='container pt-2 pb-6'>
        <li>
          <h5>TOEIC 930 (金色證書)</h5>
        </li>
        <li>
        <h5>日文學習中...</h5>
        </li>
      </div>
      <div className='container pt-5'>
      <h2 className="" style={{ borderBottom: `3px solid ${theme.palette.primary.dark}`, paddingBottom: '15px' }}>Projects  
      <img src="https://cdn-icons-png.flaticon.com/128/7792/7792148.png" alt="icon" 
            style={{
                width:'38px',
                height:'38px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
        <Button style={{float:'right'}} onClick={
          () => navigate('/Portfolio')
        }>see more</Button>
      </h2>
      </div>
      
      <div className=' pt-3 pb-3' style={{ display: 'flex', justifyContent: 'space-between' ,  flexWrap: 'wrap'}}>

                <WebCard
                    image={planets}
                    title="Planetary Tourism"
                    description="這是參加2023 NASA Hackthon Space App Challenge的團隊餐賽作品，是運用NASA的資料、介紹各行星特殊景觀的導覽網頁，使用React框架製作。"
                    pageUrl ='https://rj-song.github.io/Planetary_Tourism/'
                    repoUrl='https://github.com/RJ-song/Planetary_Tourism'
                ></WebCard>
                
                <WebCard
                    image={tetris}
                    title="Tetris"
                    description="這是一個練習專案，沒有運用任何框架，單純使用HTML搭配CSS、JS寫出來的簡易俄羅斯方塊遊戲。"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Tetris'
                ></WebCard>

                <WebCard
                    image={todo}
                    title="React TodoList"
                    description="這個網頁是一個紀錄待辦事項的工具，是參加六角學院React直播班的練習專案，其中用到Axios套件與伺服器溝通，由於伺服器目前已關閉，登入註冊等功能目前無法使用。"
                    pageUrl ='https://rj-song.github.io/React_TodoList/'
                    repoUrl='https://github.com/RJ-song/React_TodoList'
                ></WebCard>
                </div>
               
                
                
      </div>
      <Footer/>
      </ThemeProvider>
       
      )}
      </>
  )}
 

export default Home
