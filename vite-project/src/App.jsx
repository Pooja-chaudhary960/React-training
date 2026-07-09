import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import AfterSEE from "./pages/AfterSEE.jsx";
import OurCourses from "./pages/OurCourses.jsx";
import Events from "./pages/Events.jsx";
import Blogs from "./pages/Blog.jsx";
import About from "./pages/About.jsx";
import MainLayout from "./components/MainLayout.jsx";
import UseStateHook from "./Hooks/UseStateHook.jsx";
import UseeffectHook from "./Hooks/UseeffectHook.jsx";
import Category from "./pages/Category.jsx";
import DynamicRouting from "./pages/DynamicRouting.jsx";
// import Product from "./components/product.jsx";
import MealID from "./pages/MealID.jsx";

const App = () => {
 
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<OurCourses />} />
          <Route path="/aftersee" element={<AfterSEE />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/useeffecthook" element={<UseeffectHook />} />
          <Route path="/usestatehook" element={<UseStateHook />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/id/:id" element={<MealID />} />
          <Route path="/area/:areaName" element={<DynamicRouting />} />
        
        
        </Route>
      </Routes>
 
      
    </>
  );
};

export default App;
