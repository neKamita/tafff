import React, { useState, useEffect } from "react";
import axios from "axios";
import d from "./Secfive.module.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Card from "./card/Card";
import h from "./Secfive.module.css";

function Secfive() {
  const [sec, setSec] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/stati").then((resps) => {
      let allEve = resps.data.data;
      setSec(allEve);
    });
  }, []);
  return (
    <div className={h.section}>
      <div className="container">
        <h1 className={h.title}>СТАТЬИ</h1>
        <OwlCarousel
          className="owl-theme "
          autoplay
          autoplayTimeout={3000}
          autoplayHoverPause
          loop
          margin={30}
          items={3}
          nav
        >
          {sec.map((item, index) => {
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
    </div>
  );
}

export default Secfive;
