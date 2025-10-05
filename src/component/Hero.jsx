import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center h-86 flex-col gap-6 items-center bg-blue-400 text-white">
      <h1 className="md:text-6xl font-bold text-4xl ">Step Into Style</h1>
      <p className="md:text-xl text-md p-2 text-center ">
        Discover the perfect pair from our curated collection of premium
        footwear
      </p>

      <div className="flex gap-4">
        <Button
          onClick={() => navigate("/")}
          className="bg-[#13fc03] text-black hover:bg-green-400 rounded-md px-6 py-2 cursor-pointer "
        >
          Shop Now
        </Button>
        <Button className="cursor-pointer bg-gray-100 text-white hover:bg-gray-200 hover:text-blue-500 rounded-md px-6 py-2 ">
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default Hero;
