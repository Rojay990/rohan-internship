import React from "react";
import { Link } from "react-router-dom";

const BrowseByCatBox = ({ title, icon }) => {
  return (
    <div className="col-md-2 col-sm-4 col-6 mb-sm-30" data-aos="fade-left">
      <Link to="/explore" className="icon-box style-2 rounded">
        <i className={`fa ${icon}`}></i>
        <span>{title}</span>
      </Link>
    </div>
  );
};

export default BrowseByCatBox;
