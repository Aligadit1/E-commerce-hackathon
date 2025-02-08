import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import CartButton from './CartButton'

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
          <CartButton/>
        </Link>
      </div>
    </div>
  )
}

export default HeaderP2
