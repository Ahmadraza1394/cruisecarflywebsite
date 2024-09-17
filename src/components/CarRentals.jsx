// src/CarRental.js
import React from "react";

const cars = [
  {
    category: "Mini",
    model: "Fiat 500",
    imgSrc: "/images/car1.webp",
  },
  {
    category: "Economical",
    model: "Hyundai Accent 2024",
    imgSrc: "/images/car2.jpg",
  },
  {
    category: "Midsize",
    model: "Mazda 3 2024",
    imgSrc: "/images/car3.jfif",
  },
  {
    category: "Fullsize",
    model: "Toyota Camry Hybrid 2024",
    imgSrc: "/images/car4.png",
  },
  {
    category: "Premium Crossover",
    model: "Volkswagen Atlas 2024",
    imgSrc: "/images/car5.jpg",
  },
  {
    category: "Luxury Convertible",
    model: "BMW 4-Series 2024",
    imgSrc: "/images/car6.png",
  },
];

const CarRental = () => {
  return (
    <div className="container mx-auto px-10 py-8 " id="car-rentals">
      <h2 className="text-2xl font-bold mb-8 text-center">Car Rentals</h2>
      <h2 className="text-xl font-bold mb-8 text-center">
        Great Rental Offers For You
      </h2>
      <div className="flex flex-wrap -mx-4 text-center">
        {cars.map((car, index) => (
          <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8 ">
            <div className="border bg-white overflow-hidden shadow-md">
              <img
                src={car.imgSrc}
                alt={car.model}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">{car.model}</h3>
              <p className="text-gray-600">{car.category}</p>
              <a
                href="https://expedia.com/affiliate/KMO8SUc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="my-4 px-4 py-2 bg-red-600 text-white rounded">
                  Rent it
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarRental;
