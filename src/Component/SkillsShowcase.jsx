import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaLaptopCode,
  FaGithub,
  FaBug,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  { name: "React.js", icon: <FaReact className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-700" /> },
  {
    name: "REST API Development & Integration",
    icon: <FaDatabase className="text-yellow-500" />,
  },
  {
    name: "Responsive Web Design",
    icon: <FaLaptopCode className="text-purple-500" />,
  },
  {
    name: "Authentication (JWT, Firebase)",
    icon: <SiFirebase className="text-yellow-400" />,
  },
  {
    name: "Git, GitHub & Deployment (Vercel, Netlify, Heroku)",
    icon: <FaGithub className="text-gray-900" />,
  },
  {
    name: "Problem Solving & Debugging",
    icon: <FaBug className="text-red-500" />,
  },
];

export default function SkillsShowcase() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
      <div className="dark:bg-gray-800 bg-violet-400 p-6 sm:p-8 rounded-2xl shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-4 dark:bg-gray-700 bg-violet-300 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <span className="text-2xl sm:text-3xl">{skill.icon}</span>
              <p className="text-white text-sm sm:text-lg">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

