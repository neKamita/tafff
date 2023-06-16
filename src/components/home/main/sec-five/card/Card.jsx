import React from 'react'
import d from "./Card.module.css"

function Card(props) {

  return (
        <div className={d.card} >
          <div className={d.imgcard}>
            <img src={props.img} className={d.img} alt="" />
          </div>
          <div className={d.title}>
          <h1 className={d.title}>{props.title}</h1>
          <h3 className={d.content}>{props.content}</h3>
          </div>
         
        </div>
  )
}

export default Card;
