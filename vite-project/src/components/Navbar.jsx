import React from "react";
import logo from "../assets/image.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      {/* <header>
        <div>

        </div>
        <nav>

        </nav>
        <div>

        </div>
      </header> */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-md">
        <div>
          <img src={logo} alt="let's learn logo " className="h-14 w-auto" />
        </div>
        <div className="flex items-center gap-8 text-gray-700 font-medium">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/courses">Our Courses</Link>
          <Link to="/aftersee">After SEE</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/events">Events</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className=" text-black font-semibold px-6 py-3 ">
          Register Now →
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
