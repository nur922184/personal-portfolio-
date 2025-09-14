import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from '../assets/me.jpg'; // You'll need to add your own profile image
import Animation from '../Component/Animation';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true // Animations happen only once when scrolling
        });
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] p-5 py-20 relative overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20 dark:opacity-10"></div>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    {/* Left Content */}
                    <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
                        <div className="text-left">
                            <h4 className="text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-4 drop-shadow-md">Hi, I am</h4>
                            <div className="text-xl mb-4">
                                <Animation />
                            </div>
                            <p className="text-lg md:text-xl text-white dark:text-gray-200 mb-8 drop-shadow-md">
                                A Passionate Frontend Developer & UI/UX Enthusiast
                            </p>
                            <p className="text-md text-white/90 dark:text-gray-300 mb-8 drop-shadow-md">
                                I create beautiful, functional, and responsive web experiences
                                that delight users and solve real problems.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-6">
                            <Link to="work" smooth={true} duration={500}>
                                <button
                                    className="bg-white text-[#2c3e50] w-full sm:w-auto px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-xl dark:bg-teal-600 dark:text-white dark:hover:bg-teal-700"
                                    role="button"
                                >
                                    View My Work
                                </button>
                            </Link>
                            <Link to="resume" smooth={true} duration={500}>
                                <button
                                    className="bg-white text-[#2c3e50] w-full sm:w-auto px-6 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-xl dark:bg-teal-600 dark:text-white dark:hover:bg-teal-700"
                                    role="button"
                                >
                                   Download Resume
                                </button>
                            </Link>
                            <Link to="contact" smooth={true} duration={500}>
                                <button
                                    className="bg-transparent border-2 border-white text-white w-full sm:w-auto px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-white hover:text-[#2c3e50] dark:border-teal-400 dark:text-teal-400 dark:hover:bg-teal-400 dark:hover:text-white hover:scale-105 hover:shadow-lg"
                                    role="button"
                                >
                                    Get In Touch
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 order-1 md:order-2 flex justify-center" data-aos="fade-left">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden group cursor-pointer">
                            {/* Main Image Container with 3D Effects */}
                            <div className="w-full h-full rounded-full overflow-hidden transform transition-all duration-700 group-hover:scale-105 group-hover:-translate-y-2 group-hover:shadow-2xl">
                                <img
                                    src={profileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Animated Border */}
                            <div className="absolute inset-0 rounded-full border-4 border-white/40 dark:border-gray-600/30 transform transition-all duration-700 group-hover:border-teal-400/80 group-hover:scale-105 group-hover:shadow-lg"></div>

                            {/* Floating Elements for 3D Effect */}
                            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal-400/20 to-purple-500/20 transform rotate-0 group-hover:rotate-6 transition-all duration-700 opacity-0 group-hover:opacity-100 -z-10"></div>
                            <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-teal-400/10 to-purple-500/10 transform -rotate-3 group-hover:-rotate-6 transition-all duration-700 opacity-0 group-hover:opacity-100 -z-20"></div>

                            {/* Shine Effect on Hover */}
                            <div className="absolute inset-0 rounded-full overflow-hidden">
                                <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform rotate-12 group-hover:translate-x-full transition-all duration-1000 group-hover:duration-3000 opacity-0 group-hover:opacity-100"></div>
                            </div>

                            {/* Floating Dots Decoration */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-teal-400 opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:animate-pulse"></div>
                            <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-1000 group-hover:animate-bounce"></div>
                            <div className="absolute top-1/4 -left-4 w-3 h-3 rounded-full bg-amber-400 opacity-0 group-hover:opacity-100 transition-all duration-1200"></div>

                            {/* Subtle Shadow for Depth */}
                            <div className="absolute -bottom-4 inset-x-4 h-4 bg-gradient-to-t from-gray-400/40 to-transparent dark:from-black/40 rounded-full blur-md group-hover:-bottom-5 group-hover:blur-lg transition-all duration-700"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

