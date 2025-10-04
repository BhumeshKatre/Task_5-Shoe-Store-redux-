import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Card from "../component/Card";
import { FiFilter } from "react-icons/fi";
import WhyChoose from "../component/WhyChoose";
import { shoes } from "../Data";

const HomePage = () => {
 
  return (
    <>
      <Hero />
      <div className=" flex flex-col md:flex-row md:justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex md:gap-8 items-center">
          <FiFilter size={20} />
          <select
          className="p-2 bg-gray-100 rounded-lg outline-none px-5"
            name="" id="">
            <option value="nike">All Brands</option>
            <option value="nike">Nike</option>
            <option value="adidas">Adidas</option>
            <option value="puma">Puma</option>
            <option value="sega">Sega</option>
          </select>

          <select
            className="p-2 bg-gray-100 rounded-lg outline-none px-5"
            name="" id="">
            <option value="name">Name</option>
            <option value="low-price">Price: Low to High</option>
            <option value="high-price">Price: high to Low</option>
            <option value="brand">Brand</option>
          </select>
        </div>
        <div>{shoes.length} products</div>
      </div>

      <div className="grid md:grid-cols-4  gap-4 py-4 px-5 bg-gray-200">
        {shoes.map((shoe, indx) => (
          <Card key={indx} shoe={shoe} />
        ))}
      </div>

      <WhyChoose />
    </>
  );
};

export default HomePage;
