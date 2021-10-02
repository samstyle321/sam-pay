import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import Services from "./Services";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <AboutUs />
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
