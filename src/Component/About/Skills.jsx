import { motion } from "framer-motion";
import {
  FaReact, FaHtml5, FaCss3Alt, FaNodeJs,
  FaLaptopCode, FaGithub, FaBootstrap,
  FaBug, FaFigma
} from "react-icons/fa";
import {
  SiJavascript, SiTailwindcss, SiWebpack,
  SiMongodb, SiExpress, SiRedux, SiNextdotjs
} from "react-icons/si";
import { useEffect, useState } from "react";

/* ================= DATA ================= */
const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 95 },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, level: 90 },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" />, level: 88 },
  { name: "React.js", icon: <FaReact className="text-cyan-400" />, level: 85 },
  { name: "Redux Toolkit", icon: <SiRedux className="text-purple-500" />, level: 80 },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" />, level: 75 },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, level: 70 },
  { name: "Express.js", icon: <SiExpress className="text-gray-300" />, level: 70 },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, level: 65 },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" />, level: 85 },
  { name: "Bootstrap", icon: <FaBootstrap className="text-indigo-500" />, level: 80 },
  { name: "Git & GitHub", icon: <FaGithub />, level: 75 },
  { name: "Webpack", icon: <SiWebpack className="text-blue-400" />, level: 65 },
  { name: "VS Code", icon: <FaLaptopCode className="text-blue-500" />, level: 90 },
  { name: "Figma", icon: <FaFigma className="text-pink-400" />, level: 70 },
  { name: "Debugging", icon: <FaBug className="text-red-400" />, level: 85 },
];

/* ================= COUNTER ================= */
const Counter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start++;
      setCount(start);
      if (start === value) clearInterval(interval);
    }, 15);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}%</span>;
};

/* ================= ANIMATION ================= */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const card = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

/* ================= COMPONENT ================= */
const Skills = () => {
  return (
    <section className="">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-white mb-14"
        >
          Technical <span className="text-teal-400">Skills</span>
        </motion.h3>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              variants={card}
              whileHover={{ y: -6 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5
                         backdrop-blur-md transition hover:border-teal-400"
            >
              {/* ICON */}
              <div className="text-3xl mb-3 text-teal-400">
                {skill.icon}
              </div>

              {/* NAME */}
              <p className="text-sm font-semibold text-white mb-3">
                {skill.name}
              </p>

              {/* PROGRESS */}
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>Proficiency</span>
                <Counter value={skill.level} />
              </div>

              <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 0.8 }}
                  className="h-full bg-gradient-to-r from-teal-400 to-cyan-400"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
