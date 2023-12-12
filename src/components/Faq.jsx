import React, { useState } from 'react'
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";

import style from '../css/faq.module.css'

export default function Faq({id,title,description}) {
  console.log(description)
  const [isToggle, setToggle] = useState(false);

  const renderDescription = isToggle && (
  <p className={style.description}>{description}</p>);

  const toggleBtn = isToggle ?
  <FaCircleMinus className={style.toggle__btn} onClick={() => setToggle(!isToggle)} /> :
  <FaCirclePlus className={style.toggle__btn} onClick={() => setToggle(!isToggle)} />
  

  return (
    <article className={style.faq}>
      <div className={style.faq__info}>
        <h4>{title}</h4>
        {toggleBtn}
      </div>
        {renderDescription}
      
    </article>
  )
}
