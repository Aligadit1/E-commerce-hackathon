"use client"
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { ProductInterface } from "@/app/data/data";
import Image from 'next/image';
import Link from "next/link";
const CarouselProducts = () => {
    // settting sates for handling data , errors and loading messsages
          const [carouselProducts, setCarouselProducts] = useState([]);
          const [loading, setLoading] = useState<boolean>(true);
          const [error, setError] = useState<string | null>(null);
        const fetchProducts = async () => {
              setLoading(true)
              setError(null)
              try{
                 // fetching data from sanity
              const products = await client.fetch(`*[_type == "products"]{
                  _id,
                  "imageUrl": image.asset->url, // Fetch the actual image URL
                  price,
                  priceWithoutDiscount,
                  title,
                  greenTag,
                  badge,
                  tags,
                  "slug":slug.current,
                }`)
                // filtering data with tag carouselProducts
                const carouselChairs = products.filter((product:ProductInterface)=>product.tags && product.tags.includes("carouselProducts")).slice(0,5)
                // adding featured products in the state of featured Products array to dispaly data
                setCarouselProducts(carouselChairs)
              }
              // catching error and setting state for displaying a readable error message for the user
              catch(error){
                console.error("failed to fetch featured products", error)
                setError("failed to load product, please try refreshing")
              }
              // setting the state to stop loading if the data is displayed or error message is displayed
              finally{
                setLoading(false)
              }
            }
            useEffect(()=>{
            fetchProducts()
          },[])
          // displaying loading message while data is being fetched and displayed after the fetch operation is completed or error is encountered.
          if (loading) {
            return(
              <div className="text-center mt-16 ">
               <p>loading products...</p>
               </div>
                  )
          }
        // displaying readable error message
          if (error) {
            return <div className="text-center mt-16 text-red-500">
            <p>{error}</p>
            <button
              onClick={fetchProducts}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Retry
            </button>
          </div> 
          }
  return ( 
      <div className='py-[50px] md:py-[100px] lg:py-[150px] w-full max-w-[1990px] mx-auto px-4 md:px-8 lg:px-12'>
        {/* Product Carousel Section */}
      {/* Section Header with "View All" Button */}
      <div className='flex justify-between items-center mb-8'>
        <h2 className='font-[Inter] text-[24px] md:text-[32px] lg:text-[40px] font-bold'>
          Featured Chairs
        </h2>
        <a href='/product' className='text-black custom-underline font-bold cursor-pointer text-[14px] md:text-[16px] lg:text-[18px]'>
          View All
        </a>
      </div>

      {/* Chair Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8'>
        {carouselProducts.map((product:ProductInterface) => (
          <Link href={`/product/${product.slug}`} key={product._id} className='flex flex-col items-center justify-center gap-4'>
            {/* Chair Image */}
            <div className='relative w-full h-[150px] min-[400px]:h-[200px] min-[450px]:h-[280px] sm:h-[300px] md:h-[250px] xl:h-[300px]'>
              <Image
                src={product.imageUrl}
                alt={product.title}
                fill
                className='object-cover rounded-lg'
                sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
              />
            </div>

            {/* Chair Name and price*/}
            <div className='flex justify-between w-full'>
            <p className='font-[Inter] text-[16px] md:text-[18px] lg:text-[20px] text-[#272343]  '>
              {product.title}
            </p>
            <p className='font-[Inter] font-bold text-[14px] lg:text-[16px] text-black'>
              ${product.price}
            </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CarouselProducts
