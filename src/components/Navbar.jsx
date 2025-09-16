import { useState } from "react";
import { FiArrowRight, FiClock, FiImage } from "react-icons/fi";

const Navbar = () => {
  const [isEventsHovered, setIsEventsHovered] = useState(false);

  const navLinkClasses = "relative text-gray-300 hover:text-white transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:h-[2px] after:w-0 after:bottom-[-6px] after:left-1/2  after:bg-gradient-to-r after:from-teal-400 after:to-cyan-500 after:transition-all after:duration-300 hover:after:w-1/2";

  return (
    <header className="w-full p-6">
      <nav className="mx-auto flex items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
            <img src="/Mask group.png" alt="" />
            <span className="text-2xl font-bold tracking-wider">IEEE</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex justify-center items-center space-x-8 w-full text-gray-300 font-medium">
          <li><a href="#" className={navLinkClasses}>About</a></li>
          {/* Events Dropdown */}
          <li 
            className="relative"
            onMouseEnter={() => setIsEventsHovered(true)}
            onMouseLeave={() => setIsEventsHovered(false)}
          >
            <a href="#" className={`flex items-center ${navLinkClasses}`}>Events</a>
            {isEventsHovered && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-gray-900/50 backdrop-blur-md rounded-lg border border-gray-700 shadow-lg p-2">
                <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/70 rounded-md">
                  <FiImage className="text-teal-400" />
                  <span>Gallery</span>
                  <FiArrowRight className="ml-auto" />
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 text-sm text-gray-300 hover:bg-gray-800/70 rounded-md">
                  <FiClock className="text-teal-400" />
                  <span>Past & Upcoming events</span>
                </a>
              </div>
            )}
          </li>
          <li><a href="#" className={navLinkClasses}>Careers</a></li>
          <li><a href="#" className={navLinkClasses}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;