import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { Outlet } from 'react-router-dom';
import Home from './Home';
import About from './About';
// import Home from './Home';

const MainHomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <Outlet></Outlet>
               
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainHomeLayout;