import React from 'react';
import Shoe1 from "/shoes/s1.png";
import { Link } from "react-router-dom";
const CartItems = ({cartItems}) => {
  return (
    <div className="px-4 py-3   ">
      <div>
        <h2 className="text-blue-500 text-2xl font-bold">Shopping Cart</h2>
        <p>2 items in your cart</p>
      </div>

      <div className="flex md:flex-row flex-col md:justify-between md:px-4 py-3 gap-4 ">
        <div className="flex flex-col gap-2 flex-1  order-2 md:order-2 overflow-y-auto">
          {cartItems.map((item) => (
            <div className="flex w-full h-40 justify-between p-2 bg-white border border-gray-200  rounded-md ">
              <div className="flex gap-2  ">
                <img className="w-26 h-26 rounded-2xl" src={Shoe1} alt="" />
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <h3 className="font-bold ">{item.name} </h3>
                    <p className="text-sm">{item.brand} </p>
                  </div>
                  <div>
                    <span className="me-4 px-2 border-1 border-gray-300 p-0.5 text-[12px] bg-white rounded-lg">
                      size : {item.size}
                    </span>
                    <span className="font-bold text-xl text-blue-500">
                      $ {item.price}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 flex-col ">
                <div className="flex gap-2 items-center">
                  <button className="  flex items-center justify-center w-7 h-7  rounded-md bg-gray-300 font-bold text-xl">
                    -
                  </button>
                  <span>1</span>
                  <button className="flex items-center justify-center w-7 h-7  rounded-md bg-gray-300 font-bold text-xl">
                    +
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold">Subtotal: ${item.price}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4  w-92 rounded-lg  md:order-2 order-1 ">
          <div className="bg-white p-4">
            <h2 className="text-lg font-semibold"> Order Summary </h2>
            <div className=" ">
              <div className="flex justify-between p-2 ">
                <p className="text-gray-500">Subtotal</p>
                <p className="font-semibold">$79.99</p>
              </div>
              <div className="flex justify-between p-2 ">
                <p className="text-gray-500">shipping</p>
                <p className="font-semibold">$79.99</p>
              </div>
              <div className="flex justify-between p-2 ">
                <p className="text-gray-500">tax</p>
                <p className="font-semibold">$79.99</p>
              </div>

              <div className="p-2 border-t border-gray-300 flex justify-between">
                <p className="text-xl font-bold ">Total</p>
                <p className="font-semibold">${itemTotalPrice}</p>
              </div>

              <div className="space-y-2 mt-4">
                <button
                  onClick={() => navigate("/payment")}
                  className="w-full bg-blue-500 py-2.5 px-6 text-white font-semibold rounded-md hover:bg-sky-700 "
                >
                  proceed to payment
                </button>
                <Link to="/">
                  <button className="w-full bg-gray-400 py-2.5 px-6 text-white font-semibold rounded-md cursor-pointer hover:bg-[#13fc03]">
                    continue shopping
                  </button>
                </Link>
              </div>
              <span class="inline-flex items-center rounded-md mt-3 bg-gray-400/10 px-2 py-1 text-[11.5px] font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                🔒 Secure checkout powered by industry-leading encryption
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
