import React from "react";
import Thanks from '../assets/thank-you-8-9441.gif'


const ThankYou = () => {
  return (
    <div className="md:w-[70%] mx-auto bg-gradient-to-r from-black via-gray-900 to-green-900 p-10 text-white rounded-lg shadow-lg">
      <div className="text-center">
        {/* Title */}
        <img className="w-60 mx-auto" src={Thanks} alt="" />

        {/* Description */}
        <p className="text-gray-300 mb-6 md:w-96 mx-auto">
          Stay updated with my latest insights on web development, technology,
          and engineering. I write occasionally about modern web frameworks,
          tools, and the intersection of design and technology.
        </p>

        {/* Email Subscription Form */}
        <form className="flex justify-center items-center space-x-2">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-1 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-900 w-72 "
          />
          <button
            type="submit"
            className="px-6 py-2 btn btn-sm w-26 bg-white text-black font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThankYou;
