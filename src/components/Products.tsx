import React from 'react'
import Image from 'next/image'
const Products = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <div>
        <p className='font-[Inter] text-[16px] md:text-[22px] lg:text-[32px] leading-[110%] capitalize text-[#272343] mt-[6px]'>All Products</p>
        <div className='flex flex-col items-center'>
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
                    <Image src={"/ChairImage3.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px]  relative'>
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
                    <Image src={"/ChairImage8.png"} alt='chair' height={312} width={312} className='chair-res'/>
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
                    <Image src={"/ChairImage7.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] relative'>
                    <Image src={"/ChairImage1.png"} alt='chair' height={312} width={312} className='chair-res'/>
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
                    <Image src={"/ChairImage2.png"} alt='chair' height={312} width={312} className='chair-res' />
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] relative'>
                    <Image src={"/ChairImage3.png"} alt='chair' height={312} width={312} className='chair-res'/>
                    <div className='mt-3 price-container-res'>
                        <p className='font-[Inter] not-italic font-normal text-[16px] leading-[130%] capitalize text-[#007580] chair-name-res '>Library Stool Chair</p>
                        <div className='flex gap-1 pt-3 price-container-res'><p className='font-[Inter] text-[18px] leading-[110%] capitalize text-[#272343] chair-price-res'>$20</p><p className='font-[Inter] chair-price-res font-normal text-[18px] leading-[110%] line-through capitalize text-[#9a9caa]'>$30</p></div>
                    </div>
                    <div className='h-11 w-11 bg-[#F0F2F3] flex items-center justify-center rounded-md hover:bg-[#029fae] absolute left-[268px] top-[329.5px] cart-res'>
                    <Image src={"/cart.png"} alt='cart' height={24} width={24}/></div>
                    
                </div>
                
                <div className='h-[377px] relative'>
                    <Image src={"/ChairImage9.png"} alt='chair' height={312} width={312} className='chair-res'/>
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
    <div className='mt-20 bg-[rgba(30,40,50,0.05)] w-full flex flex-col items-center justify-center py-[100px]' >
        <h2 className='font-[Roboto] not-italic font-medium text-[20px] md:text-[30px] lg:text-[50px] leading-[25px] md-leading-[35px] lg:leading-[59px] capitalize text-[#000000]'>Or subscribe to the newsletter</h2>
        <div className='flex gap-5 pt-[80px]'> 
            <input type="text" placeholder='Email Address' className='border-input-product md:w-[150px] lg:w-[643px] ' />
            <button className='btn-border'>SUBMIT</button>
            </div>
            <Image src={'/ProductBottomImage.png'} alt='Img' height={319} width={1324} className='pt-[80px]'/>
    </div>
    </div>
  )
}

export default Products
