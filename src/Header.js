import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start order-lg-first order-last">
              <h1 className="display-2">
                Online Payment Made <br /> Easy for you.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis ? Ipsa officia ad deserunt Voluptate quam, nisi odio
                officiis tempora recusandee Voluptate quam, nisi odio officiis
                tempora recusandee.
              </p>
              <h3>Get early access for you.</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill    me-3 p-2 form-control-text"
                  placeholder="Enter your Email"
                />
                <div className="input-group-button">Get it Now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images order-md-first order-sm-first">
              <img
                src="./images/hero1.jpg"
                alt="hero-img"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="hero-img"
                className="img-fluid main-herosec-img2"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
