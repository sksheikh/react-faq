import React from 'react'
import style from '../css/card.module.css'

export default function Card({children}) {
  return (
    <div className={style.card}>
      {children}
    </div>
  )
}

