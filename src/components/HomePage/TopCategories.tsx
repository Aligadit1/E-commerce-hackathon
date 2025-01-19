import React from 'react'
import Heading from '../Heading'
import { TopCategoriesData } from '@/app/data/data'
import Image from 'next/image'

const TopCategories = () => {
  return (
    <div className='mt-16 w-full'>
        <div>
        <Heading Head="TopCategories" />
        <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  py-5 gap-5">
            {TopCategoriesData.map((topData)=>{
                return (
                    <div className='relative'>
                        <Image src={topData.href} alt='chair' height={424} width={424} className='w-full'/>
                        <div className='w-full bg-[#000000] opacity-70 rounded-b-lg absolute bottom-0'>
                            <div className='p-5 flex flex-col gap-2'>
                            <p className='text-white text-xl font-semibold flex items-start'>{topData.name}</p>
                            <p className='text-white opacity-70 flex items-start  '>{topData.quantity}</p>
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
