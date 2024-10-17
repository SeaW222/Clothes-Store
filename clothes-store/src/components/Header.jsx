import React from "react";

const Header = (props) => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="#">LOGO</a>
        </div>

        {/* Menu */}
        <nav className="space-x-6">
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Trend
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            New
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Sale
          </a>
        </nav>

        {/* Login Button */}
        <div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-2">
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
