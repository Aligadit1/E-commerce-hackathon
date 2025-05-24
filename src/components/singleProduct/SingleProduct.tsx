import CarouselProducts from "./CarouselProducts";
import { client } from '@/sanity/lib/client';
import ProductDetails from './ProductDetails';

// Sanity client setup

// Fetch product data based on slug
const SingleProduct =async ({params}:{params:{slug:string}}) => {
  
  const query = `*[_type == "products" && slug.current == $slug][0]{
    "imageUrl": image.asset->url,
    title,
    price,
    priceWithoutDiscount,
    description,
    }`;
    const product = await client.fetch(query,{slug:params.slug});


  // If product is not found, return a 404-like message
  if (!product) {
    return <div><p className='text-center text-red-500 text-[24px] mt-10'>Product not found</p>
    <CarouselProducts/></div>;
  }
  return (
    <ProductDetails product={product}/>
  );
};

export default SingleProduct;