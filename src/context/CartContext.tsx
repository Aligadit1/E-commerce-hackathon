// context/CartContext.tsx
"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  description?: string ;
  size?: string;
  quantity: number;
  price: number;
  image: string;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item:CartItem) => void;
  updateQuantity: (id: string, amount: number) => void;
  handleSizeChange: (id: string, newSize: string) => void;
  removeFromCart: (id: string,size?:string) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);
export const initialCartItems: CartItem[] = [  ];

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Initial items come from your original code

  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const addToCart = (item: CartItem) => {
    const existingItem = cartItems.find(
      (ci) => ci.id === item.id && ci.size === item.size
    );
    if (existingItem) {
      setCartItems((prev) =>
        prev.map((ci) =>
          ci.id === existingItem.id
            ? { ...ci, quantity: ci.quantity + item.quantity }
            : ci
        )
      )
      alert(`${item.name} already exists quantity increased`);
    } else {
      setCartItems((prev) => [...prev, item ])
      alert(`${item.name} added to cart`);
    }
  };

  const updateQuantity = (id: string, amount: number) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleSizeChange = (id: string, newSize: string) => {
    setCartItems((prevItems) => {
      // Check if an item with the same id and new size already exists
      const existingItem = prevItems.find(
        (item) => item.id === id && item.size === newSize
      );
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === id && item.size === newSize
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Find the original item by its id
      const originalItem = prevItems.find((item) => item.id === id && item.size === item.size);
      if (!originalItem) return prevItems;
      // Create a new cart item with the same id and updated size, starting with quantity 1
      const newItem = {
        ...originalItem,
        id: originalItem.id,
        size: newSize,
        quantity: 1,
      };
      return [...prevItems, newItem];
    });
  };

  const removeFromCart = (id: string,size?:string) => {
    setCartItems((prevItems) => prevItems.filter((item) => !(item.id == id && item.size == size  )));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, handleSizeChange, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
