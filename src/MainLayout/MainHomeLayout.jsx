import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Cursor from '../animationCursor/Cursor';
import NewHome from '../NewHome/NewHome';
// import Home from './Home';

const MainHomeLayout = () => { 

    return (
        <div className='bg-violet-300 top-7 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen'>
            <header>
                <Cursor></Cursor>
                <Header></Header>
            </header>
            <main>
                <NewHome></NewHome>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainHomeLayout;