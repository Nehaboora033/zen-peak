import React from 'react'
import SubHeading from './common/SubHeading'
import Image from './../assets/webp/piechart.webp'
import NormalText from './common/NormalText'

const Assetsallocation = () => {
  return (
    <div className='bg-[#A68272] pt-[45px] pb-[64px]'>
      <div className='max-w-[1140px] mx-auto px-3'>
        <div className='flex flex-wrap -mx-3'>
          <div className='w-1/2 px-3 '>
            <img src={Image} alt="image" className='' />
          </div>
          <div className='w-1/2 px-3 flex justify-center flex-col'>
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
  )
}

export default Assetsallocation