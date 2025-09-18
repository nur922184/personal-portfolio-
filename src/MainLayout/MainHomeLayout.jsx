import React, { useState, useEffect } from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import Cursor from '../animationCursor/Cursor';
import NewHome from '../NewHome/NewHome';
import LodingAnimation from '../Component/LoadingAnimation/LodingAnimation';

const MainHomeLayout = () => {
    const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    const firstLoad = localStorage.getItem('firstLoad');
    if (firstLoad === 'false') {
      setIsFirstLoad(false);
    }

    const totalTime = isFirstLoad ? 3500 : 1500;
    const intervalTime = 30;
    const steps = totalTime / intervalTime;
    const increment = 100 / steps;

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsLoading(false);
            localStorage.setItem('firstLoad', 'false');
          }, 500);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [isFirstLoad]);

    return (
        <div className='bg-violet-300 top-7 dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 min-h-screen'>
            {isLoading ? (
                <LodingAnimation progress={progress} isFirstLoad={isFirstLoad} />
            ) : (
                <>
                    <Cursor />
                    <Header />
                    <main>
                        <NewHome />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </>
            )}
        </div>
    );
};

export default MainHomeLayout;