import React from 'react'

const LittleBold = ({LittleBoldText,className=''}) => {
  return (
    <div className={`${className} font-bold text-base  bold`}>{LittleBoldText} </div>
  )
}

export default LittleBold