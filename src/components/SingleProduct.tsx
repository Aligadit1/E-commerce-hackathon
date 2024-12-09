import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const SingleProduct = () => {
  return (
    <div className='flex flex-col justify-center items-center pt-[150px] w-full gap-20   max-w-[1990px] mx-auto'>
        <div className='flex items-start justify-start gap-5 md:gap-10 lg:gap-20 w-[80%]'>
            <div>
                <Image src={'/ChairImage11.png'} alt='chair' height={607} width={675}/>
            </div>
            <div className='flex flex-col item-center justify-center gap-6'>
                <h1 className='font-[Inter] not-italic font-bold capitalize text-[20px] md-text[30px] xl:text-[60px] xl-1950:w-[500px] xl-1950:h-[132px] '>Library Stool Chair</h1>
                <Button className='bg-[#029fae] h-[22px] w-[118px] rounded-full p-4 mt-6'>$20.00 USD</Button>
                <hr />
                <p className='font-[Inter] font-normal not-italic text-[14px] md:text[16px] xl:text-[22px] leading-[15px] md:leading-[23px] xl:leading-[33px] text-[#272343] opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <Button className='bg-[#029fae] flex h-[30px] md:h-[45px] xl:[63px] w-[100px] md:w-[150px] xl:w-[212px] py-[12px] md:py-[16px] xl:py-[24px] px-[8px] md:px-[10px] text-white xl:px-[14px] '>
                    <Image src={'/cart.png'} alt='cart' height={29} width={29}/>
                    <p className='font-[Inter] not-italic font-semibold text-[14px] md:text-[16px] xl:text-[20px]'>Add To Cart</p>
                </Button>
            </div>
        </div>
        <div className='py-[150px]'>
            <Image src={'/ProductCarousel.png'} alt='products' height={409} width={1447}/>
        </div>
      
    </div>
  )
}

export default SingleProduct
