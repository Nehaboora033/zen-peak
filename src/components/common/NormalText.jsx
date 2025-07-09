import React from 'react'

const NormalText = ({NormalText,className=''}) => {
  return (
    <div className={`${className} font-[400] text-base`}>{ NormalText}</div>
  )
}

export default NormalText