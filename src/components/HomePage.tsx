import React from 'react'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';

const HomePage = () => {
  return (
    <div className='flex flex-col text-center items-center w-full max-w-[1920px] mx-auto '>
        {/* Hero Section */}
        <div className='h-[850px] w-[1321px] bg-[#F0F2F3] left-border flex items-center justify-start'>
            <div className='w-[557px] h-[337px] flex flex-col items-start justify-start text-left ml-[100px]'>
                <p className='font-[Inter] not-italic font-normal text-14px leading-[100%] tracking-[0.12em] text-[#272343] uppercase '>Welcome to chairy</p>
                <p className='font-[Inter] not-italic font-bold leading-[66px] text-[60px] capitalize text-[#272343]  my-[50px] '>Best Furniture Collection for your interior.</p>
             <Button className='bg-[#029fae] px-[24px] py-[14px] hover:bg-slate-500'>Shop Now <FaArrowRightLong className='ml-[20px]' /></Button>
             </div>
             <Image src={"/HeroImage.png"} alt='Hero' height={584} width={434} className='mx-[100px]'/>
        </div>
        {/* Company Logos */}
        <Image src={"/Company Logo.png"} alt='company logo' width={1321} height={139} className='mt-16' />
        {/* featured Products */}
        <div className='h-[461px] w-[1321px] text-start mt-16'>
            <h2 className=' font-[Inter] w-[286px] text-[32px] leading-[110%] capitalize font-semibold text-[#272343]'>Featured Products</h2>
            <div className='flex mt-10 gap-5'>
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5' />
                    <Image src={"/ChairImage1.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p><p className='font-[Inter] font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/Products Status 2.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5' />
                    <Image src={"/ChairImage2.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p><p className='font-[Inter] font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5' />
                    <Image src={"/ChairImage3.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p><p className='font-[Inter] font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5' />
                    <Image src={"/ChairImage4.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p><p className='font-[Inter] font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
            </div>
        </div>
        {/* Top Categories */}
        <div className='h-[508px] w-[1321px] text-start mt-16'>
            <h2 className=' font-[Inter] w-[286px] text-[32px] leading-[110%] capitalize text-[#272343] font-semibold mt-5'>Top Categories</h2>
            <div className='flex mt-10 gap-5'>
            <div className='relative'>
                <Image src={"/TopChair1.png"} alt="chair" height={424} width={424}/>
                <div className='flex flex-col items-start p-5 gap-2 bg-[rgba(0,0,0,0.7)] rounded-b-[10px] h-[85px] w-[424px] absolute bottom-0'>
                    <p className='font-[Inter] text-[20px] laeding-[110%] capitalize text-[#ffffff]'>Wing Chair</p>
                    <p className='font-[Inter] not-italic font-normal text-[14px] leading-[110%] capitalize text-[#ffffff] opacity-70'>3,584 Products</p>
                </div>
            </div>
            <div className='relative'>
                <Image src={"/TopChair2.png"} alt="chair" height={424} width={424}/>
                <div className='flex flex-col items-start p-5 gap-2 bg-[rgba(0,0,0,0.7)] rounded-b-[10px] h-[85px] w-[424px] absolute bottom-0'>
                    <p className='font-[Inter] text-[20px] laeding-[110%] capitalize text-[#ffffff]'>Wooden Chair</p>
                    <p className='font-[Inter] not-italic font-normal text-[14px] leading-[110%] capitalize text-[#ffffff] opacity-70'>157 Products</p>
                </div>
            </div>
            <div className='relative'>
                <Image src={"/TopChair3.png"} alt="chair" height={424} width={424}/>
                <div className='flex flex-col items-start p-5 gap-2 bg-[rgba(0,0,0,0.7)] rounded-b-[10px] h-[85px] w-[424px] absolute bottom-0'>
                    <p className='font-[Inter] text-[20px] laeding-[110%] capitalize text-[#ffffff]'>Desk Chair</p>
                    <p className='font-[Inter] not-italic font-normal text-[14px] leading-[110%] capitalize text-[#ffffff] opacity-70'>154 Products</p>
                </div>
            </div>
            </div>
            </div>
            {/*  Hot category */}
            <div className='h-[648px] w-[1321px] text-start mt-[204px]'>
                <Image src={"/hot-category.png"} alt='hot category' height={648} width={1320} />
            </div>
            {/* our products */}
            <div className='h-[919px] w-[1321px] text-start mt-20  '>
            <h2 className=' font-[Inter] w-[205px] h-[35px] text-[32px] leading-[110%] capitalize font-semibold text-[#272343] justify-self-center'>Our Products</h2>
            <div className='flex flex-col'>
            <div className='flex mt-10 gap-5'>
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5' />
                    <Image src={"/ChairImage1.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/Products Status 2.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5' />
                    <Image src={"/ChairImage2.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p><p className='font-[Inter] font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/ChairImage3.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                       <Image src={"/ChairImage4.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
            </div>
            <div className='flex mt-10 gap-5'>
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/Products Status.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5' />
                    <Image src={"/TopChair1.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/Products Status 2.png"} alt='Status' height={26} width={54} className='absolute top-5 left-5' />
                    <Image src={"/ChairImage6.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p><p className='font-[Inter] font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/ChairImage7.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] w-[312px] relative'>
                    <Image src={"/ChairImage1.png"} alt='chair' height={312} width={312}/>
                    <div className='mt-3'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343]'>$20</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px]'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
            </div>
            </div>
        </div>

      
    </div>
  )
}

export default HomePage
