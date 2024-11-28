import React, { useState } from "react";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa";
import img from '../assets/2024032.jpg'

const AboutMe = () => {
  const [copied, setCopied] = useState(false);

  const bioSteps = [
    "Hi! I'm Md Moniruzzaman Tonoy, a 16-year-old aspiring coder and frontend developer from Kendua, Netrokona.",
    "I have a passion for crafting visually appealing and user-friendly web applications.",
    "With experience in modern technologies like React and Tailwind CSS, I focus on writing clean, scalable code to deliver seamless user experiences.",
    "Beyond coding, I enjoy photography, which fuels my creativity and attention to detail.",
    "I’m always eager to learn, grow, and collaborate on exciting projects.",
    "My goal is to build solutions that positively impact people's lives while honing my skills in the tech world.",
  ];

  const handleCopy = () => {
    const bioText = bioSteps.join(" ");
    navigator.clipboard.writeText(bioText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div className="md:max-w-[70%] mx-auto p-6 rounded-lg shadow-lg">
      <div className="flex flex-col items-center">
        {/* Profile Picture */}
        <img
          src={img} // Replace with your image URL
          alt="Md Moniruzzaman Tonoy"
          className="w-32 h-32 rounded-full bg-cover mb-6 shadow-lg"
        />

        <h1 className="text-2xl font-bold mb-4 text-center text-teal-400">About Me</h1>
      </div>

      {/* Bio Steps */}
      <ol className="list-decimal list-inside space-y-4 text-gray-200">
        {bioSteps.map((step, index) => (
          <li key={index} className="pl-2">{step}</li>
        ))}
      </ol>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="flex items-center justify-center gap-2 mt-6 px-4 py-2 bg-teal-500 text-white font-medium rounded-lg shadow hover:bg-teal-600 transition"
      >
        {copied ? <FaClipboardCheck /> : <FaClipboard />}
        {copied ? "Copied!" : "Copy All"}
      </button>
    </div>
  );
};

export default AboutMe;
