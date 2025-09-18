import React from 'react';
import Home from '../MainLayout/Home';
import AboutMe from '../Component/About/AboutMe';
import Contact from '../Component/Contact';
import ContactInfo from '../Component/ContactInfo';
import Education from '../Component/Education';
import Works from '../MainLayout/Work';
import Blog from '../MainLayout/Blog';
import WorkExperience from '../Component/WorkExperience';
import Resume from '../MainLayout/Resume';
const NewHome = () => {
    return (
        <div>

            <section id="home" name="home" ><Home></Home></section> 
            {/* <TextAnimation></TextAnimation> */}
            <section id="about" name="about" ><AboutMe></AboutMe></section>
            <WorkExperience></WorkExperience>
            <section id="education" name="education" ><Education></Education></section>
            <section id="contact" name="contact"><ContactInfo></ContactInfo></section>
            <section id="contact" name="contact" ><Contact></Contact></section>
            <section id="work" name="work" ><Works></Works></section>
            <section id="blog" name="blog" ><Blog></Blog></section>
            <section id="resume" name="resume" ><Resume></Resume></section>
            <section id="dev" name="dev" > </section>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default NewHome;