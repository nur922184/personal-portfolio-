import React from 'react';
// import { FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import Contact from '../Component/Contact';
import ThankYou from '../Component/ThankYou';


const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="bg-gradient-to-r from-black via-gray-900 to-green-900 p-5  py-20">
                <div className=''>
                    <div className="container mx-auto md:mt-14">
                        <h4 className="text-4xl md:text-6xl font-bold text-left mb-4">Hi, I am</h4>
                        <h2 className="text-4xl md:text-6xl font-bold text-left mb-4">Md Moniruzzaman</h2>
                        <p className="text-lg md:text-xl mb-8">
                            A Passionate Frontend Developer & UI/UX Enthusiast
                        </p>
                        <div className="flex justify-center gap-6">
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
                    </div>
                    <div>
                      
                    </div>
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

            {/* Projects Section */}

            {/* Contact Section */}
            <h2 className="text-4xl font-bold text-teal-400 text-center -mb-6">Contact Information</h2>
            <Contact></Contact>
            <div className='mb-4'>
            <ThankYou></ThankYou>
            </div>
        </div>
    );
};

export default Home;