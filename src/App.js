import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="container bg-white mx-auto pb-[2px]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/property/:propertyId" element={<PropertyDetails />} />
        </Routes>
      </div>
      {/* Note that Footer is outside the Container to get full width */}
      <Footer />
    </>
  );
};

export default App;
