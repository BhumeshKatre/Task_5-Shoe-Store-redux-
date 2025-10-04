import React from "react";
import Logo from "/imgs/logo.png";
import { Link, NavLink } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";

const Navbar = () => {
  return (
    <header className="sticky top-0 left-0  grid grid-cols-2 justify-between gap-4 px-5 py-2 w-full shadow backdrop-blur-sm bg-white/20 items-center z-40 ">
      <div className="flex gap-5 items-center">
        <div className="">
          <Link>
            <img
              className="w-40 h-12 hover:-translate-0.5 rounded-xl  shadow-emerald-50"
              src={Logo}
              alt=""
            />
          </Link>
        </div>
        <nav className="flex  gap-8">
          <NavLink to="/" className="flex flex-col items-center">
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? "text-blue-400 "
                      : "text-gray-500 hover:text-blue-400"
                  }
                >
                  shop
                </span>
                <div
                  className={`h-0.5 w-full ${isActive ? "bg-blue-500 " : ""}`}
                ></div>
              </>
            )}
          </NavLink>

          <NavLink to="/cart" className="flex flex-col items-center">
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? "text-blue-400 "
                      : "text-gray-500 hover:text-blue-400"
                  }
                >
                  cart
                </span>
                <div
                  className={`h-0.5 w-full ${isActive ? "bg-blue-500 " : ""}`}
                ></div>
              </>
            )}
          </NavLink>

          <NavLink to="/payment" className="flex flex-col items-center">
            {({ isActive }) => (
              <>
                <span
                  className={
                    isActive
                      ? "text-blue-400  "
                      : "text-gray-500 hover:text-blue-400 "
                  }
                >
                  payment
                </span>
                <div
                  className={`h-0.5 w-full ${isActive ? "bg-blue-500 " : ""}`}
                ></div>
              </>
            )}
          </NavLink>
        </nav>
      </div>
      <div className="flex gap-5   items-center justify-end">
        <div>
          <div className="bg-gray-100 border-0.5 border-gray-400 flex gap-2 items-center  px-3 py-1 rounded-md w-92">
            <FaSearch className="text-gray-400" />
            <input
              className=" ms-2 p-1 outline-none border-none"
              placeholder="Search Shoes..."
              type="text"
            />
          </div>
        </div>
        <div variant="primary">
          <Link className="flex  gap-2 items-center bg-blue-500 py-1.5 px-4 text-white rounded-md font-medium hover:shadow-md">
            <IoCartOutline className="font-semibold" /> Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
