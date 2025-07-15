import React, { useEffect } from 'react';
import logo from './../../assets/png/Logo.png';
import NormalText from './NormalText';
import { Footer_Links, Social_Links } from '../../utils/helper';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ParticlesBackground from '../ParticlesBackground';
import backgroundImage from './../../assets/webp/Footer-bg.webp';

const Footer = () => {
  const currentYear = new Date();
  return (
    <div className='relative bg-[#323232] pt-[50px] bg-no-repeat bg-center bg-cover' style={{ backgroundImage: `url(${backgroundImage})` }} >
      {/* <ParticlesBackground /> */}
      <div className='max-w-[1140px] mx-auto px-3 relative z-10'>
        <img src={logo} alt="image" className='max-w-[254px] max-h-[61px] block mx-auto' />
        <NormalText className='text-[#C1C1C1] text-center mt-4 max-w-[401px] mx-auto' NormalText={'Pulvinar scelerisque viverra at donec nunc orci ullam corper penatibus crasigula. '} />

        <div className='flex flex-wrap gap-5 mt-[25px] mx-auto max-w-[507px] justify-center'>
          {Footer_Links.map((item, index) => (
            <HashLink key={index} smooth
              to={`/${item.link}`} className='text-white text-center capitalize whitespace-nowrap'>
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

      <div className='py-[18px] border-t border-[#474747] w-full z-10 relative'>
        <div className='max-w-[1140px] mx-auto px-3 flex items-center justify-between min-[450px]:flex-row flex-col min-[450px]:gap-0 gap-[9px] '>
          <NormalText className='text-[#C1C1C1] text-[14px] min-[450px]:text-base whitespace-nowrap' NormalText={'Privacy Policy | Conditions'} />
          <NormalText className='text-[#C1C1C1] text-[14px] min-[450px]:text-base whitespace-nowrap' NormalText={`ZenPeak | Copyright©${currentYear.getFullYear()}`} />
        </div>
      </div>
    </div>
  )
}

export default Footer;