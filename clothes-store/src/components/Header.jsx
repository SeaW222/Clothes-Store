import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/d634.jpg";

const Header = (props) => {
  return (
    <header className="text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Menu */}
        <nav className="space-x-6">
          <a
            href="#"
            className="hover:text-yellow-400 transition duration-300 text-black"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition duration-300 text-black"
          >
            Trend
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition duration-300 text-black"
          >
            New
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition duration-300 text-black"
          >
            Sale
          </a>
        </nav>

        {/* Login Button */}
        <div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-500 ease-in-out transform hover:scale-110 hover:rotate-2">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
