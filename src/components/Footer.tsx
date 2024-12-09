import React from 'react'
import Image from 'next/image'
import { IoLogoFacebook } from "react-icons/io5";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className='w-[100%] max-w-[1920px]  mx-auto h-[418px]'>
        <hr />
        <div className='flex foot-container  justify-between m-auto p-20 xl-1550:px-[200px] xl-1620:px-[250px] xl:px-[150px] xl-1950:px-[300px] '>
        <div className='shadow-custom-foot'>
            <div className='flex flex-col items-start p-0 gap-6 h-[198px] '>
            <div className='flex items-center p-0 gap-2'>    
            <Image src={"/LogoFooter.png"} alt="Logo" height={40} width={40} />
            <p className='font-[Inter] text-[26px] font-semibold leading-[31px] text-[#272343] h-[31px] w-[120px]'>Comforty</p>
            </div>
            <div>
            <p className='font-[Inter] font-normal text-[16px] leading-6 tracking-[0%] opacity-60 text-[#272342] not-italic logo-para w-[286px] h-[77px]'>Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. <br /> Cras egestas purus
            </p></div>
            <div className='flex items-start p-0 gap-1 w-[206px] h-[38px]'>
             <div className='h-9 w-9 socialLinks flex items-center content-center'>   
            <IoLogoFacebook className='w-7 h-7 text-gray-500 pl-[8px] '  /></div>
            <Image src={"/Group 48.png"} alt='twitter' height={38} width={38} className='socialLinks' />
            <Image src={"/Group 50.png"} alt='instagram' height={38} width={38} className='socialLinks' />
            <Image src={"/Group 46.png"} alt='pintrest' height={38} width={38} className='socialLinks' />
            <Image src={"/Group 47.png"} alt='youtube' height={38} width={38} className='socialLinks' />
            </div>
            </div>
        </div>
        <div className='flex flex-col items-start p-0 gap-5 category-foot w-[105px] h-[203px] '>
            <p className='w-[82px] h-[15px] font-[Inter] not-italic font-medium text-[14px] leading-[15px] uppercase text-[#9A9CAA] tracking-[0.06em] '>Category</p>
            <div className='flex flex-col items-start p-0 gap-3 w-[105px] h-[168px]'>
                <p className='w-[35px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Sofa</p>
                <p className='w-[68px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Armchair</p>
                <p className='w-[83px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Wing Chair</p>
                <p className='w-[83px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Desk Chair</p>
                <p className='w-[105px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343] hover:underline hover:text-[#007580] '>wooden Chair</p>
                <p className='w-[86px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Park Bench</p>
            </div>
        </div>
        <div className='flex flex-col items-start p-0 gap-5 '>
            <p className='w-[72px] h-[15px] font-[inter] not-italic font-medium text-[14px] leading-[15px] uppercase tracking-[0.06em] text-[#9A9CAA]' >Support</p>
            <div className='flex flex-col items-start p-0 gap-3 w-[156px] h-[108px]'>
                <p className='w-[115px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Help & Support</p>
                <p className='w-[156px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Tearms & Conditions</p>
                <p className='w-[105px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Privacy Policy</p>
                <p className='w-[35px] h-[18px] font-[Inter] not-italic font-normal text-[16px] leading-[18px] text-[#272343]  hover:underline hover:text-[#007580]'>Help</p>
            </div>
        </div>
        <div className='h-[142px]'>
            <p className='newsletter-foot'>Newsletter</p>
            <input type="email" placeholder='Your Email' className=' w-[285px] h-[46px] bg-[#ffffff] border-input' />
            <Button className='bg-[#029FAE] py-[9px] px-[14px] h-[46px] w-[127px] hover:bg-slate-500 ml-3 pb-[6px] button-res'>Subscribe</Button>
            <p className='contact-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
        </div>
        <hr />
        <div>
        <div className='flex justify-between items-center py-[24px] px-[290px] header-res h-[75px] shadow-custom-foot'>
            <p className='mx-0 my-auto h-[21px] font-[Poppins] font-normal not-italic text-[14px] leading-[21px] text-[#9a9caa]'>@ 2021 - Blogy - Designed by Zakirsoft & Developed by Ali </p>
           <Image src={"/Logos.png"} alt='payingmethod' height={27} width={227} className='h-[27px] w-[227px] foot-img mx-0 my-auto'/>
        </div>
        </div>
    </div>
  )
}

export default Footer
