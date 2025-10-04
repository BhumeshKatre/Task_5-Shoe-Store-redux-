import React from "react";
import EmptyCartComp from "../component/EmptyCart.Comp";
import { FiShoppingBag } from "react-icons/fi";
import Shoe1 from "/shoes/s1.png";
import { shoes } from "../Data";
import { Button } from "react-bootstrap";

const CartPage = () => {
  const text = "Looks like you haven't added any shoes to your cart yet.";
  return (
    <>
      {/* <EmptyCartComp text={text} icon={<FiShoppingBag />} /> */}
      <div className="px-4 py-3   ">
        <div>
          <h2 className="text-blue-500 text-2xl font-bold">Shopping Cart</h2>
          <p>2 items in your cart</p>
        </div>

        <div className="flex justify-between px-4 py-3 gap-4 ">
          <div className="flex flex-col gap-2 flex-1 ">
            <div className="flex w-full h-40 justify-between p-2 bg-white border border-gray-200  rounded-md ">
              <div className="flex gap-2  ">
                <img className="w-26 h-26 rounded-2xl" src={Shoe1} alt="" />
                <div className="flex flex-col justify-between py-2">
                  <div>
                    <h3 className="font-bold ">Shoe name </h3>
                    <p className="text-sm">Brand name </p>
                  </div>
                  <div>
                    <span className="me-4 px-2 border-1 border-gray-300 p-0.5 text-[12px] bg-white rounded-lg">
                      size : 11{" "}
                    </span>
                    <span className="font-bold text-2xl text-blue-500">$200</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-4 flex-col ">
                <div className="flex gap-2 items-center">
                  <button className="  text-center w-8 h-8  rounded-md bg-gray-300 font-bold text-lg">
                    -
                  </button>
                  <span>0</span>
                  <button className=" w-8 h-8  rounded-md bg-gray-300 font-bold text-lg">
                    +
                  </button>
                </div>
                <div>
                  <h4 className="font-semibold">Subtotal: $200</h4>
                </div>
              </div>
            </div>
       </div>

          <div className="p-4 bg-white w-92 rounded-lg  ">
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
                <p className="font-semibold">$79.99</p>
              </div>

              <div>
                <Button variant="primary" className="w-full py-2 mb-2">Proceed to payment</Button>
                <Button variant="secondary" className="w-full py-2">continue shopping</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
