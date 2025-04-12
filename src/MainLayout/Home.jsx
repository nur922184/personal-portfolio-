import React, { useEffect, } from 'react';
// import { FaCode, FaUsers, FaRocket } from 'react-icons/fa';
import { NavLink, } from 'react-router-dom';
import { Link } from 'react-scroll';
import Contact from '../Component/Contact';
import ThankYou from '../Component/ThankYou';
import AOS from "aos";
import "aos/dist/aos.css";
import banner from '../assets/fgsdgdfgsgsdfg.gif'
import Animation from '../Component/Animation';
import Swiper from '../Swiper/Swiper';
import '../MainLayout/LayoutComponent/Home.css'
import "react-awesome-button/dist/styles.css";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // AOS initialization
    }, []);
    // const navigate = useNavigate();

    return (
        <div className='' >
            {/* Hero Section */}
            <section id="home"
                style={{
                    backgroundImage: `url(${banner})`,
                }}
                className="bg-slate-50 dark:bg-gradient-to-r bg-center from-black via-gray-900 to-green-900 p-5  py-20">
                <div className=' flex justify-around' data-aos="fade-down">
                    <div className="container md:w-[50%] mx-auto md:mt-14">
                        <h4 className="text-3xl md:text-4xl font-bold text-left md:-ml-15 text-white mb-4">Hi, I am</h4>
                        <div className='text-xl'> <Animation></Animation></div>
                        <p className="text-lg md:text-xl md:ml-20 text-white mb-8">
                            A Passionate Frontend Developer & UI/UX Enthusiast
                        </p>
                    </div>
                </div>
                <div className="flex justify-center gap-6" data-aos="fade-up">
                    {/* <div className=" p-1 rounded-md">
                        <AwesomeButton
                            type="primary"
                            className="!bg-blue-500 !text-white !rounded-md "
                            onPress={() => navigate("/work")}
                        >
                            View My Work
                        </AwesomeButton>
                    </div> */}
                    <div className="flex flex-row gap-4 mt-4">
                        <div>
                            <NavLink to="/work">
                                <button
                                    className="bg-teal-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300 hover:bg-teal-700 hover:scale-105 hover:shadow-lg"
                                    role="button"
                                >
                                    <span>View My Work</span>
                                </button>
                            </NavLink>
                        </div>
                        <div>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                            >
                                <button
                                    className="bg-transparent border border-teal-600 text-teal-600 px-6 py-2 rounded-full font-semibold transition-all duration-300 hover:bg-teal-600 hover:text-white hover:scale-105 hover:shadow-lg"
                                    role="button"
                                >
                                    Get In Touch
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* <AwesomeButton>
                        <Link
                            to="contact"
                            type="primary"
                            smooth={true}
                            size="small"
                            duration={500}
                            className="border cursor-pointer border-teal-400 px-6 py-3 rounded-lg shadow-md  hover:text-black transition"
                        >
                           
                        </Link>
                    </AwesomeButton> */}

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
            <h2 className="text-4xl font-bold text-teal-400 text-center mt-8 ">Contact Information</h2>
            <div className='mb-8 mt-8'>
                <Contact ></Contact>
            </div>
            <div className='mb-4'>
                <ThankYou></ThankYou>
            </div>
        </div>
    );
};

export default Home;