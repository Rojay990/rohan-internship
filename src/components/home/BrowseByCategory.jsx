import React from "react";
import BrowseByCatBox from "../UI/BrowseByCatBox";

const BrowseByCategory = () => {
  return (
    <section id="section-category" className="no-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2 data-aos="fade-in">Browse by category</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <BrowseByCatBox title={"Art"} icon={"fa-image"} />
          <BrowseByCatBox title={"Music"} icon={"fa-music"} />
          <BrowseByCatBox title={"Domain Names"} icon={"fa-search"} />
          <BrowseByCatBox title={"Virtual Worlds"} icon={"fa-globe"} />
          <BrowseByCatBox title={"Trading Cards"} icon={"fa-vcard"} />
          <BrowseByCatBox title={"Collectibles"} icon={"fa-th"} />
        </div>
      </div>
    </section>
  );
};

export default BrowseByCategory;
