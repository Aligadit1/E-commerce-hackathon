import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const HeaderP2 = () => {
  return (
    <div>
      <div className="py-5 bg-[#F0F2F3] flex items-center justify-between px-2 sm:px-10 lg:px-20  ">
        <div className=" flex items-center gap-2">
          <Image src="/Comforty Logo.png" alt="Logo" height={44} width={44} />
          <h1 className="forn-[inter] font-medium text-base sm:text-lg md:text-xl xl:text-2xl text-[#272343]">
            Comforty
          </h1>
        </div>
        <Link href="/cart">
          <Button className="bg-white gap-2 flex hover:bg-[#F0F2F3] ">
            <Image src="/cartIcon.svg" alt="Cart" height={22} width={22} />
            <p className="font-medium text-xs md:text-sm text-[#272343] ">
              Cart
            </p>
            <div className='bg-[#007580] text-white rounded-[100%] h-5 w-5 flex items-center justify-center '>
              <p className='font-medium text-xs'>0</p>
              </div>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HeaderP2
