import React from 'react'
type Props = {
    Head:string;
}
const Heading = (Props:Props) => {
  return (
    <h2 className='font-[inter] font-semibold text-[#272343] text-lg md:text-xl lg:text-2xl xl:text-3xl xl-1550:text-4xl text-start'>
        {Props.Head}
        </h2>
  )
}

export default Heading
