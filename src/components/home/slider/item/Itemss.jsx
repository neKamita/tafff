import React from "react";
import l from "./Item.module.css";
function Itemss(props) {
  console.log(props);
  return (
    <div className={l.item}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Itemss;
