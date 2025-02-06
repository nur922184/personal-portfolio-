import { FaMapMarkerAlt, FaClock, FaEnvelope, FaGlobe, FaFacebook, FaGithub, FaLinkedin, FaDev } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className=" w-4/6 text-center mx-auto p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">📞 Contact Information</h2>
      <ul className="space-y-3">
        <li className="flex items-center">
          <FaMapMarkerAlt className="mr-2 text-blue-400" /> Dhaka, Bangladesh
        </li>
        <li className="flex items-center">
          <FaClock className="mr-2 text-green-400" /> 09:25 (UTC +06:00)
        </li>
        <li className="flex items-center">
          <FaEnvelope className="mr-2 text-red-400" /> moniruzzamam2428@gmail.com
        </li>
        <li className="flex items-center">
          <FaFacebook className="mr-2 text-blue-600" />
          <a href="https://www.facebook.com/moniruzzaman.kendua" className="hover:underline">
            Facebook
          </a>
        </li>
        <li className="flex items-center">
          <FaLinkedin className="mr-2 text-blue-500" />
          <a href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285" className="hover:underline">
            LinkedIn
          </a>
        </li>
        <li className="flex items-center">
          <FaGithub className="mr-2 text-gray-400" />
          <a href="https://github.com/nur922184" className="hover:underline">
            GitHub
          </a>
        </li>
        <li className="flex items-center">
          <FaDev className="mr-2 text-white" />
          <a href="https://dev.to/moniruzzaman2428" className="hover:underline">
            Dev.to Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
