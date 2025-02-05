import React from "react";
import { FaDownload } from "react-icons/fa";

const Resume = () => {
  // রিজিউমের লিংক এখানে দিন
  const resumeUrl = "https://drive.google.com/file/d/1TY4hrgfVKLmMxo0PsSuiz25kQp7PPyuW/view?usp=sharing"; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">My Resume</h1>

      {/* Resume Preview */}
      <div className="w-full max-w-4xl bg-violet-400 dark:bg-gray-800 dark:text-white rounded-lg shadow-md p-4">
        <iframe
          src={resumeUrl}
          className="w-full h-[500px] rounded-md"
          title="Resume"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href={resumeUrl}
        target="_blank"
        download="Md_Moniruzzaman_Resume.pdf"
        className="mt-4 flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
      >
        <FaDownload className="mr-2" />
        Download Resume
      </a>
    </div>
  );
};


export default Resume;