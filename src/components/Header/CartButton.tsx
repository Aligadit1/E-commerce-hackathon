'use client'; // Indicate that this is a client-side component

import { useContext } from 'react';
import { CartContext } from '@/context/CartContext'; // Import CartContext
import Image from 'next/image';
import { Button } from '../ui/button'; // Assuming you have a Button component

const CartButton = () => {
  const context = useContext(CartContext); // Get the CartContext
  if (!context) {
    throw new Error('CartContext is not available! Make sure you are using it inside a CartProvider.');
  }

  const { cartItems } = context; // Destructure cartItems from context

  return (
    <Button className="bg-white gap-2 flex hover:bg-[#F0F2F3]">
      <Image src="/cartIcon.svg" alt="Cart" height={22} width={22} className="w-auto" />
      <p className="font-medium text-xs md:text-sm text-[#272343]">Cart</p>
        <div className="bg-[#007580] text-white rounded-[100%] h-5 w-5 flex items-center justify-center">
          <p className="font-medium text-xs">{cartItems.length}</p>
        </div>
    </Button>
  );
};

export default CartButton;
