import { FaClock, FaFacebook, FaLocationDot, FaPhone } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export const headerLinks=[
    {
   id:1,
   name:"Home",
   href:"/",
},
{
    id:2,
    name:"Shop",
    href:"/#shop",
},
{
    id:3,
    name:"Products",
    href:"/product",
},
{
    id:4,
    name:"Pages",
    href:"/#",
},
{
    id:5,
    name:"About",
    href:"/about",
},
];
export const footerLinks ={
    logo:"/Comforty Logo.png",
    name:"Comforty",
    paragraph:"Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum.Cras egestas purus ",
    SocialLinks:[
        {
            id:1,
           href:"https://youtube.com/@deadlygaming8015?si=i1_3ES3ckOJUJkxW",
           icon:<FaFacebook/>,
        },
        
        {
            id:2,
           href:"",
           icon:<FaTwitter />,
        },
        
        {
            id:3,
           href:"https://www.instagram.com/gaditali/?next=%2F&hl=en",
           icon:<FaInstagram />,
        },
        
        {
            id:4,
           href:"",
           icon:<FaPinterest />,
        },
        {
            id:5,
           href:"https://www.youtube.com",
           icon:<FaYoutube />,
        }
        
    ]
}
export const footerCategory={
    head : "Category",
    chairsCategory:[
        {
            id:1,
            name:"Sofa"
        },
        {
            id:2,
            name:"Armchair"
        },
        {
            id:3,
            name:"Wing Chair"
        },
        {
            id:4,
            name:"Desk Chair"
        },
        {
            id:5,
            name:"Wooden Chair"
        },
        {
            id:6,
            name:"Park Bench"
        },
    ]
}
export const footerSupport={
    head : "Support",
    supportNames:[
        {
            id:1,
            name:"Help & Support"
        },
        {
            id:2,
            name:"Terms & Conditions"
        },
        {
            id:3,
            name:"Privacy Policy"
        },
        {
            id:4,
            name:"Help"
        },
    ]
}

export const footerNewsletter={
    head:"Newsletter",
    placeholder:"Your Email",
    btnText:"Subscribe",
    paragraph:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim."
}

export const contactData = [
    {
        id:1,
        name:"Address",
        icon:<FaLocationDot />,
        address:"Bantva town, Karimabad, Karachi, Sindh, Pakistan",
    },
    {
        id:2,
        name:"Phone",
        icon:<FaPhone />,
        num1:"+92 3248274201",
        num2:"+92 3132791718",
    },
    {
        id:3,
        name:"Working time",
        icon:<FaClock />,
        timing1:"Monday-Friday: 9:00 - 22:00",
        timing2:"Saturday-Sunday: 9:00 - 21:00",
    },
]
export  interface ProductInterface {
    _id: string ;
    slug: string;
    title: string;
    imageUrl: string;
    price: number;
    priceWithoutDiscount: string;
    badge?: string;
    greenTag?: string;
    description?: string; // Add description
    size?: string ; // Add size
    quantity?: number; // Add quantity
    tags?: string[]; // Add tags
  }
  