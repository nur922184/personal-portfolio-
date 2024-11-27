import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Work = () => {
  // Sample projects data
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website built with React and Tailwind CSS.',
      github: 'https://github.com/your-username/portfolio',
      demo: 'https://your-portfolio.com',
    },
    {
      title: 'E-commerce App',
      description: 'An e-commerce platform with shopping cart functionality and payment integration.',
      github: 'https://github.com/your-username/ecommerce-app',
      demo: 'https://ecommerce-demo.com',
    },
    {
      title: 'Weather App',
      description: 'A weather app that shows real-time weather data using OpenWeather API.',
      github: 'https://github.com/your-username/weather-app',
      demo: 'https://weather-app-demo.com',
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-12">
      <div className="container mx-auto md:mt-8">
        <h2 className="text-3xl font-bold text-center mb-8">My Works</h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
