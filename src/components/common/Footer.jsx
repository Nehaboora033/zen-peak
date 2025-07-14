import React from 'react'
import logo from './../../assets/png/Logo.png'
import NormalText from './NormalText'
import { Footer_Links, Social_Links } from '../../utils/helper'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className='bg-[#323232] pt-[50px]'>
      <div className='max-w-[1140px] mx-auto px-3'>
        <img src={logo} alt="image" className=' max-w-[] sm:max-w-[254px] max-h-[61  px] block mx-auto' />
        <NormalText className='text-[#C1C1C1] text-center mt-4 max-w-[401px] mx-auto' NormalText={'Pulvinar scelerisque viverra at donec nunc orci ullam corper penatibus crasigula. '} />

        <div className='flex gap-5 mt-[25px] mx-auto max-w-[507px]'>
          {Footer_Links.map((item, index) => (
            <HashLink key={index} smooth
              to={`/${item.link}`} className='text-white capitalize'>
              {item.name}
            </HashLink>
          ))}
        </div>

        <div className='gap-[11px] flex mx-auto max-w-[142px] mt-[25px] pb-[50px] cursor-pointer'>
          {Social_Links.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#A68272] size-[40px] flex items-center justify-center hover:shadow transition-all hover:-translate-y-1">
              <item.image />
            </Link>
          ))}
        </div>

      </div>
      <div className='py-[18px] border-t border-[#474747] w-full '>
        <div className='max-w-[1140px] mx-auto px-3 flex items-center justify-between'>
          <NormalText className='text-[#474747]' NormalText={'Privacy Policy | Conditions'} />
          <NormalText className='text-[#474747]' NormalText={'ZenPeak | Copyright©2024'} />
        </div>
      </div>
    </div>
  )
}

export default Footer