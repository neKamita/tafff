import React, { useState, useEffect } from "react";
import axios from "axios";
import s from "./Sexsex.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./card/Card";
import h from "./Sexsex.module.css";

function Sexsex() {
  const [sex, setsex] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/events").then((resps) => {
      let alleve = resps.data.data;
      setsex(alleve);
    });
  }, []);
  return (
    <div className="container mbe">
      <h1 className={h.title}>МЕРОПРИЯТИЯ</h1>
      <OwlCarousel
        className="owl-theme "
        loop
        margin={30}
        dots={false}
        autoplay
        autoplayTimeout={2000}
        items={3}
      >
        {sex.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              img={item.url}
              category={item.category}
              content={item.content}
              slug={item.slug}
            />
          );
        })}
      </OwlCarousel>
    </div>
  );
}

export default Sexsex;
