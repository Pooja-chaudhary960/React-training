import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 px-8 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="rounded-md px-3 py-2 font-medium text-white transition hover:bg-gray-700 hover:text-blue-400"
          >
            Home
          </Link>

          <Link
            to="/user"
            className="rounded-md px-3 py-2 font-medium text-white transition hover:bg-gray-700 hover:text-blue-400"
          >
            User
          </Link>

          <Link
            to="/form"
            className="rounded-md px-3 py-2 font-medium text-white transition hover:bg-gray-700 hover:text-blue-400"
          >
            Form
          </Link>

          <Link
            to="/student"
            className="rounded-md px-3 py-2 font-medium text-white transition hover:bg-gray-700 hover:text-blue-400"
          >
            Student
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
