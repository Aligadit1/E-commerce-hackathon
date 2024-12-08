import { CiCircleAlert } from "react-icons/ci";
import Image from "next/image";
import { Button } from "./ui/button";
export default function Header(){
    return(
        <div className="w-full max-w-[1920px] mx-auto  h-[203px]">
            <div className=" h-[45px] bg-[#272343]  text-white flex justify-between items-center px-[300px] py-[14px] ">
                <p className="opacity-70 font-[inter]">✓ Free Shipping On All Orders Over $50</p>
                <div className="flex gap-6 mx-0 my-auto opacity-70">
                    <div className="flex"><p>Eng</p><Image src="/Group.png" alt="dropdown" height={1} width={12} className="h-[7.5px] mt-2 ml-2"  /></div>
                    <p>Faqs</p>
                    <div className="flex"><CiCircleAlert className="text-white h-5 w-5 mt-[1px] mr-1" /><p>Need Help</p></div>
                </div>
            </div>
            <div className="h-[84px] bg-[#F0F2F3] flex justify-between items-center py-[20px] px-[300px] gap-[302px]">
                <Image src={"/Logo.png"} alt="Logo" height={40} width={166} />
                <Button className="bg-white gap-3 flex w-[120px] h-[44] hover:bg-slate-500" > <Image src={"/Buy 2.png"} alt="Cart" height={22} width={22} /> <p className="w-[26px] h-[13px] font-[Inter] font-medium text-[12px] leading-[110%] text-center capitalize text-[#272343]">Cart</p> <Image src={"/No.png"} alt="cartNumber" height={20} width={20}/>  </Button>
            </div>
            <div className="flex justify-between items-center px-[300px] py-[14px] w-[100%] h-[78px] bg-[#ffffff] shadow-custom-thin">
                <ul className="flex items-center p-0 gap-8">
                    <li className="link-hover links" >Home</li>
                    <li className="link-hover links">Shop</li>
                    <li className="link-hover links">Product</li>
                    <li className="link-hover links">Pages</li>
                    <li className="link-hover links">About</li>
                </ul>
                <div className="flex items-start p-0 gap-2 my-auto">
                    <p className="links font-[400]">Contact:</p>
                    <p className="links contact-num">(808) 555-0111</p>
                </div>
            </div>
            <hr />
        </div>
    )
}