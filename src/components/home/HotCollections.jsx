import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Skeleton from "../UI/Skeleton";

const HotCollections = () => {
  const [hotCollect, setHotCollect] = useState([]);
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);
  const [loading, setLoading] = useState(true);

  function getSlidesToShow() {
    if (typeof window === "undefined") return 4;

    const width = window.innerWidth;

    if (width < 768) return 1;
    if (width < 992) return 2;
    if (width < 1200) return 3;

    return 4;
  }

  async function getHotCollections() {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`,
      );

      setHotCollect(data);
    } catch (error) {
      console.error("Failed to load collections:", error);
    } finally {
      setLoading(false);
    }
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    getHotCollections();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(getSlidesToShow());
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-lg-12">
            <Slider {...settings} className="hot-collections-slider">
              {loading
                ? new Array(6).fill(0).map((_, index) => (
                    <div className="hot-slide" key={index}>
                      <div className="nft_coll">
                        <div className="nft_wrap">
                          <Link to="/">
                            <Skeleton width={"100%"} height={"200px"} />
                          </Link>
                        </div>
                        <div className="nft_coll_pp">
                          <Link to="/author">
                            <Skeleton
                              width={"50px"}
                              height={"50px"}
                              borderRadius={"50%"}
                            />
                          </Link>
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="nft_coll_info">
                          <Link to="/explore">
                            <Skeleton width={"100px"} height={"20px"} />
                          </Link>
                          <br />
                          <Skeleton width={"60px"} height={"20px"} />
                        </div>
                      </div>
                    </div>
                  ))
                : hotCollect.map((data) => (
                    <div className="hot-slide" key={data.id}>
                      <div className="nft_coll">
                        <div className="nft_wrap">
                          <Link to="/item-details">
                            <img
                              src={data.nftImage}
                              className="lazy img-fluid"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="nft_coll_pp">
                          <Link to="/author">
                            <img
                              className="lazy pp-coll"
                              src={data.authorImage}
                              alt=""
                            />
                          </Link>
                          <i className="fa fa-check"></i>
                        </div>
                        <div className="nft_coll_info">
                          <Link to="/explore">
                            <h4>{data.title}</h4>
                          </Link>
                          <span>ERC-{data.code}</span>
                        </div>
                      </div>
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotCollections;
