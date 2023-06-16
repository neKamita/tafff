import React from 'react'
import h from './Card.module.css'
function Card(props) {
  return (
    <div className={h.card}>
    <img src={props.img} className={h.img }></img>
    <div className={h.col }>
        <h1 className={h.title}>{props.title}</h1>
        <p className={h.text}>{props.text}</p>
    </div>


      
    </div>
  )
}

export default Card
