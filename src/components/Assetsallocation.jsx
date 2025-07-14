import React from 'react'
import SubHeading from './common/SubHeading'
import Image from './../assets/webp/piechart.webp'
import NormalText from './common/NormalText'
import LeftImage from './../assets/webp/assetsallocation-bg-left-img.webp'
import RightImage from './../assets/webp/assetsallocation-bg-right-img.webp'

const Assetsallocation = () => {
  return (
    <div className='bg-no-repeat pt-[218px] bg-[#F7F3F0] ' style={{
      backgroundImage: `url(${LeftImage}) , url(${RightImage})`,
      backgroundPosition: `left,right`,
    }}>
      <div className='max-w-[1164px] px-3 mx-auto'>
        <div className='max-w-[1140px] bg-[#A68272] pt-[45px] pb-[49px] sm:pb-[64px] rounded-2xl pl-[19px] sm:pl-[42px] pr-[19px]'>
          <div className='flex lg:flex-row flex-col-reverse -mx-3 lg:gap-0 gap-[30px]'>
            <div className='lg:w-1/2 w-full px-3 '>
              <img src={Image} alt="image" className='max-lg:mx-auto block ' />
            </div>
            <div className='lg:w-1/2 w-full px-3 flex justify-center flex-col'>
              <SubHeading className='text-[#E4D9D5]' StartItalicText={'Institutional'} EndItalicText={'Crypto'} BoldText={'Asset Allocation in'} />
              <NormalText className='text-[#E4D9D5]' NormalText={'Pulvinar scelerisque viverra at donec nunc orci ullam corper penatibus crasigula praesent dictum fames suscipit nam. '} />
              <NormalText className='' NormalText={''} />
              <div className='flex items-center gap-[15px] mt-[25px]'>
                <div className='bg-white w-[6px] h-[92px] rounded-[115px]'>
                </div>
                <div>
                  <SubHeading className='!text-xl text-[#EDE6E3]' BoldText={'Consectetur sagittis'} />
                  <NormalText className='text-[#EDE6E3] mt-[10px]' NormalText={'Fermentum praesent vel adipiscing eget dictum. Risus id tellus mauris lorem ornare titor a neque nullam libero nunc eget.'} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Assetsallocation