import React, { useState, useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import axios from "axios";
import Item from "./item/Item";
function Secone() {
  const [slide, setSlide] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/home/banner").then((resp) => {
      let allSilders = resp.data.data;
      setSlide(allSilders);
      console.log(allSilders);
    });
  }, []);
  return (
    <OwlCarousel  className="owl-theme"  nav autoplay autoplayTimeout='5000' animateOut={'fadeOut'}  animateIn={'fadeIn'} loop items={1}>
      {slide.map((item, index) => {
        return (
          <Item
            key={index}
            title={item.title}
            text={item.short_content}
            img={item.url}
          />
        );
      })}
      
    </OwlCarousel>
  );
}

export default Secone;
