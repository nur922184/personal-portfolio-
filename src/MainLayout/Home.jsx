import React from 'react';
// import { FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="bg-gradient-to-r from-teal-500 to-blue-600 text-center py-20">
                <div className="container mx-auto md:mt-14">
                    <h2 className="text-4xl md:text-6xl font-bold mb-4">Hi, Md Moniruzzaman</h2>
                    <p className="text-lg md:text-xl mb-8">
                        A Passionate Frontend Developer & UI/UX Enthusiast
                    </p>
                    <div className="flex justify-center gap-6">
                        <a
                            href="#projects"
                            className="bg-black text-teal-400 px-6 py-3 rounded-lg shadow-md hover:bg-teal-400 hover:text-black transition"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="border border-teal-400 px-6 py-3 rounded-lg shadow-md hover:bg-teal-400 hover:text-black transition"
                        >
                            Get In Touch
                        </a>
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
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaGithub size={30} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaLinkedin size={30} />
                        </a>
                        <a
                            href="mailto:example@example.com"
                            className="text-white hover:text-teal-400 transition"
                        >
                            <FaEnvelope size={30} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;