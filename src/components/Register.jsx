import { FaArrowRight } from "react-icons/fa";

export default function Register() {
  return (
    <section className="bg-gradient-to-r from-black to-[#0f1c1c] text-gray-300 py-16 px-6">
      <div className="mx-auto">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-8 relative inline-block">
          Register Now
          <span className="block w-10 h-[2px] bg-teal-400 mt-1"></span>
        </h2>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Poster / Image */}
          <div className="bg-gray-800 h-72 md:h-96 flex items-center justify-center">
            <img
              src="https://placehold.co/600x600"
              alt="Event Poster"
              className="object-cover h-full w-full"
            />
          </div>

          {/* Event Details */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-semibold mb-4">Event Name</h3>
            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>

            {/* Register Button */}
            <button className="flex items-center gap-2 bg-white text-black px-2 py-2 rounded-full font-medium w-fit hover:bg-teal-400 hover:text-black transition">
                <div className="rounded-full bg-teal-400 p-2">
              <FaArrowRight />
                </div>
              Swipe to register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
