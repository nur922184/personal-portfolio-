import { Link } from 'react-scroll';
import img from '../../assets/mt.png'

const SideNavigation = () => {

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label htmlFor="my-drawer-2" className=" btn btn-sm bg-gray-950 text-xl drawer-button lg:hidden">
            ↣
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <nav
            className={`h-[85%] md:h-[78%]  w-64 bg-gray-800 text-white flex flex-col py-4 px-3 transition-transform duration-300 z-40 rounded-lg`}
          >
            <div className="drawer-content mr-4 items-center">
              {/* Page content here */}
              <label htmlFor="my-drawer-2" className=" btn btn-sm text-xl drawer-button lg:hidden">
                ↢
              </label>
            </div>
            {/* Profile Section */}
            <div className="mb-8 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                <img
                  src={img} // Replace with your profile image link
                  alt="Md Moniruzzaman Tonoy"
                  className="w-full h-full"
                />
              </div>
              <h2 className="text-xl font-bold text-center">Md Moniruzzaman Tonoy</h2>
              <p className="text-gray-400 text-center text-sm">Full Stack Developer</p>
            </div>

            {/* Navigation Links */}
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  to="introduction"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition"
                >
                  Introduction
                </Link>
              </li>
              <li>
                <Link
                  to="work-experience"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition"
                >
                  Work Experience
                </Link>
              </li>
              <li>
                <Link
                  to="studies"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition"
                >
                  Studies
                </Link>
              </li>
              <li>
                <Link
                  to="technical-skills"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition"
                >
                  Technical Skills
                </Link>
              </li>
              <li>
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="cursor-pointer text-gray-400 hover:text-teal-400 text-sm transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* Language Switcher */}
            <div className="mt-auto">
              <p className="text-gray-400 text-sm md:mt-3">Language</p>
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
