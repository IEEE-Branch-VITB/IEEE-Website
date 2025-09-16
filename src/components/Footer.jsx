import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f1c1c] to-black text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 items-start">
        
        {/* Logo + Tagline */}
        <div>
          <div className="flex items-center gap-2">
            <img
              src="/Mask group.png"
              alt="IEEE Logo"
              className="h-8 w-8"
            />
            <span className="text-xl font-bold">IEEE</span>
          </div>
          <p className="mt-2 text-sm text-gray-400">
            A student chapter in VIT Bhopal
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">About</a></li>
            <li><a href="#" className="hover:text-teal-400">Events</a></li>
            <li><a href="#" className="hover:text-teal-400">Careers</a></li>
            <li><a href="#" className="hover:text-teal-400">Contact</a></li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white font-semibold mb-3">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-teal-400">About IEEE</a></li>
            <li><a href="#" className="hover:text-teal-400">Research Papers</a></li>
            <li><a href="#" className="hover:text-teal-400">Community</a></li>
            <li><a href="#" className="hover:text-teal-400">Blog posts</a></li>
          </ul>
        </div>

        {/* Social + Subscribe */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-white font-semibold mb-3">Follow us On</h3>
          <div className="flex space-x-6 mb-6 text-2xl">
            <a href="#" className="hover:text-teal-400"><FaInstagram /></a>
            <a href="#" className="hover:text-teal-400"><FaLinkedin /></a>
            <a href="#" className="hover:text-teal-400"><FaTwitter /></a>
          </div>

          <input
            type="email"
            placeholder="e.g, John@example.com"
            className="px-4 py-2 mb-4 text-sm w-full rounded-full border border-gray-700 bg-transparent text-gray-200 placeholder-gray-500 focus:outline-none focus:border-teal-400"
          />

          <button className="bg-teal-500 w-full px-6 py-2 rounded-full text-black font-medium hover:bg-teal-400 transition">
            Subscribe For Updates
          </button>
        </div>
      </div>
    </footer>
  );
}
