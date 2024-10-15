import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        {/* Animation container */}
        <div className="relative inline-block text-6xl font-bold text-gray-900">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-ping absolute h-48 w-48 rounded-full bg-indigo-400 opacity-75"></div>
            <div className="relative z-10">404</div>
          </div>
        </div>
        <div className="mt-10 text-lg font-bold text-gray-600">
          Oops! The page you're looking for does not exist.
        </div>
        <Link
          to="/"
          className="mt-56 inline-block px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
