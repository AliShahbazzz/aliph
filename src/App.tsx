// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Category, Home } from "./pages";
import Blog from "./pages/blog/Blog";

export const App: React.FC = () => {
  return (
    <Router>
      {/* <div className="p-4">
        <nav className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/category1">Category 1</Link>
          <Link to="/category2">Category 2</Link>
          <Link to="/category3">Category 3</Link>
          <Link to="/about">About Us</Link>
        </nav>
      </div> */}

      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/category1" element={<Category name="Category1" />} />
        <Route path="/category2" element={<Category name="Category2" />} />
        <Route path="/category3" element={<Category name="Category3" />} />
        {/* 
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
};
