import { Link } from 'react-scroll';
import img from '../../assets/mt.png'
import { FaEnvelope, FaFacebook, FaGithub,  FaLinkedin,  FaPhone, FaTimes, FaYoutube, } from 'react-icons/fa';

const SideNavigation = () => {

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="drawer md:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className=" btn btn-sm dark:bg-gray-950 text-xl drawer-button text-teal-400 md:hidden">
            ≫
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <nav
            className={`h-[85%] md:h-[78%] md:w-52  lg:w-64 bg-violet-400 dark:bg-gray-800 dark:text-white flex flex-col py-4 px-3 transition-transform duration-300 z-40 rounded-lg`}
          >
            <div className="drawer-content mr-4 items-center">
              {/* Page content here */}
              <label htmlFor="my-drawer-2" className=" btn  text-teal-400 btn-sm text-xl drawer-button md:hidden">
                ≪
              </label>
            </div>
            {/* Profile Section */}
            <div className="mb-8 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4" data-aos="zoom-in" >
                <img
                  src={img} // Replace with your profile image link
                  alt="Md Moniruzzaman Tonoy"
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-xl font-bold text-center">Md Moniruzzaman Tonoy</h2>
              <p className="text-gray-400 text-center text-sm">Full Stack Developer</p>
            </div>
            <div className="flex space-x-3 mb-6">
              <a
                href="https://github.com/moniruzzaman2428"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
              >
                <FaGithub size={15} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-moniruzzaman-tonoy-7bb52b285/"
                target="_blank"
                rel="noopener noreferrer"
                className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
              >
                <FaLinkedin size={15} />
              </a>
              <a
                href="https://x.com/moniruzzaman_24"
                target="_blank"
                className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
              >
                <FaTimes size={15} />
              </a>
              <a
                href="https://www.facebook.com/moniruzzaman.kendua"
                target="_blank"
               className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
              >
                <FaFacebook size={15} />
              </a>
              <a
                href="mailto:moniruzzaman2428@gmail.com"
                target="_blank"
               className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
              >
                <FaEnvelope size={15} />
              </a>
              <a
                href="https://www.youtube.com/@moniruzzamam2428"
                target="_blank"
                className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
              >
                <FaYoutube size={15} />
              </a>
              <a
                href="tel:+8801618160869"
               className="dark:hover:text-white dark:text-teal-400 transition text-gray-950 hover:text-red-700"
              >
                <FaPhone size={15}/>
              </a>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  to="introduction"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition hover:ml-1"
                >
                  ▷ Introduction
                </Link>
              </li>
              <li>
                <Link
                  to="work-experience"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition hover:ml-1"
                >
                  ▷ Work Experience
                </Link>
              </li>
              <li>
                <Link
                  to="educational-qualification"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition hover:ml-1"
                >
                  ▷ Studies
                </Link>
              </li>
              <li>
                <Link
                  to="technical-skills"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition hover:ml-1"
                >
                  ▷ Technical Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition hover:ml-1"
                >
                  ▷ Contact
                </Link>
              </li>
            </ul>
            {/* Language Switcher */}
            <div className="mt-auto">
              <p className="text-teal-400 text-sm md:mt-3">Language</p>
              <div className="flex space-x-2 md:mb-4">
                <div className="text-sm text-white px-4 py-2 rounded">
                  English
                </div>
                <div className="text-sm text-white px-4 py-2 rounded">
                  Bangla
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Sidebar */}

    </>
  );
};

export default SideNavigation;
