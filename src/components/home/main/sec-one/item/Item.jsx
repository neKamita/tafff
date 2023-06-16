import React from "react";
import l from "./Item.module.css";
import Navbar from "../../../../navbar/Navbar";
function Item(props) {
  return (
    <div className={l.item} style={{ backgroundImage: `url(${props.img})` }}>
      <div className="container">
      <div className={l.info}>
      <h1 className={l.title}>{props.title}</h1>
      <h1 className={l.text}>{props.text}</h1>
      <button className={l.btn}>Узнать Больше</button>
      </div>
      </div>
    </div>
  );
}

export default Item;
