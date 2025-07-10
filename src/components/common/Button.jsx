import React from 'react'

const Button = ({ButtonText,className=''}) => {
  return (
    <div className={`${className} text-white font-medium border border-white `}>{ButtonText} </div>
  )
}

export default Button