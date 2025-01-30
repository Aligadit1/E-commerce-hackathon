"use client"
import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import { client } from "@/sanity/lib/client";
import ProductCard from "../ProductCard";
import { ProductInterface } from "../ProductInterface";
import SkeletonLoader from "../SkeletonLoader";
const FeaturedProducts =() => {
  // settting sates for handling data , errors and loading messsages
  const [featuredProducts, setFeaturedProducts] = useState([]);
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
        }`)
        // filtering data with tag featured 
        const featuredProducts = products.filter((product:ProductInterface)=>product.tags && product.tags.includes("featured")).slice(0,4)
        // adding featured products in the state of featured Products array to dispaly data
        setFeaturedProducts(featuredProducts)
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
    <div className="mt-16 w-full">
      <div>
        <Heading Head="Featured Products" />
      </div>
      <ProductCard products={featuredProducts}/>
    </div>
  );
};

export default FeaturedProducts;
