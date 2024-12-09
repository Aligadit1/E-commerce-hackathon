import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center max-w-[1990px] mx-auto mt-[100px]'>
        <h3 className='font-[Poppins] not-italic font-semibold text-[20px] md:text-[26px] xl:text-[36px] text-black'>Get In Touch With Us</h3>
        <p className='font-[Poppins] not-italic font-normal text-[12px] md:text-[14px] xl:text-[16px] text-[#9f9f9f] text-center'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className='flex gap-10'>
            <div>
                <Image src='/Contact.png' alt='contact' height={500} width={353}/>
            </div>
            <div className='flex flex-col items-start mt-[55px] gap-3' >
                <div className='gap-3'>
                    <p className='font-[Poppins] not-italic font-medium text-[12px] md:text-[14px] xl:text-[16px] text-black'>Your name</p>
                    <input type="text" placeholder='abc' className='contact-input h-[20px] w-[100px] sm:h-[30px] sm:w-[120px] lg:h-[35.5px] lg:w-[250px] xl:h-[75px] xl:w-[528px] input-contact' />
                </div>
                <div className='gap-3'>
                    <p className='font-[Poppins] not-italic font-medium text-[12px] md:text-[14px] xl:text-[16px] text-black'>Email address</p>
                    <input type="text" placeholder='Abc@def.com' className='contact-input h-[20px] w-[100px] sm:h-[30px] sm:w-[120px] lg:h-[35.5px] lg:w-[250px] xl:h-[75px] xl:w-[528px] input-contact' />
                </div>
                <div className='gap-3'>
                    <p className='font-[Poppins] not-italic font-medium text-[12px] md:text-[14px] xl:text-[16px] text-black'>Subject</p>
                    <input type="text" placeholder='This is an optional' className='contact-input h-[20px] w-[100px] sm:h-[30px] sm:w-[120px] lg:h-[35.5px] lg:w-[250px] xl:h-[75px] xl:w-[528px] input-contact' />
                </div>
                <div className='gap-3'>
                    <p className='font-[Poppins] not-italic font-medium text-[12px] md:text-[14px] xl:text-[16px] text-black'>Message</p>
                    <input type="text" placeholder={'Hi! i\’d like to ask about'} className='contact-input h-[20px] w-[100px] sm:h-[30px] sm:w-[120px] lg:h-[50.5px] lg:w-[250px] xl:h-[120px] xl:w-[528px] input-contact' />
                </div>
                <Button className='bg-[#029fae] h-[25px] md:h-[35px] xl:w-[237px] xl:h-[55px] xl:rounded-[5px] hover:bg-slate-500 text-[8px] md:text-[10px] xl:text-[15px]'>Submit</Button>
            </div>
        </div>
        <Image src={'/ContactBottom.png'} alt='service limitations' height={270} width={1320} className='mt-[60px]'></Image>

      
    </div>
  )
}

export default Contact
