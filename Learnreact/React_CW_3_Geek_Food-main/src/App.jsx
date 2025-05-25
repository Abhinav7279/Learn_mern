import React from "react";

import Nav from "./components/nav_bar/Nav";
import Hero from "./components/hero/Hero";
import HouseSection from "./components/house_section/HouseSection";
import Cards from "./components/cards_section/Cards";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <HouseSection />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
