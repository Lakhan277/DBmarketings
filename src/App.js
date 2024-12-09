import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
