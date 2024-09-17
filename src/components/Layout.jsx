// import React from "react";
// import Navbar from "./Navbar";
// import Hero from "./HeroSection";
// import TravelPackages from "./TravelPackages";
// import Flights from "./Flights";
// import CarRental from "./CarRentals";
// import Footer from "./Footer";

// const Layout = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <TravelPackages />
//       <Flights />
//       <CarRental />
//       <Footer />
//     </div>
//   );
// };

// export default Layout;
import React, { Suspense, lazy } from "react";

// Lazy load the components
const Navbar = lazy(() => import("./Navbar"));
const Hero = lazy(() => import("./HeroSection"));
const TravelPackages = lazy(() => import("./TravelPackages"));
const Flights = lazy(() => import("./Flights"));
const CarRental = lazy(() => import("./CarRentals"));
const Footer = lazy(() => import("./Footer"));

const Layout = () => {
  return (
    <div>
      <Suspense fallback={<div></div>}>
        <Navbar />
        <Hero />
        <TravelPackages />
        <Flights />
        <CarRental />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
