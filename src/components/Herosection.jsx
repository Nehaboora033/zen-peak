import React from 'react'
import logo from './../assets/png/Logo.png'
import backgroundImage from './../assets/webp/herosection-bg-img.webp'
import SubHeading from './common/SubHeading'
import Button from './common/Button'

const Herosection = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})` }} className='pt-[99px]' >
      <div className='max-w-[1140px] px-3 mx-auto pb-[600px]'>
        <img src={logo} alt="image" className='mx-auto' />
        <SubHeading className='text-[white] max-w-[1032px] text-center mt-[28px] mx-auto' StartItalicText={'Exploring'} EndItalicText={'Market Strategies'} BoldText={'Crypto and Primary'} />
        <Button className='rounded-[127px] px-[50px] py-[25px] max-w-[202px] mx-auto mt-[40px]' ButtonText={'Contact Us'}/>
        <div>
        </div>
      </div>
    </div>
  )
}

export default Herosection