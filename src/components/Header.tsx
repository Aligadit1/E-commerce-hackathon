import { CiCircleAlert } from "react-icons/ci";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
export default function Header(){
    return(
        <div className="w-[100%] max-w-[1920px] mx-auto  h-[203px]">
            <div className=" h-[45px] bg-[#272343]  text-white flex justify-between items-center header-res px-[300px] py-[14px] xl-1950:px-[245px] ">
                <p className="opacity-70 font-[inter] text-[12px] md:text-[16px] ">✓ Free Shipping On All Orders Over $50</p>
                <div className="flex gap-2 md:gap-6 mx-0 my-auto opacity-70 text-[12px] md:text-[16px]">
                    <div className="flex "><p>Eng</p><Image src="/Group.png" alt="dropdown" height={1} width={12} className="h-[7.5px] mt-2 ml-2"  /></div>
                    <Link href='/faqs'><p>Faqs</p></Link>
                    <div className="flex"><CiCircleAlert className="text-white mt-[4.5px] mr-1" /><p>Need Help</p></div>
                </div>
            </div>
            <div className="h-[84px] bg-[#F0F2F3] flex items-center py-[20px] justify-evenly xl-1950:gap-[56rem] ">
                <Image src={"/Logo.png"} alt="Logo" height={40} width={166} className="logo-res logo-res-tab " />
                <Link href='/cart'><Button className="bg-white gap-3 flex w-[120px] button-res h-[44] hover:bg-slate-500" > <Image src={"/Buy 2.png"} alt="Cart" height={22} width={22} /> <p className="w-[26px] h-[13px] font-[Inter] font-medium text-[12px] leading-[110%] text-center capitalize text-[#272343]">Cart</p> <Image src={"/No.png"} alt="cartNumber" height={20} width={20}/>  </Button></Link>
            </div>
            <div className="flex justify-evenly items-center py-[14px] xl-1950:gap-[46rem] h-[78px] bg-[#ffffff] shadow-custom-thin">
                <ul className="flex items-center p-0 gap-2 md:gap-8">
                    <Link href="/"><li className="link-hover md:text-[14px] links" >Home</li></Link>
                    <Link href='/product'><li className="link-hover md:text-[14px] links">Shop</li></Link>
                    <Link href="/product"><li className="link-hover md:text-[14px] links">Product</li></Link>
                    <Link href='/single-product'><li className="link-hover md:text-[14px] links">Pages</li></Link>
                    <Link href='/about'><li className="link-hover md:text-[14px] links">About</li></Link>
                </ul>
                <div className="flex items-start p-0 gap-2 my-auto">
                    <Link href='contact-us'><p className="links md:text-[14px] font-[400]">Contact:</p>
                    <p className="links md:text-[14px] contact-num">(808) 555-0111</p></Link>
                </div>
            </div>
            <hr />
        </div>
    )
}