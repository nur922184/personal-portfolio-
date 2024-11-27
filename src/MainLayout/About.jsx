import React from 'react';
import AboutHead from './LayoutComponent/AboutHead';
import SideNavigation from './LayoutComponent/SideNavigation';
import { Outlet } from 'react-router-dom';


const About = () => {


    return (
        <div>

            <main className="flex">
                {/* <div className='absolute md:relative w-[400px]'>
                    <SideNavigation></SideNavigation>
                </div> */}
                <div className='md:mt-8'>
                    <AboutHead></AboutHead>
                </div>

                {/* Add your main content here */}
            </main>
        </div>
    );
};

export default About;