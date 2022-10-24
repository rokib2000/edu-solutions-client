import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-primary text-primary-content mb-12">
      <div className="navbar container mx-auto">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <div className="navbar-end">
                <label className="swap">
                  <input type="checkbox" />
                  <div className="swap-on btn">Light</div>
                  <div className="swap-off btn">Dark</div>
                </label>

                <Link to="/login" className="btn mt-2">
                  Login
                </Link>
                <Link to="/register" className="btn mt-3">
                  Register
                </Link>
              </div>
            </ul>
          </div>
          <Link to="/" className=" normal-case text-2xl font-bold">
            Edu Solutions
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end ">
          <div className="hidden lg:flex">
            {" "}
            <label className="swap">
              <input type="checkbox" />
              <div className="swap-on btn">Light</div>
              <div className="swap-off btn">Dark</div>
            </label>
            <Link to="/login" className="btn ml-2">
              Login
            </Link>
            <Link to="/register" className="btn ml-2">
              Register
            </Link>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <p className="justify-between">Profile</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;