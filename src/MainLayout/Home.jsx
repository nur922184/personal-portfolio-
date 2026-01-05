import React, { useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from '../assets/me.jpg';
import Animation from '../Component/Animation';
import '../Animated/TextAnimation.css';
import '../Animated/ImageAnimation.css';

const Home = () => {
    const textRef = useRef(null);
    const textRefs = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        const imageElement = imageRef.current;
        if (imageElement) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-image');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            observer.observe(imageElement);
        }
    }, []);

    useEffect(() => {
        const textElement = textRefs.current;
        if (textElement) {
            textElement.classList.add('animate-text');
        }
    }, []);

    useEffect(() => {
        const textElement = textRef.current;
        if (textElement) {
            textElement.classList.add('animate-text');
        }
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#2c3e50] via-[#4ca1af] to-[#c4e0e5] dark:from-[#0f172a] dark:via-[#1e3a8a] dark:to-[#0f766e] p-5 py-20 relative overflow-hidden">
                {/* Floating Background Shapes */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full animate-float-slow"></div>
                    <div className="absolute top-1/4 right-20 w-16 h-16 bg-teal-400/10 rounded-lg animate-float-medium"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-float-fast"></div>
                    <div className="absolute bottom-1/3 right-10 w-12 h-12 bg-amber-400/10 rounded-lg animate-float-slow"></div>
                    <div className="absolute top-1/2 left-20 w-18 h-18 bg-white/5 rounded-full animate-float-medium"></div>
                </div>

                {/* Background pattern */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiIHN0cm9rZS13aWR0aD0iMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMTUiLz48L2c+PC9zdmc+')] opacity-20 dark:opacity-10"></div>

                <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
                    {/* Left Content - বাম পাশে কন্টেন্ট */}
                    <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
                        <div className="text-left">
                            <h4 ref={textRefs} className="blur-to-clear-text gradient-text text-3xl md:text-4xl font-bold text-white dark:text-gray-100 mb-4 drop-shadow-md">
                                Hello, I am
                            </h4>
                            <div className="text-xl mb-4">
                                <Animation />
                            </div>
                            <p ref={textRef} className="blur-to-clear-text text-lg md:text-xl text-white dark:text-gray-200 mb-8 drop-shadow-md">
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

                    {/* Right Image - ডান পাশে ইমেজ */}
                    <div className="md:w-1/2 order-1 md:order-2 flex justify-center" data-aos="fade-left">
                        <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                            {/* Rotating Dashed Gradient Border */}
                            <div className="absolute inset-0 rounded-full p-[3px] bg-gradient-to-r from-purple-500 via-teal-400 to-pink-500 animate-rotate-border">
                                {/* Inner transparent circle with dashed border and pulse */}
                                <div className="w-full h-full rounded-full border-[2px] border-dotted border-white/70 animate-pulse-border"></div>
                            </div>

                            {/* Profile Image (Fixed, does NOT rotate) */}
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="relative z-10 w-[98%] h-[98%] object-cover rounded-full border-[2px] border-gray-300 shadow-lg"
                                ref={imageRef}
                            />

                            {/* Additional Hover Effects */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-all duration-700 -z-10"></div>
                            
                            {/* Floating Dots */}
                            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-teal-400 opacity-0 hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                            <div className="absolute -bottom-3 -left-3 w-6 h-6 rounded-full bg-purple-500 opacity-0 hover:opacity-100 transition-all duration-1000 animate-bounce"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes rotate-border {
                        0% {
                            transform: rotate(0deg) scale(1);
                        }
                        50% {
                            transform: rotate(180deg) scale(1.05);
                        }
                        100% {
                            transform: rotate(360deg) scale(1);
                        }
                    }

                    @keyframes pulse-border {
                        0%, 100% {
                            transform: scale(1);
                            opacity: 0.9;
                        }
                        50% {
                            transform: scale(1.07);
                            opacity: 1;
                        }
                    }

                    .animate-rotate-border {
                        animation: rotate-border 7s linear infinite alternate;
                    }

                    .animate-pulse-border {
                        animation: pulse-border 2.5s ease-in-out infinite;
                    }

                    /* Responsive adjustments */
                    @media (max-width: 768px) {
                        .md\\:w-1\\/2 {
                            width: 100%;
                        }
                        .order-1 {
                            order: 1;
                        }
                        .order-2 {
                            order: 2;
                        }
                    }
                `}</style>
            </section>
        </div>
    );
};

export default Home;