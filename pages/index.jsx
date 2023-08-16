import React from "react";
import Link from "next/link";
import Hero from "../components/Hero/index";
import Who from "../components/who/index";
import What from "../components/whatIdo/index";

const Home = () => {
  return (
    <>
      <Hero />
      <Who />
      <What />
    </>
  );
};

export default Home;
