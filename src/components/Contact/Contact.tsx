"use client"
import React from 'react'
import { contactData } from '@/app/data/data'
import * as z from "zod";
import ContactForm from './ContactForm';
       export const contactFormSchema= z.object({
          name: z.string().min(2, { message: "Name must be at least 2 characters long" }).max(30, { message: "Name must be at most 30 characters long" }),
          email: z.string().email({ message: "Invalid email address" }),
          subject: z.string().min(0, { message: "Subject must be at least 0 characters long" }).max(50, { message: "Subject must be at most 50 characters long" }),
          message: z.string().min(2, { message: "Message must be at least 2 characters long" }).max(500, { message: "Message must be at most 500 characters long" }),
        });
const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center max-w-[1920px] mx-auto px-2 sm:px-10 lg:px-20 mt-16'>
        {/* Heading */}
        <div className='flex flex-col justify-center items-center'>
            <h6 className='font-[poppins] font-semibold text-lg md:text-xl lg:text-2xl xl:text-4xl'>Get In Touch With Us</h6>
            <p className='text-[#9F9F9F] text-center font-[poppins] text-sm md:text-base'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>
        <div className='flex max-[768px]:flex-col justify-evenly w-full items-start mt-10 py-10'>
        {/* Timings contact and worktime */}
        <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-10 py-10 px-10'>
                {contactData.map((data)=>{
                    return(
                        <div className='flex gap-6' key={data.id}>
                            <div>{data.icon}</div>
                            <div>
                            <h6 className='font-[Poppins] text-lg md:text-2xl font-medium'>{data.name}</h6>
                            <p className='font-[inter] text-base'>{data?.address}</p>
                            <p className='font-[inter] text-base'>{data?.num1}</p>
                            <p className='font-[inter] text-base'>{data?.num2}</p>
                            <p className='font-[inter] text-base'>{data?.timing1}</p>
                            <p className='font-[inter] text-base'>{data?.timing2}</p></div>
                        </div>
                    )
                })}
            </div>
        </div>
        {/* conatct form */}
        <ContactForm/>
        </div>
        

      
    </div>
  )
}

export default Contact
