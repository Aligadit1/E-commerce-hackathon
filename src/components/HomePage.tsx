import React from 'react'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='flex flex-col text-center items-center w-[90%] max-w-[1920px] mx-auto '>
        {/* Hero Section */}
        <div className='h-[850px] w-[80%] bg-[#F0F2F3] left-border flex hero-res items-center justify-start'>
            <div className='  flex flex-col items-start justify-start text-left ml-[10px] mt-5 md:mt-0 xl:ml-[100px] hero-written-container-tab'>
                <p className='font-[Inter] not-italic font-normal text-14px leading-[100%] tracking-[0.12em] hero-para-res text-[#272343] uppercase hero-para-tab '>Welcome to chairy</p>
                <p className='font-[Inter] not-italic font-bold leading-[66px] text-[60px] hero-head-res capitalize text-[#272343]  my-[50px] hero-head-tab '>Best Furniture Collection for your interior.</p>
             <Button className='bg-[#029fae] px-[24px] py-[14px] hover:bg-slate-500 button-res text-[13px] md:text-[16px] '>Shop Now <FaArrowRightLong className='ml-1 md:ml-5 ' /></Button>
             </div>
             <Image src={"/HeroImage.png"} alt='Hero' height={584} width={434} className='mx-[100px] hero-img-tab hero-img-res'/>
        </div>
        {/* Company Logos */}
        <Image src={"/Company Logo.png"} alt='company logo' width={1321} height={139} className='mt-16 w-[80%]'   />
        {/* featured Products */}
        <div className='h-[461px] text-start mt-16 feature-main-container'>
            <h2 className=' font-[Inter] w-[286px] text-[32px] leading-[110%] capitalize font-semibold head-res text-[#272343]'>Featured Products</h2>
            <div className='flex mt-10 gap-5 feature-res'>
                <div className='h-[377px]  relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage1.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res '>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='xl:h-[377px] h-[300px] product-res  relative '>
                    <Image src={"/Products Status 2.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage2.png"} alt='chair' height={312} width={312} className='chair-res' />
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px]  relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage3.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px]  relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage4.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res chair-price-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
            </div>
        </div>
        {/* Top Categories */}
        <div className='h-[508px] category-container text-start mt-16'>
            <h2 className=' font-[Inter] w-[286px] text-[32px] leading-[110%] capitalize text-[#272343] head-res font-semibold mt-5'>Top Categories</h2>
            <div className='flex mt-10 gap-5 category-res'>
            <div className='relative'>
                <Image src={"/TopChair1.png"} alt="chair" height={424} width={424} className='chair-res'/>
                <div className='flex flex-col items-start p-5 gap-2 bg-[rgba(0,0,0,0.7)] rounded-b-[10px] h-[85px] w-[424px] absolute bottom-0 chair-name-container '>
                    <p className='font-[Inter] text-[20px] laeding-[110%] capitalize text-[#ffffff] chair-name'>Wing Chair</p>
                    <p className='font-[Inter] not-italic font-normal text-[14px] leading-[110%] capitalize text-[#ffffff] opacity-70 chair-quantity'>3,584 Products</p>
                </div>
            </div>
            <div className='relative'>
                <Image src={"/TopChair2.png"} alt="chair" height={424} width={424} className='chair-res'/>
                <div className='flex flex-col items-start p-5 gap-2 bg-[rgba(0,0,0,0.7)] rounded-b-[10px] h-[85px] w-[424px] absolute bottom-0 chair-name-container'>
                    <p className='font-[Inter] text-[20px] laeding-[110%] capitalize text-[#ffffff] chair-name'>Wooden Chair</p>
                    <p className='font-[Inter] not-italic font-normal text-[14px] leading-[110%] capitalize text-[#ffffff] opacity-70 chair-quantity'>157 Products</p>
                </div>
            </div>
            <div className='relative'>
                <Image src={"/TopChair3.png"} alt="chair" height={424} width={424} className='chair-res'/>
                <div className='flex flex-col items-start p-5 gap-2 bg-[rgba(0,0,0,0.7)] rounded-b-[10px] h-[85px] w-[424px] absolute bottom-0 chair-name-container'>
                    <p className='font-[Inter] text-[20px] laeding-[110%] capitalize text-[#ffffff] chair-name'>Desk Chair</p>
                    <p className='font-[Inter] not-italic font-normal text-[14px] leading-[110%] capitalize text-[#ffffff] opacity-70 chair-quantity'>154 Products</p>
                </div>
            </div>
            </div>
            </div>
            {/*  Hot category */}
            <div className='h-[648px] w-[1321px] text-start mt-[204px] hot-res'>
                <Image src={"/hot-category.png"} alt='hot category' height={648} width={1320} className='h-[100%] w-[100%]' />
            </div>
            {/* our products */}
            <div className='h-[919px] text-start mt-20  product-res '>
            <h2 className=' font-[Inter] w-[205px] h-[35px] text-[32px] leading-[110%] capitalize font-semibold head-res text-[#272343] head-res justify-self-center'>Our Products</h2>
            <div className='flex flex-col'>
            <div className='flex mt-10 gap-5 feature-res'>
                <div className='h-[377px]  relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage1.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res '>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='xl:h-[377px] h-[300px] product-res  relative '>
                    <Image src={"/Products Status 2.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage2.png"} alt='chair' height={312} width={312} className='chair-res' />
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px]  relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage3.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px]  relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage4.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res chair-price-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
            </div>
            <div className='flex mt-10 gap-5 feature-res'>
                <div className='h-[377px]  relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/TopChair1.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res '>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='xl:h-[377px] h-[300px] product-res  relative '>
                    <Image src={"/Products Status 2.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage6.png"} alt='chair' height={312} width={312} className='chair-res' />
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage7.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5 status-res' />
                    <Image src={"/ChairImage1.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res chair-price-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
            </div>
            </div>
        </div>

      
    </div>
  )
}

export default HomePage
