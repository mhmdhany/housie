import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      {/* Logo */}
      <div className="container mx-auto flex justify-between items-center sm:flex-row flex-col">
        <Link to=".">
          <img src={logo} alt="logo" />
        </Link>
        {/* Login and Sign up */}
        <div className="flex items-center gap-6  mt-8 sm:mt-0">
          <Link className="hover:text-violet-900 transition" to="">
            Log in
          </Link>
          <Link
            className="text-white bg-violet-900 hover:bg-violet-800 transition py-3 px-4 rounded-lg"
            to=""
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
