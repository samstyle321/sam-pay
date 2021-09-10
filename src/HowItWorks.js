import React, { useState } from "react";
import workapi from "./Api/WorkApi";

const HowItWorks = () => {
  const [workData, setworkData] = useState(workapi);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How does it Work</h1>
          <div className="row">
            {workData.map((curEle) => {
              const { id, logo, title, info } = curEle;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subdiv">
                    <i className={`fonstawesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;
