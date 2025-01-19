import React from "react";
import Image from "next/image";
import Heading from "./Heading";
import { cn } from "@/lib/utils";
import { FiShoppingCart } from "react-icons/fi";
import { allProducts } from "@/app/data/data";
const Products = () => {
  return (
    <div className="max-w-[1920px] mx-auto w-full">
    <div className="w-full px-2 sm:px-10 lg:px-20 mt-16">
        <div>
            <Heading Head="All Products" />
        </div>
            <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 gap-5">
                    {allProducts.map((product) => {
                      return (
                        <div
                          key={product.id}
                          className="flex flex-col gap-3 items-start cursor-pointer relative"
                        >
                          <Image
                            src={product.image}
                            alt="product"
                            height={312}
                            width={312}
                            className="w-full"
                          />
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <p className="text-base font-[inter] hover:text-[#007580]">
                                {product.name}
                              </p>
                              <div className="flex">
                                <p className="text-[#272343] font-semibold font-[inter] text-lg">
                                  {product.discountedPrice}
                                </p>
                                <p className="text-[#9A9CAA] text-sm font-[inter] line-through">
                                  {product?.price}
                                </p>
                              </div>
                            </div>
                            <div className="bg-[#F0F2F3] hover:bg-[#029FAE] hover:text-white h-11 w-11 rounded-lg flex items-center justify-center">
                              <FiShoppingCart className="h-6 w-6" />
                            </div>
                          </div>
                          <div
                            className={cn(
                              product.blueTag ? "bg-[#01AD5A]" : "",
                              product.orangeTag ? "bg-[#F5813F]" : "",
                              "w-[49px] h-[26px] text-xs font-[inter] font-medium flex items-center justify-center rounded-sm absolute top-5 left-5 "
                            )}
                          >
                            {product.blueTag ? product.blueTag : product.orangeTag}
                          </div>
                        </div>
                      );
                    })}
        </div>
        </div>
        
      <div className="mt-20 bg-[rgba(30,40,50,0.05)] w-full flex flex-col items-center justify-center py-[100px]">
        <h2 className="font-[Roboto] not-italic font-medium text-[20px] md:text-[30px] lg:text-[50px] leading-[25px] md-leading-[35px] lg:leading-[59px] capitalize text-[#000000]">
          Or subscribe to the newsletter
        </h2>
        <div className="flex gap-5 pt-[80px]">
          <input
            type="email"
            placeholder="Email Address"
            className="border-input-product md:w-[150px] lg:w-[643px] "
          />
          <button className="btn-border">SUBMIT</button>
        </div>
        <Image
          src={"/ProductBottomImage.png"}
          alt="Img"
          height={319}
          width={1324}
          className="pt-[80px]"
        />
      </div>
    </div>
  );
};

export default Products;
