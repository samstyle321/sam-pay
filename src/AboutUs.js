import React, { useState } from "react";
import AboutUsApi from "./Api/AboutUsApi";

const AboutUs = () => {
  const [AboutUsData, setAboutUsData] = useState(AboutUsApi);
  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-services-leftside-img">
              <img src="./images/hero3.jpg" alt="About Us" />
            </div>
            <div className="col-12 col-lg-7 our-services-list">
              <h3 className="mini-title">
                -- AVALIABLE @ GOOGLE AND IOS STORE ONLY
              </h3>
              <h1 className="main-heading"> How to us the App</h1>
              {AboutUsData.map((curEle) => {
                const { id, title, info } = curEle;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/*2nd Part */}

      <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">-- SUPPORT IN ANY LANGUAGES</h3>
              <h1 className="main-heading">
                World class support is <br /> avaliable 24/7
              </h1>
              {AboutUsData.map((curEle) => {
                const { id, title, info } = curEle;
                return (
                  <>
                    <div className="row our-services-info" key={id}>
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-border">Learn More</button>
            </div>
            <div className="col-12 col-lg-5  our-services-rightside-img">
              <img src="./images/callcenter.jpg" alt="About Us" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
