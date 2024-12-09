import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='my-24 flex flex-col gap-20 items-center justify-center max-w-[1990px] mx-auto'>
        <div className='flex flex-col xl:flex-row gap-7'>
            <Image src={'/AboutImage.png'} alt='About' width={672} height={478} /> 
            <Image src={'/ChairImage1.png'} alt='About' width={619} height={478} /> 
        </div>
        <h4 className='font-[Inter] not-italic font-semibold text-[16px] md:text-[20px] xl:text-[32px] capitalize text-[#272343]'>What makes our Brand Different</h4>
        <Image src={'/Advantages.png'} alt='About' width={1320} height={244} />
        <div className='flex flex-col items-start justify-start gap-10'>
            <h4 className='font-[Inter] not-italic font-semibold text-[16px] md:text-[20px] xl:text-[32px] capitalize text-[#272343]'>Our Popular Products</h4>
            <div className='flex flex-col xl:flex-row gap-4'>
            <Image src={'/PopularAbout1.png'} alt='About' width={630} height={462} /> 
            <Image src={'/PopularAbout2.png'} alt='About' width={305} height={462} /> 
            <Image src={'/PopularAbout3.png'} alt='About' width={305} height={462} /> 
            </div>
        </div>
      
    </div>
  )
}

export default About
