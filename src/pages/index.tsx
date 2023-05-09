import React from "react";
import Home from "./Home";
import Header from "../shared/Header";
import { Route, Routes, Navigate } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import MovieDetailed from "./MovieDetailed";
import Page404 from "./404";

const RootPage: React.FC = () => {
  return (
    <div className="bg-dark">
      <Header />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/movie/slug=:slug" element={<MovieDetailed />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
};

export default RootPage;
