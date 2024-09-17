import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../components/Blog";

import Layout from "../components/Layout";

const HomeRoutes = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default HomeRoutes;
