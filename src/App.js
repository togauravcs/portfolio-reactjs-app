import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import MainPage from "./MainPage";       // ✅ Your home layout
import BlogList from "./pages/BlogList"; // ✅ The blog listing page
import Courses from "./pages/Courses";
import Videos from "./pages/Videos";
import DomainExperience from "./pages/DomainExperience";


export default function App() {
  return (
    <Router basename="/portfolio-reactjs-app">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/domains" element={<DomainExperience />} />
        {/* Add more routes as needed */}

      </Routes>
    </Router>
  );
}