import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-6 mt-12">
      <div className="max-w-[1170px] mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">

        {/* Left Section */}
        <div className="text-center sm:text-left  space-y-2">
          <h2 className="font-bold text-lg">BookPoka</h2>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center Section */}
        <div className="flex gap-4">
          <Link to="/" className="hover:text-white text-sm">Home</Link>
          <Link to="/listed-books" className="hover:text-white text-sm">Books</Link>
          <Link to="/reading" className="hover:text-white text-sm">Reading</Link>
          <Link to="/wishlist" className="hover:text-white text-sm">Wishlist</Link>
        </div>

        {/* Right Section */}
        <div className="text-center sm:text-right space-y-2">
          <p className="text-sm">Follow Me on:</p>
          <div className="flex gap-3 justify-center sm:justify-end mt-1">
            <a href="https://www.facebook.com/IamMahbubZaman" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="https://x.com/mahbub_zaman_" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/md_mahbub_zaman/" target="_blank" rel="noopener noreferrer" className="hover:text-white text-xl">
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
