import { useEffect, useState } from "react";
import NavBar from "../components/navBar";
import WebCard from "../components/WebCard";
import Footer from '../components/footer';

function Portfolio (){
    const [showBar,setShowBar] = useState(false)

    

    return (
        <>
        
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
            <h1 className='pb-2' style={{ borderBottom: '2px solid #000' }}>網頁
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
                    image={'/img/tetris.jpg'}
                    title="Tetris"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Tetris'
                ></WebCard>

                <WebCard
                    image={'/img/todo.jpg'}
                    title="React TodoList"
                    description="這個網頁是一個紀錄待辦事項的工具，是參加六角學院React直播班的練習專案，其中用到Axios套件與伺服器溝通，由於伺服器目前已關閉，登入註冊等功能目前無法使用。"
                    pageUrl ='https://rj-song.github.io/React_TodoList/'
                    repoUrl='https://github.com/RJ-song/React_TodoList'
                ></WebCard>

                <WebCard
                    image={'/img/planets.jpg'}
                    title="Planetary Tourism"
                    description="這是參加2023 NASA Hackthon Space App Challenge比賽的網頁作品，"
                    pageUrl ='https://rj-song.github.io/Planetary_Tourism/'
                    repoUrl='https://github.com/RJ-song/Planetary_Tourism'
                ></WebCard>
                </div>
                <div className=' pt-3 pb-3' style={{ display: 'flex', justifyContent: 'space-between' ,  flexWrap: 'wrap'}}>
                <WebCard
                    image={'/img/todo.jpg'}
                    title="Tetris"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Tetris'
                ></WebCard>
                <WebCard
                    image={'/img/todo.jpg'}
                    title="Tetris"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Tetris'
                ></WebCard>
                <WebCard
                    image={'/img/todo.jpg'}
                    title="Tetris"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Tetris'
                ></WebCard>
                
                </div>
                <h1 className='pt-3' style={{ borderBottom: '2px solid #000' }}>其他</h1>
                
                <WebCard
                    image={'/img/todo.jpg'}
                    title="Mediapipe Sport Detection"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://github.com/RJ-song/mediapipe_model_training'
                    repoUrl='https://github.com/RJ-song/mediapipe_model_training'
                ></WebCard>
                
            
        </div>
        <Footer/>
        
        </>
    )
}
export default Portfolio;