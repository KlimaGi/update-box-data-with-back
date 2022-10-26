import React from 'react'

const Button = ({ func, text }) => {
  return (
    <button onClick={func} className='button'>{text}</button>
  )
}

export default Button;
