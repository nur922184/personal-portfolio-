import React from 'react';
import AboutHead from './LayoutComponent/AboutHead';
import SideNavigation from './LayoutComponent/SideNavigation';
import Contact from '../Component/Contact';



const About = () => {


    return (
        <div>


            {/* <div className='absolute md:relative w-[400px]'>
                    <SideNavigation></SideNavigation>
                </div> */}
            <main className='grid md:grid-cols-12'>
                <aside className='md:col-span-2 lg:col-span-3 md:mt-16 fixed '>
                    <SideNavigation></SideNavigation>
                </aside>
                <section className='md:col-span-10 lg:col-span-9 md:ml-56 lg:ml-72 lg:w-full'>
                    <AboutHead></AboutHead>
                </section>
            </main>

            {/* Add your main content here */}

        </div>
    );
};

export default About;