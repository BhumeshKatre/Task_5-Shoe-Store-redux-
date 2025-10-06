import React, { useState } from "react";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/cartSlice";
const Card = ({ shoe }) => {
  const dispatch = useDispatch();
  const { name, brand, rating, size, image, price } = shoe;
  const { cartItems, itemTotalPrice } = useSelector((state) => state.cart);
  const [selectSize, setSelectSize] = useState(null);
  const existCartItem = cartItems.find((item) => item.id === shoe.id);

  const handleSize = (e) => {
    setSelectSize(e.target.value);
  };

  // console.log(cartItems);

  return (
    <div className="flex flex-col gap-2 rounded-2xl  overflow-hidden bg-white hover:-translate-1 duration-600 hover:shadow-md shadow ">
      <div className="relative h-[60%]">
        <img src={image} alt="" className="h-full" />

        <span className=" absolute top-3 left-3 inline-flex items-center rounded-md bg-white px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-white/20 ">
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
              <span className="inline-flex items-center rounded-md  px-2 py-1 text-xs font-medium text-gray-400 ">
                ⭐{rating}
              </span>
            </p>
          </div>
        </div>
        <div className="px-2 py-1 flex justify-between ">
          <h2 className="text-xl font-bold text-blue-500 ">$ {price}</h2>
          <p className="">
            <span className="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 text-xs font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
              { selectSize || size}
            </span>
          </p>
        </div>
        <div className="px-2 py-3 flex flex-col  ">
          <p>size</p>
          <select
            value={selectSize}
            onChange={handleSize}
            className="w-full p-2 bg-gray-300 px-3 rounded-md  outline-blue-400">
            <option >Select Size</option>
            <option value={'7'}>7</option>
            <option value={'7.5'}>7.5</option>
            <option value={'8'}>8</option>
            <option value={'8.5'}>8.5</option>
            <option value={'9'}>9</option>
            <option value={'9.5'}>9.5</option>
            <option value={'10'}>10</option>
          </select>
        </div>
        <div className="px-2 py-3 flex flex-col w-full">
          <button
            disabled={!selectSize || existCartItem}
            onClick={() => {
              dispatch(addToCart({ ...shoe, size: selectSize, quantity : 1}))
                setSelectSize(null);
            }}
            className={`p-2 rounded-lg flex items-center justify-center gap-2 font-semibold ${selectSize ? 'bg-[#13fc03] ' : ' bg-green-300'} `}
          >
            <IoCartOutline />
            Add To cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
