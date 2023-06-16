import React from 'react'
import s from "./Card.module.css"

function Card(props) {

  return (
        <div className={s.card} >
          <div className={s.imgcard}>
            <img src={props.img} className={s.img} alt="" />
          </div>
          <div className={s.title}>
          <h1 className={s.title}>{props.title}</h1>
          <h3 className={s.content}>{props.content}</h3>
          </div>
         
        </div>
  )
}

export default Card
