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
        <Carousel className="home_image"
          navButtonsProps={{
            style: {
              backgroundColor: "transparent",
              borderRadius: 0
            },
          }}
          indicators={false}
          animation={"slide"}
          navButtonsAlwaysVisible={true}>
          {Carousel_Images.map((image) => (
            <CarouselSlide img1={image} />
          ))}
        </Carousel>
        {/* <img
          alt="Join prime now"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          className="home_image"></img> */}
        <div className="home_row">
          <Product
            id={1234567}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            price={29.99}
            rating={4}
          />
          <Product
            id={2342567}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            price={239}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            id={4532432}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
            price={199.99}
          />
          <Product
            id={8765678}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
            price={98.99}
          />
          <Product
            id={5467876}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
            price={598.99}
          />
        </div>
        <div className="home_row">
          <Product
            id={3213643}
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
            price={1095.99}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
