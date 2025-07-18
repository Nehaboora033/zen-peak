import React from 'react'
import logo from './../assets/png/Logo.png'
import backgroundImage from './../assets/webp/herosection-bg-img.webp'
import SubHeading from './common/SubHeading'
import Button from './common/Button'

const Herosection = () => {
  return (
   
      <div style={{ backgroundImage: `url(${backgroundImage})` }} className='pt-[99px] bg-no-repeat bg-cover bg-center ' >
        <div className='max-w-[1140px] px-3 mx-auto pb-[396px] sm:pb-[600px]'>
          <img src={logo} alt="image" className='mx-auto  sm:w-[480px] w-[240px] h-[50%]' />
          <SubHeading className='text-[white] max-w-[1032px] text-center mt-[28px] mx-auto' StartItalicText={'Exploring'} EndItalicText={'Market Strategies'} BoldText={'Crypto and Primary'} />
          <Button className='rounded-[112px] text-xl px-[46px] py-[20px] sm:py-[25px] w-full text-center sm:max-w-[202px] sm:mx-auto mt-[40px]' ButtonText={'Contact Us'}/>
          <div>
          </div>
        </div>
      </div>
   
  )
}

export default Herosection