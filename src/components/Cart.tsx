import Image from 'next/image'
import React from 'react'

const Cart = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-[1990px] mx-auto mt-[80px]'>
      <Image src='/CartPage.png' alt='cart' height={632} width={1609}/>
      
    </div>
  )
}

export default Cart
