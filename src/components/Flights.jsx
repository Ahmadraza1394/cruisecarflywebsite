import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Flights = () => {
  const flights = [
    {
      title: "Miami to Maldives",
      description:
        "Experience the beauty of the Maldives with a flight from Dubai.",
      imgSrc: "/images/usa.jpg",
      link: "https://expedia.com/affiliates/flights-search-tpa-to-dxb.XpALnOS",
    },
    {
      title: "Los Angeles to Hong Kong",
      description:
        "Explore the vibrant city of Hong Kong with a direct flight from Dubai.",
      imgSrc: "/images/hongkong.jpg",
      link: "https://expedia.com/affiliates/flights-search-lax-to-hkg.zGrAXEv",
    },
    {
      title: "New York to Dubai",
      description:
        "Discover the excitement of New York City with a flight from Dubai.",
      imgSrc: "/images/newyork.webp",
      link: "https://expedia.com/affiliates/flights-search-ewr-to-dxb.Slg0DKT",
    },
    {
      title: "Miami to Maldives",
      description:
        "Experience the beauty of the Maldives with a flight from Dubai.",
      imgSrc: "/images/usa.jpg",
      link: "https://expedia.com/affiliates/flights-search-tpa-to-dxb.XpALnOS",
    },
    {
      title: "Los Angeles to Hong Kong",
      description:
        "Explore the vibrant city of Hong Kong with a direct flight from Dubai.",
      imgSrc: "/images/hongkong.jpg",
      link: "https://expedia.com/affiliates/flights-search-lax-to-hkg.zGrAXEv",
    },
  ];

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-0 right-16 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4 bg-teal-400 rounded-full text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-0 right-11 transform -translate-y-1/2 z-10 cursor-pointer"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-4 bg-teal-400 rounded-full text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
        />
      </svg>
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-10 " id="flights">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10">
          Latest Flight Deals
        </h2>
        <div className="">
          <Slider {...settings}>
            {flights.map((flight, index) => (
              <div key={index} className="px-4 mt-8">
                <div className="bg-white rounded-lg overflow-hidden text-left">
                  <img
                    src={flight.imgSrc}
                    alt={flight.title}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{flight.title}</h3>
                    <p className="text-gray-700 mb-4">{flight.description}</p>
                    <a
                      href={flight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="bg-teal-500 text-white py-2 px-4 rounded-lg">
                        Book Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <hr className="mt-5" />
      </div>
    </section>
  );
};

export default Flights;
