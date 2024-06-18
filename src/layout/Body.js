import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function Body() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default Body;
