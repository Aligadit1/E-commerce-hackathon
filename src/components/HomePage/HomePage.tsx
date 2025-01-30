import React from 'react'
import Image from 'next/image';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';
import TopCategories from './TopCategories';
import OurProducts from './OurProducts';
const HomePage = () => {
  return (
    <div className='flex flex-col text-center items-center max-w-[1920px] mx-auto px-2 sm:px-10 lg:px-20 '>

            {/* Hero Section */}
            <Hero/>
            {/* Company Logos */}
            <Image src="/CLogo.png" alt='company logo' width={1920} height={139} className='mt-16 w-full '   />
            {/* featured Products */}
             <FeaturedProducts/>
            {/* Top Categories */}
            <TopCategories/>
            {/*  Hot category */}
            <div className='mt-16'>
            <Image src="/HC1.png" alt='Popular Chairs' height={648} width={1320} className='w-full' />
            </div>
            {/* our products */}
            <OurProducts/>
    </div>
  )
}

export default HomePage
