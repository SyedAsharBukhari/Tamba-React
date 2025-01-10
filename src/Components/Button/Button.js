


import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import css from './Button.module.css'


function Button({buttonicon, hello,text}) {
  return (
    <div>
      <button className={css.button} style={hello}>{text} {buttonicon && buttonicon}</button>
    </div>
  )
}

export default Button
