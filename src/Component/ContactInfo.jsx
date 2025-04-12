import {
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaDev,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="w-full sm:w-4/6 text-center mx-auto p-6 dark:bg-gray-800 bg-violet-400 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">📞 Contact Information</h2>
      <ul className="space-y-4 text-left text-sm sm:text-base">
        <li className="flex items-center">
          <FaMapMarkerAlt className="mr-3 text-blue-400 text-xl" />
          <span>Dhaka, Bangladesh</span>
        </li>
        <li className="flex items-center">
          <FaClock className="mr-3 text-green-400 text-xl" />
          <span>09:25 (UTC +06:00)</span>
        </li>
        <li className="flex items-center">
          <FaEnvelope className="mr-3 text-red-400 text-xl" />
          <a
            href="mailto:moniruzzamam2428@gmail.com"
            className="hover:underline break-all"
          >
            moniruzzamam2428@gmail.com
          </a>
        </li>
        <li className="flex items-center">
          <FaFacebook className="mr-3 text-blue-600 text-xl" />
          <a
            href="https://www.facebook.com/moniruzzaman.kendua"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Facebook
          </a>
        </li>
        <li className="flex items-center">
          <FaLinkedin className="mr-3 text-blue-500 text-xl" />
          <a
            href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center">
          <FaGithub className="mr-3 text-gray-300 text-xl" />
          <a
            href="https://github.com/nur922184"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
        <li className="flex items-center">
          <FaDev className="mr-3 text-white text-xl" />
          <a
            href="https://dev.to/moniruzzaman2428"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Dev.to Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
