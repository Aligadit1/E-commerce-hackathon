"use client"
import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import { client } from "@/sanity/lib/client";
import SkeletonLoader from "../SkeletonLoader";
import { ProductInterface } from "../ProductInterface";
import ProductCard from "../ProductCard";
const OurProducts = () => {
  // settting sates for handling data , errors and laoding messsages
  const [ourProducts,setOurProduct] = useState<ProductInterface[]>([])
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState<string| null>(null)
    
    const fetchProducts = async ()=>{
      setLoading(true)
      setError(null)
      try {
        // fetching data from sanity
      const products = await client.fetch(`*[_type == "products"]{
        _id,
        title,
        "imageUrl": image.asset->url, // Fetch the actual image URL
        tags,
        price,
        greenTag,
        badge,
        priceWithoutDiscount,}`)
          // filtering data with tag ourProduct 
        const filteredProducts = products.filter((product:ProductInterface)=>product.tags && product.tags.includes("ourProducts")).slice(0,8)
         // adding featured products in the state of our Products array to dispaly data
        setOurProduct(filteredProducts) 
      
      }
      // catching error and setting state for displaying a readable error message for the user
      catch (error){
        console.error("Failed to fetch products:",error)
        setError("failed to load products, please try refreshing")
      }
      // setting the state to stop loading if the data is displayed or error message is displayed
      finally{
        setLoading(false)
      }

    }
    useEffect( () => {
    fetchProducts()
  }, [])
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
    <div className="mt-16 w-full">
      <div>
        <Heading Head="Our Products" />
      </div>
      <ProductCard products={ourProducts}/>
    </div>
  );

};

export default OurProducts;
