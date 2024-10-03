import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Creators from "../components/Creators";
import Spotlight from "../components/Spotlight";
import DesignCreator from "../components/DesignCreator";
import TheRise from "../components/TheRise";
import Poster from "../components/Poster";

import Companys from "../components/Companys";
import Footer from "../components/Footer";
import Campaigns from "../components/Campaigns";

const Dashboard = () => {
  return (
    <div>
      <Navbar />

      <Hero />
      <Creators />
      <Spotlight title="In The Spotlight" />
      <DesignCreator />

      <TheRise />
      <Poster />
      <Campaigns />
      <Spotlight title="UGC" />
      <Companys />
      <Footer />
    </div>
  );
};

export default Dashboard;
