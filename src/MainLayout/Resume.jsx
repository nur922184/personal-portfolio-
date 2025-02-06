import React from "react";
import { FaDownload } from "react-icons/fa";
import resume from '../assets/loopcv-animation.gif'

const Resume = () => {
  // রিজিউমের লিংক এখানে দিন
  const resumeUrl = "https://drive.google.com/file/d/1TY4hrgfVKLmMxo0PsSuiz25kQp7PPyuW/view";

  return (
    <div
      style={{
        backgroundImage: `url(${resume})`,
      }}
      className="flex flex-col items-center bg-cover bg-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4 text-teal-600">My Resume</h1>

      {/* Download Button */}
      <a
        href={resumeUrl}
        target="_blank"
        download="Md_Moniruzzaman_Resume.pdf"
        className="mt-4 flex items-center bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg transition"
      >
        <FaDownload className="mr-2" />
        Download Resume
      </a>
    </div>
  );
};


export default Resume;