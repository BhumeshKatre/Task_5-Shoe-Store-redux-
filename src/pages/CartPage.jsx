import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import Shoe1 from "/shoes/s1.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "../component/EmptyCart";
import { decreaseItem, increaseItem } from "../redux/cartSlice";

const CartPage = () => {
  const text = "Looks like you haven't added any shoes to your cart yet.";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems, itemTotalPrice } = useSelector((state) => state.cart);
  // console.log(itemTotalPrice);
  return (
    <>
      {cartItems && cartItems.length > 0 ? (
        <div className="px-4 py-3   ">
          <div>
            <h2 className="text-blue-500 text-2xl font-bold">Shopping Cart</h2>
            <p>{cartItems.length} items in your cart</p>
          </div>

          <div className="flex md:flex-row flex-col md:justify-between md:px-4 py-3 gap-4 ">
            <div className="flex flex-col gap-2 flex-1  order-2 md:order-2 overflow-y-auto">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full h-40 justify-between p-2 bg-white border border-gray-200  rounded-md "
                >
                  <div className="flex gap-2  ">
                    <img
                      className="w-26 h-26 rounded-2xl"
                      src={item.image}
                      alt=""
                    />
                    <div className="flex flex-col justify-between py-2">
                      <div>
                        <h3 className="font-bold ">{item.name} </h3>
                        <p className="text-sm">{item.brand} </p>
                      </div>
                      <div className="flex flex-col md:flex-row">
                        <span className="me-4 px-2 border-1 border-gray-300 p-0.5 text-[12px] bg-white rounded-lg">
                          size : {item.size}
                        </span>
                        <span className="font-bold md:text-xl text-blue-500">
                          $ {item.price}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 flex-col ">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => dispatch(decreaseItem(item.id))}
                        className="  text-center w-7 h-7  rounded-md bg-gray-300 font-bold text-xl hover:bg-[#13fc03]"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseItem(item.id))}
                        className=" w-7 h-7  rounded-md bg-gray-300 font-bold text-xl hover:bg-[#13fc03]"
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-400 text-md md:text-lg">
                        Subtotal: <span className="text-black">$ {Math.floor(item.price * item.quantity)}</span>
                      </h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:p-4  md:w-92 rounded-lg  md:order-2 order-1 ">
              <div className="bg-white p-4">
                <h2 className="text-lg font-semibold"> Order Summary </h2>
                <div className=" ">
                  <div className="flex justify-between p-2 ">
                    <p className="text-gray-500">Subtotal</p>
                    <p className="font-semibold">
                      ${Math.floor(itemTotalPrice)}
                    </p>
                  </div>
                  <div className="flex justify-between p-2 ">
                    <p className="text-gray-500">shipping</p>
                    <p className="font-semibold">
                      ${itemTotalPrice > 100 ? 0 : 100}
                    </p>
                  </div>
                  <div className="flex justify-between p-2 ">
                    <p className="text-gray-500">tax</p>
                    <p className="font-semibold">$0</p>
                  </div>
                  

                  <div className="p-2 border-t border-gray-300 flex justify-between">
                    <p className="text-xl font-bold ">Total</p>
                    <p className="font-semibold">
                      $
                      {Number(
                        Math.floor(
                          itemTotalPrice > 100
                            ? Number(itemTotalPrice)
                            : Number(itemTotalPrice + 100)
                        )
                      )}
                    </p>
                  </div>

                  <span className="inline-flex w-full text-center items-center justify-center rounded-md bg-green-400/10 px-2 py-1 text-xs font-medium text-green-400 inset-ring inset-ring-green-500/20">
                    {itemTotalPrice.price < 100
                      ? ` Add ${Math.floor(
                        100 - itemTotalPrice
                      )}  more for free shipping!`
                      : "🎉 Yay! You’re eligible for free shipping!"
}
                  </span>

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
                  <span className="inline-flex items-center rounded-md mt-3 bg-gray-400/10 px-2 py-1 text-[11.5px] font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
                    🔒 Secure checkout powered by industry-leading encryption
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart text={text} icon={<FiShoppingBag />} />
      )}
    </>
  );
};

export default CartPage;
