import React from "react";
import Shoe1 from "/shoes/s1.png";
import { IoCartOutline } from "react-icons/io5";


const Card = ({ shoe }) => {
  const { name, brand, rating, size, image , price} = shoe;
  return (
    <div className="flex flex-col gap-2 rounded-2xl  overflow-hidden bg-white hover:-translate-1 duration-600 hover:shadow-md shadow ">
      <div className="relative">
        <img src={Shoe1} alt="" />

        <span class=" absolute top-3 left-3 inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-white/20 ">
          {brand}
        </span>
      </div>
      <div className="p-3">
        <div className="px-2 p-1 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm"> {brand}</p>
          </div>
          <div>
            <p>
              <span class="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-gray-400 ">
                {rating}
              </span>
            </p>
          </div>
        </div>
        <div className="px-2 py-1 flex justify-between ">
          <h2 className="text-2xl font-bold text-blue-500 ">$ {price}</h2>
          <p className="">
            <span class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
              {size}
            </span>
          </p>
        </div>
        <div className="px-2 py-3 flex flex-col  ">
          <p>size</p>
          <select className="w-full p-2 bg-gray-300 px-3 rounded-md  outline-blue-400">
            <option className=" rounded-2xl ">Select Size</option>
            <option>7</option>
            <option>7.5</option>
            <option>8</option>
            <option>8.5</option>
            <option>9</option>
            <option>9.5</option>
            <option>10</option>
          </select>
        </div>
        <div className="px-2 py-3 flex flex-col w-full">
          <button className="bg-[#13fc03] p-2 rounded-lg flex items-center justify-center gap-2 font-semibold"> <IoCartOutline />Add To cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
