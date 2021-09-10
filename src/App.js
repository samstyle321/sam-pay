import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./Navbar";
import Header from "./Header";
import HowItWorks from "./HowItWorks";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWorks />
    </>
  );
};

export default App;
