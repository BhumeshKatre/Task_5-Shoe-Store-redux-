import React from "react";
import Logo from "/imgs/logo.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";


const Navbar = () => {
  const { cartItems, itemTotalPrice } = useSelector((state) => state.cart);

  return (
    <header className="sticky top-0 left-0  grid grid-cols-2 justify-between gap-4 px-5 py-2 w-full shadow backdrop-blur-sm bg-white/20 items-center z-40 ">
      <div className="flex gap-5 items-center">
        <div className="">
          <Link>
            <img
              className="md:w-40 w-30 h-12 hover:-translate-0.5 rounded-xl duration-600 shadow-emerald-50"
              src={Logo}
              alt=""
            />
          </Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <NavLink to="/" className="flex flex-col items-center">
            {({ isActive }) => (
              <>
                <span
                  className={`${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-500 hover:text-blue-400"
                  }`}
                >
                  Shop
                </span>
                <div
                  className={`h-0.5 w-full ${
                    isActive ? "bg-blue-500" : "hidden"
                  }`}
                ></div>
              </>
            )}
          </NavLink>

          <NavLink to="/cart" className="relative flex flex-col items-center">
            {({ isActive }) => (
              <>
                <span
                  className={`${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-500 hover:text-blue-400"
                  }`}
                >
                  Cart
                </span>

                <div
                  className={`h-0.5 w-full ${
                    isActive ? "bg-blue-500" : "hidden"
                  }`}
                ></div>

                {
                  (cartItems  && cartItems.length > 0 )  &&
                  <div className=" absolute -top-2 -right-4 rounded-full bg-[#13fc03] w-5 h-5 flex items-center justify-center text-xs text-center text-black ">
                    {cartItems.length}
                  </div>
               }
              </>
            )}

            
            
          </NavLink>

          <NavLink to="/payment" className="flex flex-col items-center">
            {({ isActive }) => (
              <>
                <span
                  className={`${
                    isActive
                      ? "text-blue-500"
                      : "text-gray-500 hover:text-blue-400"
                  }`}
                >
                  Payment
                </span>
                <div
                  className={`h-0.5 w-full ${
                    isActive ? "bg-blue-500" : "hidden"
                  }`}
                ></div>
              </>
            )}
          </NavLink>
        </nav>
      </div>

      <div className="flex gap-5   md:items-center justify-end">
        <div className="md:flex hidden">
          <div className="bg-gray-100 border-0.5 border-gray-400 flex gap-2 items-center  px-3 py-1 rounded-md w-92">
            <FaSearch className="text-gray-400" />
            <input
              className=" ms-2 p-1 outline-none border-none"
              placeholder="Search Shoes..."
              type="text"
            />
          </div>
        </div>
        <div className='flex gap-2 items-center justify-center'>
          <Link
            to={'/cart'}
            className="flex  gap-2 items-center bg-blue-500 py-1.5 px-4 text-white rounded-md font-medium hover:shadow-md relative">
            <IoCartOutline className="font-semibold" /> Cart
            {
              (cartItems && cartItems.length > 0) &&
              <div className=" absolute -top-2 -right-1 rounded-full bg-[#13fc03] w-5 h-5 flex items-center justify-center text-xs text-center text-black ">
                {cartItems.length}
              </div>
            }
          </Link>

          <button className="md:hidden flex p-1 hover:bg-[#13fc03]">
            <GiHamburgerMenu />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
