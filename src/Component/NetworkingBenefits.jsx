import React, { useState } from "react";
import { FaCopy, FaCheck } from "react-icons/fa";

const NetworkingBenefits = () => {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const benefits = [
    {
      title: "Build Relationships",
      description:
        "Networking can help you develop meaningful relationships with other professionals in your industry. These relationships can provide support, guidance, and opportunities for collaboration.",
    },
    {
      title: "Access Job Opportunities",
      description:
        "Networking can help you discover new job opportunities, including unadvertised jobs and internships.",
    },
    {
      title: "Gain Career Advice",
      description:
        "Networking can help you gain career advice and increase your chances of being recommended for positions.",
    },
    {
      title: "Stay Updated on Industry Developments",
      description:
        "A strong professional network can help you stay updated on the latest industry developments and provide insights into the job market.",
    },
    {
      title: "Learn New Skills",
      description:
        "Networking can help you learn new skills and exchange ideas with other professionals in your field.",
    },
    {
      title: "Improve Your Soft Skills",
      description:
        "Networking can help you improve your soft skills and further develop your areas of expertise.",
    },
    {
      title: "Raise Your Personal Profile",
      description:
        "Networking can help you raise your personal profile and increase your visibility with senior management.",
    },
    {
      title: "Gain a Competitive Edge",
      description:
        "Networking can help you gain a competitive edge in your industry.",
    },
  ];

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
  };

  return (
    <section className="py-8 px-4">
      <h2 className="text-3xl font-bold text-center dark:text-gray-100 mb-6">
        Networking is Important for Career Growth
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className=" p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold text-teal-600">
                {benefit.title}
              </h3>
              <button
                onClick={() =>
                  handleCopy(`${benefit.title}: ${benefit.description}`, index)
                }
                className="text-gray-500 hover:text-teal-500"
              >
                {copiedIndex === index ? <FaCheck /> : <FaCopy />}
              </button>
            </div>
            <p className="dark:text-gray-200 mt-2">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetworkingBenefits;
