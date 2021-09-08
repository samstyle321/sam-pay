import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
              <h1 className="display-2">
                Online Payment Made <br /> Easy for you.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis ? Ipsa officia ad deserunt Voluptate quam, nisi odio
                officiis tempora recusandee Voluptate quam, nisi odio officiis
                tempora recusandee.
              </p>
              <h3>get early access for you.</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text"
                />
                <div className="input-group-text">Get it Now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center">
              <img
                src="./images/hero1.jpg"
                alt="hero-img"
                className="img-fluid"
              />
              <img
                src="./images/hero4.jpg"
                alt="hero-img"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
