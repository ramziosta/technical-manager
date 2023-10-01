import React from "react";
import Link from "next/link";
import Hero from "../components/Hero/index";
import Who from "../components/who/index";
import What from "../components/whatIDo/index";

const Home = () => {
  return (
    <div style={{width:"1440px", border:"4px solid black"}}>
      <Hero />
      <Who />
      <What />
    </div>
  );
};

export default Home;

