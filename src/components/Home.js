import React from "react";
import "../Home.css";
import Product from "./Product";
import Carousel from "react-material-ui-carousel";
import { Carousel_Images } from "../CarouselImages";
import CarouselSlide from "./CarouselSlide";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <Carousel
          className="home_image"
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              borderRadius: 0,
            },
          }}
          indicators={false}
          animation={"slide"}
          navButtonsAlwaysVisible={true}>
          {Carousel_Images.map((image) => (
            <CarouselSlide img1={image} />
          ))}
        </Carousel>
        <div className="home_row">
          <Product
            id={1234567}
            title="Lenovo Ideapad Slim 3 Intel Celeron N4020 15.6 (39.62cms) HD Thin and Light Laptop"
            image="https://m.media-amazon.com/images/I/61Dw5Z8LzJL._AC_UY327_FMwebp_QL65_.jpg"
            price={27490}
            rating={4}
          />
          <Product
            id={2342567}
            title="OnePlus 9R 5G (Carbon Black, 8GB RAM, 128GB Storage)"
            image="https://m.media-amazon.com/images/I/61PDbUd1VaL._AC_UY327_FMwebp_QL65_.jpg"
            price={39999}
            rating={4}
          />
          <Product
            id={2342565}
            title="Canon EOS 1500D 24.1MP Digital SLR Camera (Black) with 18-55 and 55-250mm is II Lens"
            image="https://m.media-amazon.com/images/I/61TMY+ER+LL._AC_UL480_FMwebp_QL65_.jpg"
            price={43250}
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id={1111111}
            title="REDUX Analog Linear Designer Dial Men’s & Boy's Watch"
            image="https://m.media-amazon.com/images/I/81BDpSIwu3L._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
            price={330}
          />
          <Product
            id={222222}
            title="Perfect Star V11 Laptop Bag 18inch Navy Blue Backpack"
            image="https://m.media-amazon.com/images/I/71aYhFwy2zL._AC_UL480_FMwebp_QL65_.jpg"
            rating={4}
            price={670}
          />
          <Product
            id={33333}
            title="Amazon Echo (2nd Gen), Black – Smart speaker with Alexa"
            image="https://m.media-amazon.com/images/I/61QoZCzMx3L._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
            price={4599}
          />
          <Product
            id={3213643}
            title="Lenovo Tab M10 FHD Plus (10.3 inch, 4 GB, 128 GB, Wi-Fi+ LTE) with Active Pen"
            image="https://images-na.ssl-images-amazon.com/images/I/71UD5dhwyYS._SL1500_.jpg"
            rating={4}
            price={23299}
          />
        </div>
        <div className="home_row">
          <Product
            id={4532432}
            title="QAWACHH The Alchemist by Paulo Coelho Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/41-dWWlWzXL.jpg"
            rating={4}
            price={230}
          />
          <Product
            id={8765678}
            title="World’s Greatest Books For Personal Growth & Wealth (Set of 4 Books): Perfect Motivational Gift Set Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/71frknp-CWL.jpg"
            rating={5}
            price={330}
          />
          <Product
            id={5467876}
            title="My First Library: Boxset of 10 Board Books for Kids Board book"
            image="https://images-na.ssl-images-amazon.com/images/I/71xBLRBYOiL.jpg"
            rating={4}
            price={419}
          />
        </div>
        <div className="home_row">
          <Product
            id={3213643}
            title="Samsung 109 cm (43 inches) 4K Ultra HD Smart LED TV UA43TU8000KBXL (Black) (2020 Model)"
            image="https://images-na.ssl-images-amazon.com/images/I/91oKbXQbBtL._SL1500_.jpg"
            rating={4}
            price={43499}
          />
          <Product
            id={444444}
            title="LG UltraWide 34 Inch WFHD (2560 x 1080) IPS Display - HDR 10, AMD Free sync, sRGB 99%, Multitasking and Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/71xMxbdxrsL._SL1500_.jpg"
            rating={5}
            price={26799}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
