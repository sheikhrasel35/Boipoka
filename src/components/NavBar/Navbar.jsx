import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      {/* Left Section */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/listed-books">Listed Books</Link>
            </li>
            <li>
              <Link to="/reading">Pages to Read</Link>
            </li>
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          BooiPoka
        </Link>
      </div>

      {/* Center Section */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listed-books">Listed Books</Link>
          </li>
          <li>
            <Link to="/reading">Pages to Read</Link>
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="navbar-end flex space-x-4">
        <Link
          to="/sign-in"
          className="btn px-4 py-2 text-sm font-normal bg-[#23BE0A] text-white"
        >
          Sign In
        </Link>
        <Link
          to="/sign-up"
          className="btn px-4 py-2 text-sm font-normal hidden sm:block bg-[#59C6D2] text-white"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
