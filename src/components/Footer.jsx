import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-blue-500 flex justify-between p-5">
        <p className="m-auto text-white">
          Like what you see? Are you ready to stand out? You know what to do!
        </p>
      </div>
      <footer className="bg-white py-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap justify-between text-left text-gray-700">
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="text-md font-bold mb-4">Book Your Travel LLC</h2>
              <ul>
                <div className="flex">
                  <li></li>
                </div>
                <div className="flex">
                  <Link to="/" className="flex items-center space-x-4">
                    <img src="/images/Logo.jpeg" alt="Logo" className="w-60" />
                  </Link>
                </div>
                <div className="flex mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4 text-blue-500 my-auto mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                    />
                  </svg>
                  <li>cruisecarfly@gmail.com </li>
                </div>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="text-md font-bold mb-4">Discover</h2>
              <ul>
                <li>
                  <a
                    href="https://expedia.com/affiliates/hotels.MnUifGx"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Last Minute
                  </a>
                </li>
                <li>
                  <a
                    href="https://expedia.com/affiliates/chatassist_ai/family"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Family
                  </a>
                </li>
                <li>
                  <a
                    href="https://expedia.com/affiliates/punta-cana-hotels-tortuga-bay-hotel.uM4ywdB"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Best Sellers
                  </a>
                </li>
                <li>
                  <a
                    href="https://expedia.com/affiliates/dubai-hotels-jumeirah-beach-hotel.F2qroMP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Luxury
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="text-md font-bold mb-4">Destinations</h2>
              <ul>
                <li>
                  <a
                    href="https://expedia.com/affiliates/hotel-search-caribbean.QlB4XXk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Caribbean
                  </a>
                </li>
                <li>
                  <a
                    href="https://expedia.com/affiliates/hotel-search-mediterranean-sea.Z1t91pP"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Mediterranean
                  </a>
                </li>
                <li>
                  <a
                    href="https://expedia.com/affiliates/hotel-search-portmiami.j5UYIlH"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Search by port
                  </a>
                </li>
                <li>
                  <a
                    href="https://expedia.com/affiliates/expedia-home.ZNdEbVT"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get inspired
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 mb-6 md:mb-0">
              <h2 className="text-md font-bold mb-4">Follow us</h2>
              <ul className="">
                <li className="flex">
                  <img
                    src="/images/facebook.jfif"
                    className="h-3 my-auto"
                    alt="Facebook"
                  />
                  <a href="." className="">
                    Facebook
                  </a>
                </li>
                <li className="flex">
                  <img
                    src="/images/insta.webp"
                    className="h-3 my-auto"
                    alt="Instagram"
                  />
                  <a href="." className="">
                    Instagram
                  </a>
                </li>
                <li className="flex">
                  <img
                    src="/images/twitter.png"
                    className="h-3 my-auto"
                    alt="Twitter"
                  />
                  <a href="." className="">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-5" />
          <div className="flex justify-end text-gray-600">
            Powered by Fly Travel
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
