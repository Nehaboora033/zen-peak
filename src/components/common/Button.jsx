import React from 'react'

const Button = ({ButtonText,className=''}) => {
  return (
    <div className={`${className} text-white font-medium border border-white duration-200 cursor-pointer hover:scale-105 transition-transform active:scale-105 `}>{ButtonText} </div>
  )
}

export default Button