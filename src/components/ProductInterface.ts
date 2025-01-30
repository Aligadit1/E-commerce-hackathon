export interface ProductInterface {
    _id: string;
    imageUrl: string;
    price: number;
    priceWithoutDiscount: number;
    title: string;
    greenTag: string;
    badge: string; 
    tags?: string[];
  };