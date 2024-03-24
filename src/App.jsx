import { useState } from "react";
import "./App.css";
import "./index.css";
import Navigation from "./Reusable/Nav";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import { Footer } from "./Reusable/Footer";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
