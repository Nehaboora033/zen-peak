import React from 'react'

const SubHeading = ({ StartItalicText, EndItalicText, BoldText }) => {
    return (
        <div className='text-[64px] leading-[130%]'>
            <span className={`${className} font-light italic`}>{StartItalicText}</span>
            <span className={`${className} font-bold `}>{BoldText}</span>
            <span className={`${className} font-light italic`}>{EndItalicText}</span>
        </div>
    )
}

export default SubHeading