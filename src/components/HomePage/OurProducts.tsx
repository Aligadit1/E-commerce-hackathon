import React from "react";
import Heading from "../Heading";
import { ourProducts } from "@/app/data/data";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FiShoppingCart } from "react-icons/fi";

const OurProducts = () => {
  return (
    <div className="mt-16 w-full">
      <div>
        <Heading Head="Our Products" />
      </div>
      <div className="w-full mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5 gap-5">
        {ourProducts.map((product) => {
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
  );
};

export default OurProducts;
