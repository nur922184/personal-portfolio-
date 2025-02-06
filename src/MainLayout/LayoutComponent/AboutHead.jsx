import React, { useEffect } from 'react';
import { FaEnvelope, FaFacebook, FaGitAlt, FaGithub, FaLaravel, FaLinkedin, FaNodeJs, FaPhone, FaReact, FaTimes, FaYoutube, } from 'react-icons/fa';
import Me from '../../assets/_20240510_085948.jpg'
import animation from '../../assets/green.gif'
import animation1 from '../../assets/12.gif'
import { SiMongodb, SiPrisma, SiTailwindcss, } from 'react-icons/si';
import Contact from '../../Component/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import { TypeAnimation } from 'react-type-animation';
import SkillsShowcase from '../../Component/SkillsShowcase';
import ContactInfo from '../../Component/ContactInfo';

const AboutHead = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      offset: 100, // Offset for triggering animations
      once: true, // Trigger animation only once
    });
  }, []);
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Programming Hero.',
      duration: 'Jan 2024 - Present',
      description:
        `I am a Full Stack Developer, recently completed my course and did an internship. I can develop web applications using React.js, Node.js, Express.js and MongoDB. During the internship, I gained experience in real-world projects, where I worked on Responsive Web Design, REST API integration, and Authentication.
        Also, I have worked on various individual and team-based projects, where I have gained expertise in Performance Optimization and Deployment, as well as improving the functionality of Frontend and Backend. I have a keen interest in learning new trends in technology and am always ready to take on new challenges to solve problems.`,
    },
    {
      title: 'Microsoft Office Application',
      company: 'Open IT Institute',
      duration: 'Jun 2021 -Present ',
      description:
        `**"I am Md. Moniruzzaman, a Level 1 Instructor, Executive Mentor, and Graphics Designer. Currently working as an Instructor for Microsoft Office courses at Open IT Institute and also doing Label One Courses.
        I am proficient in all the important tools of Microsoft Office such as MS Word, Excel, PowerPoint, Access, etc. and provide practical training to students. I help students become proficient in the workplace by teaching office automation, data management, and presentation design.

        At the same time, I am an experienced Graphics Designer, where I work using Adobe Photoshop, Illustrator, InDesign, Canva, and other design tools. I have gained experience by working on Logo Design, Branding, Banner & Poster Design, Social Media Design, and various print and digital design projects.`,
    },
  ];

  return (
    <header className="  dark:bg-gray-900 text-gray-800 dark:text-white py-10 md:mt-10">
      <div className="  px-5 flex flex-col items-center text-center">
        {/* Profile Picture */}
        <div style={{
          backgroundImage: `url(${animation1})`,
        }}
          className="w-36 h-36 rounded-full  bg-slate-200 mb-5 justify-center  items-center ">
          <div className='w-32 h-32 rounded-full overflow-hidden mx-auto mt-2' >
            <img
              src={Me} // Replace with your profile image link
              alt="Md Moniruzzaman Tonoy"
              className="w-full h-full object-cover transition-transform duration-400  hover:scale-150 "
            />
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl font-bold mb-2">Md Moniruzzaman Tonoy</h1>
        <p className="text-lg font-medium dark:text-gray-400 mb-4">
          Full Stack Web Developer
        </p>

        {/* Contact Links */}
        <div className="flex space-x-4 mb-6">
          <a
            href="https://github.com/moniruzzaman2428"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="https://x.com/moniruzzaman_24"
            target="_blank"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
          >
            <FaTimes size={16} />
          </a>
          <a
            href="https://www.facebook.com/moniruzzaman.kendua"
            target="_blank"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
          >
            <FaFacebook size={16} />
          </a>
          <a
            href="mailto:moniruzzaman2428@gmail.com"
            target="_blank"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
          >
            <FaEnvelope size={16} />
          </a>
          <a
            href="https://www.youtube.com/@moniruzzamam2428"
            target="_blank"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
          >
            <FaYoutube size={16} />
          </a>
          <a
            href="tel:+8801618160869"
            className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
          >
            <FaPhone size={16} />
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
      <section id="introduction" className="py-16">
        <div className="container mx-auto w-[70%]">
          <h3 className="text-3xl font-bold mb-8">About Me</h3>
          <TypeAnimation
            splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
            sequence={[
              `I am a computer specialist. I am now working as computer operator in open IT institute. I studied from Kendua Joyhori Spri Government High School. Now I am working on a special course "Web Design.    
          I'm a self-driven Frontend Developer with a strong passion for
            crafting beautiful, user-friendly web applications. I have
            experience in working with modern technologies like React, Tailwind
            CSS, and more. My focus is always on delivering clean, scalable
            code and a seamless user experience. `,

              15000,
              '',
            ]}
            speed={{ type: 'keyStrokeDelayInMs', value: 30 }}
            omitDeletionAnimation={true}
            style={{ fontSize: '1em', display: 'block', minHeight: '200px' }}
            repeat={1}
          />
        </div>
      </section>

      {/* Works Experience  */}
      <section id='work-experience' className=" bg-violet-400 rounded-md dark:bg-gray-900 dark:text-white py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-teal-400 text-center mb-8">Work Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-violet-300 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold dark:text-teal-300">{exp.title}</h3>
                <p className="text-sm dark:text-gray-400">{exp.company}</p>
                <p className="text-sm dark:text-gray-500 mb-4">{exp.duration}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Education info  */}

      <section id="educational-qualification" className="py-12">
        <div className="dark:bg-gray-900 shadow-2xl p-7 rounded-lg container mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-400 text-center mb-8">
            Educational Qualification
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-11/12 mx-auto">
            {/* Education Item 1 */}
            <div className="dark:bg-gray-800 bg-violet-400 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-200">
                Master of Computer Engineering
              </h3>
              <p className="text-gray-600">XYZ University</p>
              <p className="text-gray-500 text-sm">0000-0000</p>
            </div>

            {/* Education Item 2 */}
            <div className="dark:bg-gray-800 bg-violet-400 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-200">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600">ABC University</p>
              <p className="text-gray-500 text-sm">0000-0000</p>
            </div>

            {/* Education Item 3 */}
            <div className="dark:bg-gray-800 bg-violet-400 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-200">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-gray-600">Kendua Government College</p>
              <p className="text-gray-500 text-sm">2025 - 2026</p>
            </div>

            {/* Education Item 4 */}
            <div className="dark:bg-gray-800 bg-violet-400 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-200">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-gray-600">Kendua Joyhori Spri govt High School</p>
              <p className="text-gray-500 text-sm">2023-2024</p>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Skills */}
      <section id="technical-skills">
        <div>
          <SkillsShowcase></SkillsShowcase>
        </div>

      </section>
      {/* Contact Info */}
      <section id='contact'>
        <div className="flex justify-center items-center min-h-screen dark:bg-gray-900">
          <ContactInfo />
        </div>
      </section>
    </header>
  );
};

export default AboutHead;