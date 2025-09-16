import { FiArrowRight } from 'react-icons/fi';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Background Image/Gradient */}
      <div className="absolute top-0 left-0 w-full h-screen">
        {/* You can replace this with an actual image or a more complex gradient */}
        <img className='w-full h-auto' src="upscalemedia2-ieee 1.png" alt="" />
      </div>
      
      {/* Small glowing dots for decoration */}
      <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-[#fde047] rounded-full blur-[2px]"></div>
      <div className="absolute top-[30%] right-[15%] w-1 h-1 bg-[#a78bfa] rounded-full blur-[1px]"></div>
      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 bg-[#67e8f9] rounded-full blur-[1px]"></div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col h-full">
        <Navbar />
        
        {/* Hero Text & CTA */}
        <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Classroom</span>.
            Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">Ordinary</span>.
          </h1>
          <p className="max-w-xl text-lg text-gray-300 mb-48">
            At the IEEE Student Branch, we turn theoretical knowledge into real-world impact. Be part of something bigger.
          </p>
          <button className="flex items-center gap-2 group px-6 py-3 font-semibold text-black bg-teal-400 rounded-full transition-transform focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-opacity-50">
            Join the community
            <FiArrowRight  className='-rotate-45 group-hover:rotate-0 transition-all'/>
          </button>
        </main>
      </div>
    </section>
  );
};

export default Hero;