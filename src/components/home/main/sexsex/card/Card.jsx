import React from "react";
import s from "./Card.module.css";
import { NavLink } from "react-router-dom";

function Card(props) {
  return (
    <NavLink to={`/Merop/${props.slug}`}>
      <div className={s.card}>
        <div className={s.imgcard}>
          <img src={props.img} className={s.img} alt="" />
        </div>
        <div className={s.title}>
          <h1 className={s.title}>{props.title}</h1>
          <h3 className={s.content}>{props.content}</h3>
        </div>
      </div>
    </NavLink>
  );
}

export default Card;
