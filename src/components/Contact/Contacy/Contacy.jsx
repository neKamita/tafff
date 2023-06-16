import React from 'react'
import h from './Contacy.module.css'
function Contacy(props) {
  return (
    <div className={h.contacy}>
    <h1 className={h.title}>{props.title}</h1>
    
    <h1 className={h.text}>{props.text}</h1>
      
    </div>
  )
}

export default Contacy
