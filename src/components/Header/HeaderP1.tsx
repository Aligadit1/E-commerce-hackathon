import React from 'react'
import { CiCircleAlert } from "react-icons/ci";
import Link from "next/link";
import { VscChevronDown } from "react-icons/vsc";
const HeaderP1 = () => {
  return (
    <div>
      <div className=" py-[14px] bg-[#272343]  text-white flex justify-between items-center px-2 sm:px-10 lg:px-20 gap-1 text-xs sm:text-sm md:text-base ">
                <p className="opacity-70 font-[inter] text-xs sm:text-sm md:text-base ">✓ Free Shipping On All Orders Over $50</p>
                <div className="flex gap-2 md:gap-6 mx-0 opacity-70 ">
                    <div className="flex items-start "><p>Eng</p> <VscChevronDown className="mt-[2.5px] sm:mt-1" /></div>
                    <Link href='/faqs'><p>Faqs</p></Link>
                    <p><CiCircleAlert className='inline-block mb-[3px]' />Need Help</p>
                </div>
            </div>
    </div>
  )
}

export default HeaderP1
