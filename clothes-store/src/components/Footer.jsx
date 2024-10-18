import React from "react";

const Footer = (props) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Thông tin bản quyền */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>

        {/* Liên kết xã hội */}
        <div className="space-x-4">
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Facebook
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Twitter
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-400 transition duration-300">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
