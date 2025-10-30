import React from "react";
import Hero from "./Hero";
import Award from "./Award";
import Stats from "./Stats";
import Education from "./Education";
import Pricing from "./Pricing";
import OpenAccount from "../OpenAccount";
import Navbar from "../Navbar";
import Footer from "../Footer";

function HomePage(params) {
  return (
    <>
      <Navbar />
      <Hero />
      <Award />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
      
    </>
  );
}
export default HomePage;
