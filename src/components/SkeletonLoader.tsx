import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-24">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-200 h-[404px] w-[340px] rounded-2xl " />
          ))}
        </div>
  )
}

export default SkeletonLoader
