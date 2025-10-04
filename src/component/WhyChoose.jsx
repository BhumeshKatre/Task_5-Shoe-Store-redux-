import React from "react";

const WhyChoose = () => {
  return (
    <div className="p-4 ">
      <div className="flex flex-col  justify-center items-center h-40">
        <h1 className="font-bold text-4xl "> Why Choose SoleStore?</h1>
        <p className="text-gray-400">
          We're committed to bringing you the best in footwear fashion and
          comfort
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 justify-evenly px-5 mb-10">

        <div className="flex flex-col gap-2 justify-center items-center p-4 bg-white border-0.5 border-gray-100 rounded-xl">
          <p className="text-5xl ">🌟</p>
          <h2 className="font-semibold text-xl">Premium Quality</h2>
          <p>Only the finest materials and craftsmanship</p>
        </div>

        
        <div className="flex flex-col gap-2 justify-center items-center p-4 bg-white border-0.5 border-gray-100 rounded-xl">
          <p className="text-5xl ">🚀</p>
          <h2 className="font-semibold text-xl">Fast Shipping</h2>
          <p>Free shipping on orders over $100</p>
        </div>


        <div className="flex flex-col gap-2 justify-center items-center p-4 bg-white border-0.5 border-gray-100 rounded-xl">
          <p className="text-5xl ">↩️</p>
          <h2 className="font-semibold text-xl">Premium Quality</h2>
          <p>Only the finest materials and craftsmanship</p>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
