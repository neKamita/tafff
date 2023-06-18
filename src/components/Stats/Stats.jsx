import React, { useEffect, useState } from "react";
import h from "./Stats.module.css";
import axios from "axios";
import Card from "./Card/Card";
function Stats() {
  const [first, setFirst] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/stati").then((resp) => {
      let allinfo = resp.data.data;
      setFirst(allinfo);
    });
  }, []);
  return (
    <div className={h.stats}>
      <div className={h.imgbox}>
        <h1 className={h.title}>Статьи</h1>
        <h1 className={h.text}>
          Откройте для себя всемирные события Taffeine. Изучите календарь
        </h1>
      </div>
      <div className="container">
        <div className={h.cards}>
          {first.map((item, index) => {
            return (
              <Card
                key={index}
                title={item.title}
                img={item.url}
                text={item.content}
                slug={item.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Stats;
