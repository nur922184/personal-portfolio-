import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa';
import Me from '../../assets/2024032.jpg'

const AboutHead = () => {
    return (
        <header className="bg-gray-900 text-white py-10">
          <div className="max-w-5xl mx-auto px-5 flex flex-col items-center text-center">
            {/* Profile Picture */}
            <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
              <img
                src={Me} // Replace with your profile image link
                alt="Md Moniruzzaman Tonoy"
                className="w-full h-full object-cover"
              />
            </div>
    
            {/* Name and Title */}
            <h1 className="text-4xl font-bold mb-2">Md Moniruzzaman Tonoy</h1>
            <p className="text-lg font-medium text-gray-400 mb-4">
              Full Stack Web Developer
            </p>
    
            {/* Contact Links */}
            <div className="flex space-x-4 mb-6">
              <a
                href="https://github.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:your-email@example.com"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:+1234567890"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaPhone />
              </a>
            </div>
    
            {/* Call to Action Button */}
            <a
              href="#contact"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-full transition-all"
            >
              Schedule a Call
            </a>
          </div>
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

        </header>
      );
};

export default AboutHead;