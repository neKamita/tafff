import React, { useState, useEffect } from "react";
import h from "./Merop.module.css";
import MEvent from "./Merop-Events/MEvent";
import Event from "./Event/Event";
import axios from "axios";
function Merop(props) {
  const [event, useEvent] = useState([]);
  useEffect(() => {
    axios.get("https://admin.taffeine.com/api/events").then((resp) => {
      let allEvent = resp.data.data;
      useEvent(allEvent);
    });
  }, []);
  return (
    <div className={h.Merop}>
      <div className={h.MeropTwo}>
        <div className={h.text}>
          <h1 className={h.title}>МЕРОПРИЯТИЯ</h1>
          <h1 className={h.text}>
            Откройте для себя всемирные события Taffeine
          </h1>
        </div>
      </div>
      <div className="container">
        <MEvent />
        <div className={h.eve}>
          {event.map((item, index) => {
            return (
              <Event
                key={index}
                title={item.title}
                text={item.content}
                img={item.url}
                slug={item.slug}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Merop;
