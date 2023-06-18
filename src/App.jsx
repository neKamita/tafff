import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Merop from "./components/Merop/Merop";
import Stats from "./components/Stats/Stats";
import Product from "./components/Product/Product";
import Contact from "./components/Contact/Contact";
import Addit from "./components/Stats/Addit/Addit";
import Eve from "./components/Merop/Eve/Eve";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Merop />} />
          <Route path="/articles" element={<Stats />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Stats/:slug" element={<Addit />} />
          <Route path="/Merop/:slug" element={<Eve />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
