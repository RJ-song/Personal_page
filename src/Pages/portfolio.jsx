import { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import WebCard from "../components/WebCard";
import Footer from '../components/footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../custom/theme";
import planets from "../../public/img/planets.jpg"
import tetris from "../../public/img/tetris.jpg"
import todo from "../../public/img/todo.jpg"
import todoprac from "../../public/img/todoprac.jpg"
import mediapipe from "../../public/img/todoprac.jpg"
import tensor from "../../public/img/tensor.png"
function Portfolio (){

    return (
        <ThemeProvider theme={theme}>
        
         <NavBar/>
         <header>
      <div
        className='p-5 text-center bg-image'
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHVycGxlfGVufDB8fDB8fHww")`,
          height: 300,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                <div className='d-flex justify-content-center align-items-center h-100'>
                <div className='text-white'>
                    <h1 className='mb-3'>專案作品集</h1>
                    <h4 className='mb-3'> </h4>
                </div>
                </div>
                </div>
            </div>
        </header>
        <div className="container pt-5 pb-3">
            <h1 className='pb-2' style={{ borderBottom: `3px solid ${theme.palette.primary.dark}`, paddingBottom: '12px' }}>網頁
            <img src="https://cdn-icons-png.flaticon.com/128/2278/2278997.png" alt="icon" 
            style={{
                width:'40px',
                height:'40px',
                verticalAlign:'middle',
                marginLeft:'10px'
             }}
            ></img>
            </h1>
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
                <div className=' pt-3 pb-3' style={{ display: 'flex', justifyContent: 'space-between' ,  flexWrap: 'wrap'}}>
                <WebCard
                    image={tensor}
                    title="Posenet ReactJS"
                    description="測試用網頁，使用posenet model，在網頁上以鏡頭偵測人體節點並繪製在畫面上。"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Posenet_Reactjs/tree/master'
                ></WebCard>
                <WebCard
                    image={todoprac}
                    title="Todolist Practice"
                    description="練習作品，用React製作的一個簡易代辦事項工具。"
                    pageUrl ='https://rj-song.github.io/React-Todolist/'
                    repoUrl='https://github.com/RJ-song/React-Todolist'
                ></WebCard>
                
                </div>
                <h1 className='pt-3' style={{ borderBottom: `3px solid ${theme.palette.primary.dark}`, paddingBottom: '12px' }}>其他
                <img src="https://cdn-icons-png.flaticon.com/128/512/512142.png" alt="icon" 
                    style={{
                        width:'40px',
                        height:'40px',
                        verticalAlign:'middle',
                        marginLeft:'10px'
                    }}
                ></img>
                </h1>
                
                <WebCard
                    image={mediapipe}
                    title="Mediapipe Sport Detection"
                    description="使用Python撰寫，以MediaPipe套件偵測人體姿勢，並運用機器學習技術訓練出能判斷運動姿勢的模型，能夠判斷人體運動姿勢準確度並計算次數。"
                    pageUrl ='https://drive.google.com/drive/folders/1SB1Llw5yeIUd-dXywejXufeP46ngIsT4?usp=sharing'
                    repoUrl='https://github.com/RJ-song/mediapipe_model_training'
                ></WebCard>
                
            
        </div>
        <Footer/>
        
        </ThemeProvider>
    )
}
export default Portfolio;