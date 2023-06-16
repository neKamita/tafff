import React, {NavLink} from 'react'
import h from './Event.module.css'

function Event(props) {
  return (
  <div className={h.card}>
    <div className={h.ibox}>
        <img src={props.img} className={h.img}></img>
    </div>
    <h1 className={h.title}>{props.title}</h1>
    <p className={h.text}>{props.text}</p>
      
    </div>
  
  )
}

export default Event
