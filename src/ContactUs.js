import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contactus-leftside col-12 col-lg-5">
                  <h1 className="main-heading">
                    Connect With Our <br /> Sales Team
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Et, quia quis ? Ipsa officia ad deserunt Voluptate quam.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="ContactUs"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contactus-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Add Address"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                    <div className="form-check checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        className="form-check-label main-hero-para"
                        for="flexCheckChecked"
                      >
                        Etquia quis?Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit. Etquia quis?
                      </label>
                    </div>
                    <button type="submit" className="btn btn-style w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
