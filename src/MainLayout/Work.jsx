import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import lifelink from '../assets/lifelink.png'

const Works = () => {
  const projects = [
    {
      id: 1,
      title: "Winter Clothing Donation Website",
      description:
        "A platform to connect donors with volunteers to assist vulnerable populations during winter.",
      liveDemo: "https://assignment-nine-4896f.web.app/",
      sourceCode: "https://github.com/username/donation-site",
      image: "https://i.ibb.co.com/gwNZ04s/Screenshot-2024-11-28-085754.png",
    },
    {
      id: 2,
      title: "Gadget Heaven Accessories",
      description:
        "A web app to manage cricket player availability and selections for matches.",
      liveDemo: "https://magical-gumption-061d0e.netlify.app/",
      sourceCode: "https://github.com/nur922184/gadget-heaven-accessories",
      image: "https://i.ibb.co.com/bHP8G53/Screenshot-2024-11-28-091404.png",
    },
    {
      id: 3,
      title: " Lifelink facilitators.",
      description:
        "To be the leading online platform for fostering meaningful and lasting relationships across Bangladesh and beyond.",
      liveDemo: "https://my-final-project-36ab9.web.app/",
      sourceCode: "https://github.com/nur922184/life-link-client",
      image: lifelink,
    },
    {
      id: 4,
      title: "Crowd Funding",
      description:
        "CrowdFund is a platform where people can raise money for different projects, ideas, or causes by inviting others to contribute financially.",
      liveDemo: "https://my-assignment-ten-57a0d.web.app/",
      sourceCode: "https://github.com/nur922184/crowd-funding-client-10",
      image: "https://i.ibb.co.com/m9RctdG/Screenshot-2024-12-20-233742.png",
    },
  ];


  return (
    <section id="my-works" className="py-11">
      <div className="container mx-auto px-4 md:mt-16">

        <h2 className="text-4xl font-bold dark:text-teal-400 text-gray-900 text-center mb-16">
          My Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="dark:bg-gray-800 bg-violet-400  shadow-md p-6 hover:shadow-lg transition rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-72 object-cover object-center rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-3 dark:text-gray-200 text-gray-900">
                  {project.title}
                </h3>
                <p className="dark:text-gray-500 text-gray-800 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-teal-500 flex items-center hover:text-teal-700"
                  >
                    Live Demo <FaExternalLinkAlt className="ml-2" />
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 flex items-center hover:text-gray-700"
                  >
                    Source Code <FaGithub className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[70%] mx-auto">
        <div className="">
          <ul className="space-y-8 mt-8">
            <li className="md:mt-8">
              <strong>Jan 2026:</strong> Initial planning and design.
            </li> 
            <li>
              <strong>Feb 2026:</strong> Backend development and database setup.
            </li> 
            <li>
              <strong>Mar 2026:</strong> Frontend integration and testing.
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap mt-5 mx-auto w-96">
          {["React", "Node.js", "MongoDB", "Tailwind CSS"].map((tech, index) => (
            <span
              key={index}
              className="bg-teal-200 text-teal-800 text-sm px-2 py-1 rounded-full mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-8 bg-violet-400  dark:bg-gray-800 p-4 rounded-lg shadow-lg">
          <blockquote>
            <p className="dark:text-gray-400 italic">
              "This e-commerce platform has significantly improved our online sales.
              Excellent work and great attention to detail!"
            </p>
            <footer className="mt-2 dark:text-teal-500 font-bold">— John Doe, CEO of XYZ</footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Works;
