import React from "react";

const LandingFeatureBox = ({ title, para, icon }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-sm-30">
      <div className="feature-box f-boxed style-3">
        <i className={`bg-color-2 i-boxed ${icon}`} data-aos="fade-up"></i>
        <div className="text">
          <h4 className="" data-aos="fade-up">
            {title}
          </h4>
          <p data-aos="fade-up">{para}</p>
        </div>
        <i className={`wm ${icon}`} data-aos="fade-up"></i>
      </div>
    </div>
  );
};

export default LandingFeatureBox;
