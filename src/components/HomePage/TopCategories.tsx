"use client"
import React, { useEffect, useState } from 'react'
import Heading from '../Heading'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
type categories ={
  title: string,
  imageURL: string,
  products: number,
  id: string,
}

const TopCategories =() => {
  // settting sates for handling data , errors and laoding messsages
  const [categories, setCategories] = useState<categories[]>([]);
  const [error, setError] = useState<string|null>(null)
  const [loading, setLoading] = useState(true)
   
    const fetchCategory = async ()=>{
      setLoading(true)
      setError(null)
      try{
        // fetching data from sanity
        const data = await client.fetch(`*[_type == "categories"]{
          title,
          "imageURL":image.asset->url,
          products,
          id}
      `)
       // adding featured products in the state of categories array to dispaly data
      setCategories(data)
      }
      // catching error and setting state for displaying a readable error message for the user
    catch(error){
      console.error("failed to fetch categories",error)
      setError('Failed to load categoriesData, please try refreshing.')
    }
    // setting the state to stop loading if the data is displayed or error message is displayed
    finally{
      setLoading(false)
    }
    }
    useEffect(()=>{
    fetchCategory()
  },[])
   // displaying loading message while data is being fetched and displayed after the fetch operation is completed or error is encountered.
   if (loading) {
    return(
      <div className="text-center mt-16 ">
       <p>loading categories...</p>
       </div>
          )
  }
// displaying readable error message
  if (error) {
    return <div className="text-center mt-16 text-red-500">
    <p>{error}</p>
    <button
      onClick={fetchCategory}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Retry
    </button>
  </div> 
  }
  return (
    <div className='mt-16 w-full'>
        <div>
        <Heading Head="TopCategories" />
        <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-5 gap-5">
            {categories.map((category:categories)=>{
                return (
                    <div className='relative' key={category.id}>
                        <Image src={category.imageURL} alt='chair' height={424} width={424} className='w-full'/>
                        <div className='w-full bg-[#000000] opacity-70 rounded-b-lg absolute bottom-0'>
                            <div className='p-5 flex flex-col gap-2'>
                            <p className='text-white text-xl font-semibold flex items-start'>{category.title}</p>
                            <p className='text-white opacity-70 flex items-start  '>{category.products ?? 0} Products</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
      </div>
      
    </div>
  )
}

export default TopCategories
