import React, { useEffect, } from 'react';
// import { FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Contact from '../Component/Contact';
import ThankYou from '../Component/ThankYou';
import AOS from "aos";
import "aos/dist/aos.css";
import banner from '../assets/fgsdgdfgsgsdfg.gif'
import Animation from '../Component/Animation';
import Swiper from '../Swiper/Swiper';

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS initialization
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section id="home"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
                className="bg-gradient-to-r bg-center from-black via-gray-900 to-green-900 p-5  py-20">
                <div className=' flex justify-around' data-aos="fade-down">
                    <div className="container md:w-[50%] mx-auto md:mt-14">
                        <h4 className="text-3xl md:text-4xl font-bold text-left md:-ml-20 text-white mb-4">Hi, I am</h4>
                       <div className='text-xl'> <Animation></Animation></div>
                        <p className="text-lg md:text-xl md:ml-20 text-white mb-8">
                            A Passionate Frontend Developer & UI/UX Enthusiast
                        </p>
                    </div>
                </div>
                <div className="flex justify-center gap-6" data-aos="fade-up">
                    <NavLink
                        to={'work'}
                        className="bg-black text-teal-400 px-6 py-3 rounded-lg shadow-md hover:bg-teal-400 hover:text-black transition"
                    >
                        View My Work
                    </NavLink>
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="border cursor-pointer border-teal-400 px-6 py-3 rounded-lg shadow-md hover:bg-teal-400 hover:text-black transition"
                    >
                        Get In Touch
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="p-5 py-16">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">About Me</h3>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        I'm a self-driven Frontend Developer with a strong passion for
                        crafting beautiful, user-friendly web applications. I have
                        experience in working with modern technologies like React, Tailwind
                        CSS, and more. My focus is always on delivering clean, scalable
                        code and a seamless user experience.
                    </p>
                </div>
            </section>

            <section>
                <Swiper></Swiper>
            </section>

            {/* Projects Section */}

            {/* Contact Section */}
            <h2 className="text-4xl font-bold text-teal-400 text-center -mb-6">Contact Information</h2>
            <Contact ></Contact>
            <div className='mb-4'>
                <ThankYou></ThankYou>
            </div>
        </div>
    );
};

export default Home;