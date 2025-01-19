import { headerLinks } from '@/app/data/data';
import Link from 'next/link';
import React from 'react'
import {Sheet,SheetContent,SheetDescription,SheetTitle,SheetTrigger,} from "@/components/ui/sheet"
import { RiMenu3Fill } from "react-icons/ri";

const HeaderP3 = () => {
  return (
    <div>
      <div className="sm:py-[14px] bg-[#ffffff] px-2 sm:px-10 lg:px-20 ">
        <div className="max-[640px]:hidden flex items-center justify-between">
        <ul className="flex items-center p-0 gap-2 md:gap-8">
            {headerLinks.map((link)=>{
                return (
                  <Link key={link.id} href={link.href}>
                    <li className="link-hover md:text-[14px] links">{link.name}</li>
                  </Link>
                );
              })}
        </ul>
        <div className="flex items-start p-0 gap-2 my-auto">
          <Link href="/contact-us">
            <div className="links link-hover md:text-[14px] font-[400]">Contact: <p className='text-[#272343] inline-block'> (808) 555-0111</p></div>
          </Link>
        </div>
        </div>
      </div>
      {/* mobile nav*/}
      <div className='sm:hidden py-3 flex justify-end'>
      <Sheet >
        <SheetTrigger className='mr-2'><RiMenu3Fill/></SheetTrigger>
        <SheetContent>
        <SheetDescription>
            <SheetTitle>Navigation Bar</SheetTitle>
            <ul className="flex flex-col gap-8 mt-4 ">
            {headerLinks.map((link)=>{
                return (
                  <Link key={link.id} href={link.href}>
                    <li className="link-hover text-base ">{link.name}</li>
                  </Link>
                );
              })} 
              <Link href="/contact-us">
                <div className="text-base link-hover">Contact: <p className='text-[#272343] inline-block'> (808) 555-0111</p></div>
              </Link>
            <hr />
            </ul>
        </SheetDescription>
        </SheetContent>
      </Sheet>
      </div>
      <hr />
    </div>
  )
}

export default HeaderP3
