// import React, { useState, useCallback } from "react";
// import ReactDOM from "react-dom";

// const packages = [
//   {
//     title: "7 Night Western Caribbean Cruise",
//     description:
//       "Explore the beautiful Caribbean islands on a luxurious cruise.",
//     imgSrc: "/images/img2.jpg",
//     url: "https://www.expedia.com/Cruises-to-Bahamas.d13.Travel-Guide-",
//     category: "Caribbean",
//   },
//   {
//     title: "10 Night Greek Isles Cruise",
//     description:
//       "Experience the stunning Greek isles with our exclusive cruise package.",
//     imgSrc: "/images/img1.jfif",
//     url: "https://expedia.com/affiliates/chatassist_ai/santorini",
//     category: "Greek Isles",
//   },
//   {
//     title: "3 Eastern Mediterranean Cruise",
//     description: "Discover the rich history of the Eastern Mediterranean.",
//     imgSrc: "/images/img3.webp",
//     url: "https://expedia.com/affiliates/hotel-search-eastern-mediterranean-coast.CWwICxo",
//     category: "Mediterranean",
//   },
//   {
//     title: "10 Night Caribbean Cruise",
//     description: "Enjoy a relaxing Caribbean cruise with exciting excursions.",
//     imgSrc: "/images/img4.jfif",
//     url: "https://expedia.com/affiliate/lr5JMnd",
//     category: "Caribbean",
//   },
//   {
//     title: "6 Nights Turkey and Greek Islands",
//     description: "Sail through the Greek isles and enjoy breathtaking views.",
//     imgSrc: "/images/img5.jpg",
//     url: "https://expedia.com/affiliate/EYFsMYD",
//     category: "Greek Isles",
//   },
//   {
//     title: "5 Night Alaska",
//     description: "A short yet memorable cruise to the Eastern Mediterranean.",
//     imgSrc: "/images/alaska.avif",
//     url: "https://expedia.com/affiliate/svJAOkp",
//     category: "Alaska",
//   },
// ];

// const CategoryButton = React.memo(({ category, isSelected, onClick }) => {
//   return (
//     <button
//       className={`mx-2 my-2 py-2 px-4 rounded-lg ${
//         isSelected ? "bg-teal-500 text-white" : "bg-gray-200 text-gray-700"
//       }`}
//       onClick={() => onClick(category)}
//     >
//       {category}
//     </button>
//   );
// });

// const PackageCard = React.memo(({ pkg }) => {
//   return (
//     <div className="w-full md:w-1/2 lg:w-1/3 mb-8">
//       <div className="bg-white overflow-hidden">
//         <img
//           src={pkg.imgSrc}
//           alt={pkg.title}
//           className="mx-auto w-full h-52 px-5 object-cover"
//           loading="lazy"
//         />
//         <div className="p-6">
//           <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
//           <p className="text-gray-700 mb-4">{pkg.description}</p>
//           <button
//             className="bg-teal-500 text-white py-2 px-4 rounded-lg"
//             onClick={() => window.open(pkg.url, "_blank")}
//           >
//             Book Now
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// });

// const TravelPackages = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const handleCategoryClick = useCallback((category) => {
//     console.log("Category clicked:", category);
//     setSelectedCategory(category);
//   }, []);

//   const filteredPackages =
//     selectedCategory === "All"
//       ? packages
//       : packages.filter((pkg) => pkg.category === selectedCategory);

//   const categories = [
//     "All",
//     "Caribbean",
//     "Greek Isles",
//     "Mediterranean",
//     "Alaska",
//   ];

//   return (
//     <section
//       id="travel-packages"
//       className="bg-white xl:-mt-20 md:-mt-96 lg:-mt-80"
//     >
//       <div className="container mx-auto px-3 lg:px-16 text-left">
//         <h2 className="text-3xl font-bold text-center mb-10">
//           Travel PACKAGES
//         </h2>
//         <div className="flex justify-center mb-10 flex-wrap">
//           {categories.map((category, index) => (
//             <CategoryButton
//               key={index}
//               category={category}
//               isSelected={selectedCategory === category}
//               onClick={handleCategoryClick}
//             />
//           ))}
//         </div>
//         <div className="flex flex-wrap">
//           {filteredPackages.length > 0 ? (
//             filteredPackages.map((pkg, index) => (
//               <PackageCard key={index} pkg={pkg} />
//             ))
//           ) : (
//             <div className="w-full text-center py-20">
//               <h3 className="text-2xl font-semibold mb-4">
//                 No packages available
//               </h3>
//               <p className="text-gray-700">
//                 Sorry, there are no packages available for the selected
//                 category.
//               </p>
//             </div>
//           )}
//         </div>
//         <hr />
//       </div>
//     </section>
//   );
// };

// export default TravelPackages;

import React from "react";

const TravelPackages = () => {
  const packages = [
    {
      title: "7 Night Western Caribbean Cruise",
      description:
        "Explore the beautiful Caribbean islands on a luxurious cruise.",
      imgSrc: "/images/img2.jpg",
      url: "https://expedia.com/affiliates/hotel-search-caribbean.QlB4XXk",
    },
    {
      title: "10 Night Greek Isles Cruise",
      description:
        "Experience the stunning Greek isles with our exclusive cruise package.",
      imgSrc: "/images/img1.jfif",
      url: "https://expedia.com/affiliates/hotel-search-santorini.MgXvQiD",
    },
    {
      title: "3 Eastern Mediterranean Cruise",
      description: "Discover the rich history of the Eastern Mediterranean.",
      imgSrc: "/images/img3.webp",
      url: "https://expedia.com/affiliates/hotel-search-eastern-mediterranean-coast.CWwICxo",
    },
    {
      title: "10 Night Caribbean Cruise",
      description:
        "Enjoy a relaxing Caribbean cruise with exciting excursions.",
      imgSrc: "/images/img4.jfif",
      url: "https://expedia.com/affiliate/lr5JMnd",
    },
    {
      title: "6 Nights Turkey and Greek Islands",
      description: "Sail through the Greek isles and enjoy breathtaking views.",
      imgSrc: "/images/img5.jpg",
      url: "https://expedia.com/affiliate/EYFsMYD",
    },
    {
      title: "5 Night Alaska",
      description: "A short yet memorable cruise to the Eastern Mediterranean.",
      imgSrc: "/images/alaska.avif",
      url: "https://expedia.com/affiliate/svJAOkp",
    },
  ];

  return (
    <section
      id="travel-packages"
      className="bg-white xl:-mt-20 md:-mt-96 lg:-mt-80"
    >
      <div className="container mx-auto px-3 lg:px-16 text-left">
        <h2 className="text-3xl font-bold text-center mb-10">
          Travel PACKAGES
        </h2>
        <div className="flex flex-wrap">
          {packages.map((pkg, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 mb-8 ">
              <div className="bg-white overflow-hidden ">
                <img
                  src={pkg.imgSrc}
                  alt={pkg.title}
                  className="mx-auto w-full h-52 px-5 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                  <p className="text-gray-700 mb-4">{pkg.description}</p>
                  <button
                    className="bg-teal-500 text-white py-2 px-4 rounded-lg"
                    onClick={() => window.open(pkg.url, "_blank")}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <hr />
      </div>
    </section>
  );
};

export default TravelPackages;
