import React from "react";
import Hero from "../components/Hero/index";
import Who from "../components/who/index";
import What from "../components/whatIDo/index";
import Where from "../components/where/index";
import When from "../components/when/index";
import Contact from "../components/contact/index";
import Footer from "../components/Footer/index";

const Home = () => {
  return (
    <div>
      <Hero />
      <Who />
      <What />
      <Where />
      <When />
      <Contact /> 
      <Footer />
    </div>
  );
};

export default Home;

// 