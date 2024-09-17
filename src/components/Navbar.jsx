import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
    setShowMenu(false);
  };

  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-end items-center">
          <div>
            <a href="#home" onClick={handleScroll} className="text-white mr-4">
              Home
            </a>
            <a
              href="#travel-packages"
              onClick={handleScroll}
              className="text-white mr-4"
            >
              Travel Packages
            </a>
            <a
              href="#flights"
              onClick={handleScroll}
              className="text-white mr-4"
            >
              Flights
            </a>
            <a
              href="#car-rentals"
              onClick={handleScroll}
              className="text-white mr-4"
            >
              Car Rentals
            </a>
            <Link to="/blog" className="text-white ">
              Blog
            </Link>
          </div>
        </div>
      </nav>
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex  items-center justify-between py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <img src="/images/Logo.jpeg" alt="Logo" className="w-60" />
            </Link>
            {/* Primary Navbar items */}
            <div className="hidden m-auto md:flex space-x-8">
              <a
                href="#travel-packages"
                onClick={handleScroll}
                className="font-semibold hover:text-blue-500 transition duration-300"
              >
                Travel Packages
              </a>
              <a
                href="#flights"
                onClick={handleScroll}
                className="font-semibold hover:text-blue-500 transition duration-300"
              >
                Flights
              </a>
              <a
                href="#car-rentals"
                onClick={handleScroll}
                className=" font-semibold hover:text-blue-500 transition duration-300"
              >
                Car Rentals
              </a>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={handleMenuToggle}
              >
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className={`md:hidden ${showMenu ? "block" : "hidden"} mobile-menu`}
        >
          <ul className="text-gray-500 ml-auto">
            <li>
              <a
                href="#travel-packages"
                onClick={handleScroll}
                className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300"
              >
                Travel Packages
              </a>
            </li>
            <li>
              <a
                href="#flights"
                onClick={handleScroll}
                className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300"
              >
                Flights
              </a>
            </li>
            <li>
              <a
                href="#car-rentals"
                onClick={handleScroll}
                className="block text-sm px-2 py-4 hover:bg-gray-200 transition duration-300"
              >
                Car Rentals
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
