"use client"
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useContext } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { ProductInterface } from '@/app/data/data';
import Link from 'next/link';
import { CartContext } from '@/context/CartContext'; // Ensure CartContext is imported

interface ProductCardProps {
  products: ProductInterface[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  // Safe access to CartContext
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
    <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 gap-5">
      {products.map((product: ProductInterface) => {
        return (
          <div
            key={product._id}
            
            className="flex flex-col gap-3 items-start relative border-b shadow-md rounded-lg p-4"
          >
            <Link href={`/product/${product.slug}`} className='w-full'> 
            <Image
              src={product.imageUrl}
              alt="product"
              height={312}
              width={312}
              className="w-full rounded-2xl cursor-pointer"
            />
            </Link>
            <div className="flex items-center justify-between w-full">
              <div>
                <p className="text-base font-[inter] hover:text-[#007580]">
                  {product.title}
                </p>
                <div className="flex">
                  <p className="text-[#272343] font-semibold font-[inter] text-lg">
                    ${product.price}
                  </p>
                  <p className="text-[#9A9CAA] text-sm font-[inter] line-through">
                    {product?.priceWithoutDiscount}
                  </p>
                </div>
              </div>
              <button
                aria-label="add to cart"
                className="bg-[#F0F2F3] hover:bg-[#029FAE] hover:text-white h-11 w-11 rounded-lg flex items-center justify-center"
                onClick={() => handleAddToCart(product)} // Safely call the addToCart function
              >
                <FiShoppingCart className="h-6 w-6" />
              </button>
            </div>
            <div
              className={cn(
                product.badge ? 'bg-[#F5813F]' : '',
                product.greenTag ? 'bg-[#01AD5A]' : '',
                'w-[49px] h-[26px] text-xs font-[inter] font-medium flex items-center justify-center rounded-sm absolute top-5 left-5 '
              )}
            >
              {product.greenTag ? product.greenTag : product.badge}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
