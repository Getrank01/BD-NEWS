import React from "react";
import Carousel from "react-bootstrap/Carousel";
import b1 from "../assets/b1.jpg";
import b2 from "../assets/b2.jpg";

const Carousels = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={b1} alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={b2} alt="Second slide" />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousels;
