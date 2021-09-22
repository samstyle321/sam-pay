import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import AboutUs from "./AboutUs";
import Services from "./Services";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
      <AboutUs />
      <Services />
    </>
  );
};

export default App;
