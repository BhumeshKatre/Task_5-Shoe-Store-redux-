import React from "react";
import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Card from "../component/Card";
import { FiFilter } from "react-icons/fi";
import WhyChoose from "../component/WhyChoose";

const HomePage = () => {
  const shoes = [
    {
      id: 1,
      name: "Air Max 90",
      brand: "Nike",
      price: 129.99,
      rating: 4.5,
      size: "9",
      image: "/shoes/s1.png",
    },
    {
      id: 2,
      name: "UltraBoost",
      brand: "Adidas",
      price: 149.99,
      rating: 4.7,
      size: "10",
      image: "/shoes/s2.png",
    },
    {
      id: 3,
      name: "Gel-Kayano",
      brand: "ASICS",
      price: 119.99,
      rating: 4.3,
      size: "8.5",
      image: "/shoes/s3.png",
    },
    {
      id: 4,
      name: "Classic Leather",
      brand: "Reebok",
      price: 89.99,
      rating: 4.2,
      size: "9.5",
      image: "/shoes/s4.png",
    },
    {
      id: 5,
      name: "Chuck Taylor",
      brand: "Converse",
      price: 74.99,
      rating: 4.6,
      size: "8",
      image: "/shoes/s5.png",
    },
    {
      id: 6,
      name: "Old Skool",
      brand: "Vans",
      price: 69.99,
      rating: 4.4,
      size: "7.5",
      image: "/shoes/s6.png",
    },
    {
      id: 7,
      name: "ZoomX Vaporfly",
      brand: "Nike",
      price: 199.99,
      rating: 4.8,
      size: "10",
      image: "/shoes/s7.png",
    },
    {
      id: 8,
      name: "Future Rider",
      brand: "Puma",
      price: 99.99,
      rating: 4.1,
      size: "9",
      image: "/shoes/s8.png",
    },
    {
      id: 9,
      name: "FuelCell Rebel",
      brand: "New Balance",
      price: 139.99,
      rating: 4.6,
      size: "8.5",
      image: "/shoes/s9.png",
    },
    {
      id: 10,
      name: "Wave Rider",
      brand: "Mizuno",
      price: 109.99,
      rating: 4.3,
      size: "7",
      image: "/shoes/s10.png",
    },
  ];
  return (
    <>
      <Hero />
      <div className=" flex justify-between px-5 py-4 border-b border-gray-100">
        <div className="flex gap-8 items-center">
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
