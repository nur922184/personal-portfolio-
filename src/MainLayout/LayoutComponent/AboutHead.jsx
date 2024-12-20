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
      company: 'Tech Solutions Ltd.',
      duration: 'Jan 2022 - Present',
      description:
        'Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with a team to optimize performance and enhance user experiences.',
    },
    {
      title: 'Frontend Developer',
      company: 'Creative Minds',
      duration: 'Jun 2020 - Dec 2021',
      description:
        'Specialized in creating responsive designs using React and Tailwind CSS. Focused on improving UI/UX designs for better engagement.',
    },
    {
      title: 'Intern - Web Development',
      company: 'Web Innovators Inc.',
      duration: 'Jan 2020 - May 2020',
      description:
        'Assisted in developing e-commerce websites and implemented SEO best practices. Gained hands-on experience in JavaScript and CSS frameworks.',
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <p className="text-gray-500 text-sm">2019 - 2021</p>
            </div>

            {/* Education Item 2 */}
            <div className="dark:bg-gray-800 bg-violet-400 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-200">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-gray-600">ABC University</p>
              <p className="text-gray-500 text-sm">2015 - 2019</p>
            </div>

            {/* Education Item 3 */}
            <div className="dark:bg-gray-800 bg-violet-400 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-200">
                Higher Secondary Certificate (HSC)
              </h3>
              <p className="text-gray-600">National College</p>
              <p className="text-gray-500 text-sm">2013 - 2015</p>
            </div>

            {/* Education Item 4 */}
            <div className="dark:bg-gray-800 bg-violet-400 rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-gray-200">
                Secondary School Certificate (SSC)
              </h3>
              <p className="text-gray-600">Central High School</p>
              <p className="text-gray-500 text-sm">2011 - 2013</p>
            </div>
          </div>
        </div>
      </section>


      {/* Technical Skills */}
      <section id="technical-skills"
        style={{
          backgroundImage: `url(${animation})`,
        }}
        className="p-8 bg-cover bg-center text-white font-bold">
        <h2 className="text-4xl font-bold text-teal-400 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
          {/* React & Redux */}
          <div className="flex items-center space-x-4">
            <FaReact className="text-blue-500 text-8xl font-extrabold" />
            <p className=" text-sm">
              <span className="font-extrabold text-teal-500">React & Redux:</span> Developing dynamic, responsive front-ends with React, Redux, and hooks for state management.
            </p>
          </div>

          {/* Node.js & Express */}
          <div className="flex items-center space-x-4">
            <FaNodeJs className="text-green-600 text-8xl font-extrabold" />
            <p className=" text-sm">
              <span className="font-extrabold text-teal-500">Node.js & Express:</span> Building scalable RESTful APIs and real-time services using Node.js and Express, with JWT authentication.
            </p>
          </div>

          {/* Laravel & PHP */}
          <div className="flex items-center space-x-4">
            <FaLaravel className="text-red-500 text-8xl font-extrabold" />
            <p className=" text-sm">
              <span className="font-extrabold text-teal-500">Laravel & PHP:</span> Developing secure and maintainable back-end systems with Laravel, leveraging Eloquent ORM and MySQL.
            </p>
          </div>

          {/* Prisma */}
          <div className="flex items-center space-x-4">
            <SiPrisma className="text-indigo-600 text-8xl font-extrabold" />
            <p className=" text-sm">
              <span className="font-extrabold text-teal-500">Prisma:</span> Managing database schemas and queries efficiently using Prisma ORM for both SQL and NoSQL databases.
            </p>
          </div>

          {/* Tailwind CSS */}
          <div className="flex items-center space-x-4">
            <SiTailwindcss className="text-teal-500 text-8xl font-extrabold" />
            <p className=" text-sm">
              <span className="font-extrabold text-teal-500">Tailwind CSS:</span> Designing responsive, modern UIs using Tailwind CSS for rapid styling and consistent design systems.
            </p>
          </div>

          {/* MongoDB & SQL */}
          <div className="flex items-center space-x-4">
            <SiMongodb className="text-green-700 text-8xl font-extrabold" />
            <p className=" text-sm">
              <span className="font-extrabold text-teal-500">MongoDB & SQL:</span> Managing data with MongoDB for NoSQL solutions and MySQL/PostgreSQL for relational databases.
            </p>
          </div>

          {/* Git & CI/CD */}
          <div className="flex items-center space-x-4">
            <FaGitAlt className="text-orange-600 text-8xl font-extrabold" />
            <p className=" text-sm">
              <span className="font-extrabold text-teal-500">Git & CI/CD:</span> Version control with Git and automating deployments using CI/CD pipelines (GitHub Actions, Jenkins).
            </p>
          </div>
        </div>

      </section>
      {/* Contact Info */}
      <section>
        {/* <Contact></Contact> */}
      </section>
    </header>
  );
};

export default AboutHead;