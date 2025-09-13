import React from 'react';
import Home from '../MainLayout/Home';
import AboutMe from '../Component/About/AboutMe';
import Contact from '../Component/Contact';
import ContactInfo from '../Component/ContactInfo';

const NewHome = () => {
    return (
        <div>

            <section id="home" name="home" ><Home></Home></section> 
            <section id="about" name="about" ><AboutMe></AboutMe></section>
            <section id="education" name="education" ></section>
            <ContactInfo></ContactInfo>
            <section id="contact" name="contact" ><Contact></Contact></section>
            <section id="blog" name="blog" ></section>
            <section id="resume" name="resume" ></section>
            <section id="dev" name="dev" > </section>

            {/* <Footer></Footer> */}
        </div>
    );
};

export default NewHome;