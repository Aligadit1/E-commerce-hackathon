import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { FaArrowRightLong } from 'react-icons/fa6'

const Hero = () => {
  return (
      <div className=' bg-[#F0F2F3] left-border flex flex-col sm:flex-row items-center justify-center px-5 py-5 sm:py-20 w-full gap-5 xl:gap-28 xl-1550:gap-80 xl-1700:gap-[30rem]  '>
                  {/* Hero Info */}
                  <div className='  flex flex-col items-start justify-start text-left gap-5 sm:w-[557px] '>
                      <p className='font-[Inter] font-normal text-sm text-[#272343] uppercase'>Welcome to chairy</p>
                      <p className='font-[Inter] font-bold  text-2xl md:text-4xl xl:text-5xl xl-1620:text-6xl capitalize text-[#272343]'>Best Furniture Collection for your interior.</p>
                   <Button className='bg-[#029fae] hover:bg-[#F0F2F3] hover:text-[#272343] items-end'>Shop Now<FaArrowRightLong /></Button>
                   </div>
                   {/* Hero Image */}
                   <div>
                   <Image src={"/HeroImage.png"} alt='Hero' height={584} width={434} className=' '/>
                   </div>
              </div>
  )
}

export default Hero
