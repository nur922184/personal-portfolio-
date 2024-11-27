import React from 'react';
// import { FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaYoutube, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="bg-gradient-to-r from-black via-gray-900 to-green-900  py-20">
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
            </section>

            {/* About Section */}
            <section id="about" className="py-16">
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
            <section id="contact" className="py-16">
                <div className="container mx-auto text-center">
                    <h3 className="text-3xl font-bold mb-8">Contact Me</h3>
                    <p className="text-lg mb-6">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/moniruzzaman2428"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a
                            href="https://x.com/moniruzzaman_24"
                            target="_blank"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaTimes size={30} />
                        </a>
                        <a
                            href="https://www.facebook.com/moniruzzaman.kendua"
                            target="_blank"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaFacebook size={30} />
                        </a>
                        <a
                            href="mailto:moniruzzaman2428@gmail.com"
                            target="_blank"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaEnvelope size={30} />
                        </a>
                        <a
                            href="https://www.youtube.com/@moniruzzamam2428"
                            target="_blank"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaYoutube size={30} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;