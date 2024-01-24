import React from "react";
import Footer from "../components/Footer";
import HomeAbout from "../components/HomeAbout";
import HomeBanner from "../components/HomeBanner";
import HomeService from "../components/HomeService";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomeBanner
        title="YOU DREAM"
        title2="WE CREATE"
        text="We are a Leading software development company and provide a
                range of solutions including Web development, Mobile
                apps, UI/UX,  Search engine optimisation, WordPress and
                CMS."
      />
      <HomeAbout  />
      <HomeService />
      
      <Footer />
    </>
  );
};

export default Home;
