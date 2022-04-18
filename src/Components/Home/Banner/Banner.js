import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import banner1 from "../../../images/banner-1.jpeg";
import banner2 from "../../../images/banner-2.jpeg";
import banner4 from "../../../images/banner-4.jpeg";
import banner5 from "../../../images/banner-5.jpg";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner4} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner5} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
