import React from "react";
import { Routes, Route } from "react-router-dom";

// layout components - header & footer
import { Header, Footer } from "./components/index";

// pages
import { Home, PropertyDetails } from "./pages/index";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
