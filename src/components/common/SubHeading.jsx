import React from 'react'

const SubHeading = ({ StartItalicText, EndItalicText, BoldText,className='',Startclass='',Boldclass='',Endclass='' }) => {
    return (
        <div className={`text-[64px] leading-[130%] capitalize ${className}`}>
            <span className={`${Startclass} font-light italic`}>{StartItalicText}</span> <span className={`${Boldclass} font-bold `}>{BoldText}</span>   <span className={`${Endclass} font-light italic`}>{EndItalicText}</span>
        </div>
    )
}

export default SubHeading