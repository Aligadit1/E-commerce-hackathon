import Image from "next/image";
import React from "react";
import {
  footerCategory,
  footerLinks,
  footerNewsletter,
  footerSupport,
} from "@/app/data/data";
import Link from "next/link";
import { Button } from "./ui/button";
const Footer = () => {
  return (
    <div className="max-w-[1920px]  mx-auto px-2 sm:px-10 lg:px-20 mt-16">
      <hr />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-20 gap-5">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Image src={footerLinks.logo} alt="logo" height={40} width={40} />
            <h1 className="font-[inter] font-semibold text-[#272343] text-lg md:text-xl lg:text-3xl">
              {footerLinks.name}
            </h1>
          </div>
          <p className="font-[inter] opacity-60 text-[#272343] text-base ">
            {footerLinks.paragraph}{" "}
          </p>
          <div className="flex gap-2 items-center ">
            {footerLinks.SocialLinks.map((link) => {
              return (
                <Link href={link.href} key={link.id}>
                  <i
                    className="h-[38px] w-[38px] hover:border-[#007580] hover:border-solid hover:border-[1px] flex items-center justify-center rounded-full text-[#636270] hover:text-[#007580]"
                  >
                    {link.icon}
                  </i>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:items-center content-start">
          <div className="w-[92px]">
            <h4 className="text-[#9A9CAA] text-sm font-medium uppercase">
              {footerCategory.head}
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            {footerCategory.chairsCategory.map((category) => {
              return (
                <h2
                  key={category.id}
                  className="text-[#272343] text-base hover:text-[#007580] hover:underline font-[inter] justify-self-center "
                >
                  {category.name}
                </h2>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:items-center content-start">
          <div className="w-[130px]">
            <h4 className="text-[#9A9CAA] text-sm font-medium uppercase">
              {footerSupport.head}
            </h4>
          </div>
          <div className="flex flex-col gap-3">
            {footerSupport.chairsCategory.map((Support) => {
              return (
                <h2
                  key={Support.id}
                  className="text-[#272343] text-base hover:text-[#007580] hover:underline font-[inter] justify-self-center "
                >
                  {Support.name}
                </h2>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col lg:items-center content-start ">
          <div className="flex flex-col gap-3">
            <h4 className="text-[#9A9CAA] text-sm font-medium uppercase">
              {footerNewsletter.head}
            </h4>
            <div className="flex gap-2 max-[400px]:flex-col">
              <input
                type="text"
                placeholder={footerNewsletter.placeholder}
                className="text-[#9A9CAA] font-[inter] text-base border-[1px] border-solid border-[#E1E3E5] rounded-[8px] py-2 px-5"
              />
              <Button className="py-6 px-7 text-white bg-[#029FAE] font-semibold text-base hover:bg-[#F0F2F3] hover:text-black">
                {footerNewsletter.btnText}
              </Button>
            </div>
            <p className="text-[#272343] opacity-60 font-[inter] text-[15px] leading-[150%]">
              {footerNewsletter.paragraph}
            </p>
          </div>
        </div>
      </div>
      <div>
        <hr />
        <div className="flex justify-between my-6">
          <div className="text-[#9A9CAA] font-[poppins] text-sm ">
            @ 2025 - Blogy - Designed by Zakirsoft & Developed by
            <p className="text-[#272343] inline-block">Ali</p>
          </div>
          <div>
          <Image src="/paypal.png.png" alt="payment" height={27} width={227} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
