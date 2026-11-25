import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderCarosel = ({ children }) => {
  const [slidesToShow, setSlidesToShow] = useState(getSlidesToShow);

  function getSlidesToShow() {
    if (typeof window === "undefined") return 4;

    const width = window.innerWidth;

    if (width < 768) return 1;
    if (width < 992) return 2;
    if (width < 1200) return 3;

    return 4;
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
    <Slider {...settings} className="custom-slider">
      {children}
    </Slider>
  );
};

export default SliderCarosel;
