import React from 'react'
import h from './Card.module.css'
function Card(props) {
  return (
    <div className={h.card} >
    <div className={h.imgcard}>
      <img src={props.img} className={h.img} alt="" />
    </div>
    <div className={h.title}>
    <h1 className={h.title}>{props.title}</h1>
    <h3 className={h.content}>{props.text}</h3>
    </div>
   
  </div>
      
  )
}

export default Card
