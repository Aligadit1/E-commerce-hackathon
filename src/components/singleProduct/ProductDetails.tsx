"use client"
import React, { useContext } from 'react'
import CarouselProducts from './CarouselProducts'
import { FiShoppingCart } from 'react-icons/fi'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ProductInterface } from '@/app/data/data'
import { CartContext } from '@/context/CartContext'

interface Props {
  product: ProductInterface;
}
const ProductDetails = ({ product }: Props) => {
    const context = useContext(CartContext);
     
    
      if (!context) {
        throw new Error('useCart must be used within a CartProvider');
      }
    
      const { addToCart } = context; // Destructure addToCart function from context
    
      const handleAddToCart = (product: ProductInterface) => {
         const size = product.size || "S"
        // Map the ProductInterface to CartItem format
        const cartItem = {
          id: product._id, // Assign a unique id
          name: product.title, // Map to the correct field (use title or another field)
          description: product.description, // Add description
          size: size, // Add size
          quantity: 1, // Set quantity to 1 by default
          price: product.price, // Add price
          image: product.imageUrl, // Add image
        };
    
        addToCart(cartItem); // Call addToCart function with mapped item
      };
    
  return (
    <div className='flex flex-col justify-center items-center pt-[50px] md:pt-[100px] lg:pt-[150px] w-full gap-10 md:gap-20 max-w-[1990px] mx-auto px-4 md:px-8 lg:px-12'>
      {/* Product Details Section */}
      <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-start gap-5 md:gap-10 lg:gap-20 w-full md:w-[90%] lg:w-[83%]'>
        {/* Product Image */}
        <div className='w-[90%] lg:w-1/2 flex justify-center lg:justify-start'>
          <div className='relative w-full max-w-[675px] h-auto aspect-[675/607]'>
            <Image
              src={product.imageUrl}
              alt='chair'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 675px'
            />
          </div>
        </div>

        {/* Product Information */}
        <div className='flex flex-col items-center lg:items-start justify-center gap-4 md:gap-6 w-full lg:w-1/2'>
          <h1 className='font-[Inter] not-italic font-bold capitalize text-[20px] md:text-[30px] lg:text-[40px] xl:text-[60px] leading-tight text-center lg:text-left'>
            {product.title}
          </h1>
          <Button className='bg-[#029fae] hover:bg-[#F0F2F3] hover:text-black h-[40px] md:h-[50px] w-[120px] md:w-[150px] rounded-full p-4  text-white'>
            ${product.price || product.priceWithoutDiscount}
          </Button>
          <hr className='w-full border-t border-gray-300 my-4' />
          <p className='font-[Inter] font-normal not-italic text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px] leading-[20px] md:leading-[25px] lg:leading-[30px] text-[#272343] opacity-60 text-center lg:text-left'>
         {product.description}
            </p>
            <Button onClick={()=>{handleAddToCart(product)}}
            aria-label="add to cart"
            className='bg-[#029fae] hover:bg-[#F0F2F3] hover:text-black flex items-center justify-center h-[40px] md:h-[50px] lg:h-[63px] w-full md:w-[180px] lg:w-[212px] py-2 md:py-3 lg:py-4 px-4 md:px-6 text-white gap-2'>
            <FiShoppingCart  className="lg:!h-[20px] lg:!w-[20px]" />
            <p className='font-[Inter] not-italic font-semibold text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]'>
              Add To Cart
            </p>
          </Button>
        </div>
      </div>

      {/* carousel products */}
      <CarouselProducts/>
    </div>
  )
}

export default ProductDetails
