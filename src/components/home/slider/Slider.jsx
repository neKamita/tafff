import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import Itemss from "./item/Itemss";

function Slider() {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/home/banner").then((resp) => {
      let allSlide = resp.data.data;
      setSlides(allSlide);
    });
  }, []);
  return (
    <OwlCarousel className="owl-theme" loop items={3} margin={10} nav>
      <div>
        {slides.map((item, index) => {
          return <Itemss key={index} title={item.title} />;
        })}
      </div>
    </OwlCarousel>
  );
}

export default Slider;
