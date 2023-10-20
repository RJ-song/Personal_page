import NavBar from "../components/navBar";
import HomePageCard from "../components/homePageCard";
function Portfolio (){

    return (
        <>
        <NavBar></NavBar>
        <div className="container pt-5">
            <h1 className="text-center" style={{ borderBottom: '2px solid #000' }}>網頁作品集</h1>
            <div className=' pt-3 pb-3' style={{ display: 'flex', justifyContent: 'space-between' ,  flexWrap: 'wrap'}}>
            
                <HomePageCard
                    image={'/img/tetris.jpg'}
                    title="Tetris"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Tetris'
                ></HomePageCard>

                <HomePageCard
                    image={'/img/todo.jpg'}
                    title="React TodoList"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://rj-song.github.io/React_TodoList/'
                    repoUrl='https://github.com/RJ-song/React_TodoList'
                ></HomePageCard>

                <HomePageCard
                    image={'/img/todo.jpg'}
                    title="Tetris"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Tetris'
                ></HomePageCard>

                <HomePageCard
                    image={'/img/todo.jpg'}
                    title="Tetris"
                    description="這是一個沒有運用任何框架，單純使用HTML、CSS、JS寫出來的簡易俄羅斯方塊遊戲，"
                    pageUrl ='https://rj-song.github.io/Tetris/'
                    repoUrl='https://github.com/RJ-song/Tetris'
                ></HomePageCard>

            </div>
        </div>
        </>
    )
}
export default Portfolio;