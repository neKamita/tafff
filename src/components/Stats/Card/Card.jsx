import React from "react";
import h from "./Card.module.css";
import { NavLink } from "react-router-dom";
function Card(props) {
  return (
    <div className={h.card}>
      <NavLink to={`/Stats/${props.slug}`}>
        <div className={h.imgbox}>
          <img src={props.img} className={h.img}></img>
        </div>
        <h1 className={h.title}>{props.title}</h1>
        <h1 className={h.text}>{props.text}</h1>
      </NavLink>
    </div>
  );
}

export default Card;
