import React from 'react'
import "../Home.css";

function CarouselSlide(props) {
  const { img1 } = props.img1
  return <img className="home_image" src={img1} />;
}

export default CarouselSlide
