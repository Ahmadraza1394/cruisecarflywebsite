import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen mt-20 pb-0 sm:-mb-48 -mb-72 -z-10"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/bg.webp"
          alt="Background"
          className="w-full h-3/5 object-cover opacity-100"
        />
      </div>

      {/* Overlay Image */}
      <div className=" xs:absolute bottom-16 left-32  h-full">
        <img
          src="/images/smallpic.jpg"
          alt="Overlay"
          className="lg:w-1/2 sm:w-1/2 md:w-3/5 h-2/3 xs:block hidden xs:w-3/5 object-cover"
        />
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex justify-center">
        <h1 className="text-5xl mt-1 font-serif text-white text-center">
          Explore with Ease, Cruise in <br />
          style
        </h1>
      </div>
    </div>
  );
};

export default Hero;
