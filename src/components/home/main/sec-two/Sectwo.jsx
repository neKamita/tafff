import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card/Card";
import h from "./Sectwo.module.css";

function Sectwo() {
  const [card, useCard] = useState([]);
  useEffect(() => {
    axios
      .get("https://admin.taffeine.com/api/home/what_product")
      .then((resp) => {
        let allCard = resp.data.data;
        useCard(allCard);
      });
  }, []);
  return (
    <div className={h.sectwo}>
      <h1 className={h.title}>Что уникального?</h1>
      <div className="container">
        <div className={h.row}>
          {card.map((item, index) => {
            return (
              <Card
                key={index}
                img={item.url}
                text={item.short_content}
                title={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Sectwo;
