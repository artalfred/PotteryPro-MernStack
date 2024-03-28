import { useState } from "react";
import "./App.css";
import "./index.css";
import Navigation from "./Reusable/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Footer } from "./Reusable/Footer";
import About from "./Components/About";
import { Courses } from "./Components/Courses";
import { Events } from "./Components/Events";
import Blogs from "./Components/Blogs";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
