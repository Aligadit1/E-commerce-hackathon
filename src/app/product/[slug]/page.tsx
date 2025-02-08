import SingleProduct from '@/components/singleProduct/SingleProduct'
import React from 'react'

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <SingleProduct params={params}/>
    </div>
  )
}

export default page
