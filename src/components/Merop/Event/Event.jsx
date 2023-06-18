import React from "react";
import h from "./Event.module.css";
import { NavLink } from "react-router-dom";

function Event(props) {
  return (
    <div className={h.card}>
      <NavLink to={`/Merop/${props.slug}`}>
        <div className={h.ibox}>
          <img src={props.img} className={h.img}></img>
        </div>
        <h1 className={h.title}>{props.title}</h1>
        <p className={h.text}>{props.text}</p>
      </NavLink>
    </div>
  );
}

export default Event;
