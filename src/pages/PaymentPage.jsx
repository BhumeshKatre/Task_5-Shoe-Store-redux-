import React from "react";
import EmptyCartComp from "../component/EmptyCart.Comp";
import { FiShoppingBag } from "react-icons/fi";

import { Link } from "react-router-dom";
import { MdPayment } from "react-icons/md";
const PaymentPage = () => {
  const text = "Add some items to your cart before proceeding to payment.";

  return (
    <>
      {/* <EmptyCartComp text={text}  /> */}

      <div className="px-4 py-3  md:w-[70vw] md:mx-auto box-border ">
        <div>
          <Link to="/cart">← Back to cart</Link>
        </div>

        <div className="py-5 ">
          <h2 className="text-2xl font-bold"> Secure Checkout </h2>
          <p>Your payment information is encrypted and secure</p>
        </div>

        <div className="flex md:flex-row flex-col md:justify-between md:px-4 py-3 gap-4 ">
          <div className="flex flex-col gap-2 flex-1 p-4  order-2 md:order-2 bg-white rounded-md">
            <h1 className="flex gap-3 font-semibold text-xl items-center">
              {" "}
              <MdPayment /> Payment Information{" "}
            </h1>

            <div className="py-4 px-5">
              <form action="">
                <div className="flex flex-col">
                  <label
                    htmlFor="card-number"
                    className="text-sm font-semibold"
                  >
                    Card Number
                  </label>
                  <input
                    className="bg-gray-100 p-2 px-3 rounded-md outline-green-500"
                    placeholder="1234 5678 8901 2345"
                    type="text"
                    name=""
                    id="card-number"
                  />
                </div>
                <div className="flex grid-cols-2 gap-4 mt-2 ">
                  <div className=" grid grid-cols-1">
                    <label htmlFor="exp-date" className="text-sm font-semibold">
                      {" "}
                      Expiry date{" "}
                    </label>
                    <input
                      className="bg-gray-100 p-2 px-3 rounded-md outline-green-500"
                      placeholder="dd/mm"
                      type="date"
                      name=""
                      id="exp-date"
                    />
                  </div>

                  <div className=" grid grid-cols-1">
                    <label htmlFor="cvv" className="text-sm font-semibold">
                      {" "}
                      CVV{" "}
                    </label>
                    <input
                      className="bg-gray-100 p-2 px-3 rounded-md outline-green-500"
                      placeholder="123"
                      type="text"
                      name=""
                      id="cvv"
                    />
                  </div>
                </div>
                <div className="flex flex-col mt-3 mb-3 ">
                  <label
                    htmlFor="card-holder-name"
                    className="text-sm font-semibold"
                  >
                    {" "}
                    Card Holder name{" "}
                  </label>
                  <input
                    className="bg-gray-100 p-2 px-3 rounded-md outline-green-500"
                    placeholder="kumar kartike"
                    type="text"
                    name=""
                    id=""
                  />
                </div>

                <h1 className="border-t py-3 font-bold border-gray-400">
                  Billing Information
                </h1>

                <div>
                  <div className="flex flex-col mt-3 mb-3 ">
                    <label
                      htmlFor="card-holder-name"
                      className="text-sm font-semibold"
                    >
                      email address
                    </label>
                    <input
                      className="bg-gray-100 p-2 px-3 rounded-md outline-green-500"
                      placeholder="kumarkartike@gmail.com"
                      type="email"
                      name=""
                      id=""
                    />
                  </div>

                  <div className="flex flex-col mt-3 mb-3 ">
                    <label
                      htmlFor="card-holder-name"
                      className="text-sm font-semibold"
                    >
                      Addess
                    </label>
                    <input
                      className="bg-gray-100 p-2 px-3 rounded-md outline-green-500"
                      placeholder="kumar kartike 123, baja"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>

                  <div className="grid grid-cols-2 justify-between">
                    <div className="grid grid-cols-1 mt-3 mb-3 ">
                      <label
                        htmlFor="card-holder-name"
                        className="text-sm font-semibold"
                      >
                        city
                      </label>
                      <input
                        className="bg-gray-100 p-2 px-3 rounded-md outline-green-500"
                        placeholder="mumbai"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>

                    <div className="grid grid-cols-1 mt-3 mb-3 ">
                      <label
                        htmlFor="card-holder-name"
                        className="text-sm font-semibold"
                      >
                        Zip code
                      </label>
                      <input
                        className="bg-gray-100 p-2 px-3 rounded-md outline-green-500"
                        placeholder="223344"
                        type="text"
                        name=""
                        id=""
                      />
                    </div>
                  </div>
                </div>

                <button className="w-full py-2 mt-2 bg-sky-400 hover:bg-sky-700 rounded-md text-white font-semibold">
                  Complete payment
                </button>
              </form>
            </div>
          </div>

          <div className="p-4 bg-white w-92 rounded-lg  md:order-2 order-1 h-full ">
            <h2 className="text-lg font-semibold"> Order Summary </h2>
            <div className="py-4 ">
              <div className="flex justify-between border-b border-sky-100 py-4">
                <div>
                  <h2 className="text-sm font-semibold ">shoe name</h2>
                  <div className="text-xs space-x-4">
                    <span>brand </span> <span>size </span> <span>qnty</span>
                  </div>
                </div>

                <p className="font-bold">$199</p>
              </div>

              <div>
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
                    <p className=" text-sky-400 font-bold text-xl">$79.99</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
