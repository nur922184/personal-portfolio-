import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaYoutube, FaTimes } from "react-icons/fa";
import img from '../../src/assets/agif1opt.gif'
import Me from '../../src/assets/mt.png'


const Contact = () => {
  return (
    <section id="contact" className="lg:flex w-11/12 mx-auto md:flex-row-reverse justify-between items-center ">
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold mb-8"></h3>
        <p className="text-lg mb-6">
          Feel free to reach out for collaborations or just a friendly hello!
        </p>
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/moniruzzaman2428"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-lime-600"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-blue-500"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://x.com/moniruzzaman_24"
            target="_blank"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-pink-500"
          >
            <FaTimes size={30} />
          </a>
          <a
            href="https://www.facebook.com/moniruzzaman.kendua"
            target="_blank"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-blue-700"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="mailto:moniruzzaman2428@gmail.com"
            target="_blank"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-cyan-900"
          >
            <FaEnvelope size={30} />
          </a>
          <a
            href="https://www.youtube.com/@moniruzzamam2428"
            target="_blank"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
          >
            <FaYoutube size={30} />
          </a>
        </div>
      </div>
      <div className=' md:w-[700px]'>
        <div
          className="bg-violet-400 dark:bg-teal-900 text-white p-8 rounded-lg max-w-md mx-auto">
          <div
            style={{
              backgroundImage: `url(${img})`,
            }}
            className="bg-teal-200 text-white p-4 rounded-md shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6">CONTACT US</h2>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-teal-800 text-teal-100 p-2 rounded-full">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-sm font-semibold">Phone:</p>
                <a href="tel:+8801618160869" className="text-xs md:text-lg text-blue-300 hover:underline">
                  +8801618-160869
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-teal-800 text-teal-200 p-2 rounded-full">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-sm font-semibold">Email:</p>
                <a
                  href="mailto:moniruzzamam2428@gmail.com"
                  className="text-xs md:text-lg text-blue-300 hover:underline"
                >
                  moniruzzamam2428@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-teal-800 text-teal-200 p-2 rounded-full">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-sm font-semibold">Address:</p>
                <p className="text-xs md:text-lg">Kendua, Netrokona, Mymenshing</p>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <img
                src={Me} // Replace with actual image URL
                alt="Contact us"
                className="w-24 h-24 bg-cover rounded-full border-4 border-teal-900"
              />
            </div>
            <p className="text-center text-teal-800 mt-4">@Moniruzzaman</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Contact;
