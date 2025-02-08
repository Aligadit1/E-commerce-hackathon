// components/CartPage.tsx
"use client";
import Image from "next/image";
import Heart from "./Heart";
import { useCart } from "../../context/CartContext";
import TrashBin from "./TrashBin";

const CartPage = () => {
  const { cartItems, updateQuantity, handleSizeChange, removeFromCart } = useCart();

  return (
    <div className="mx-auto p-4 max-w-[1990px] mt-[2rem] px-2 sm:px-10 lg:px-20">
      <h2 className="text-lg font-bold pb-8 px-4">Bag</h2>

      <div className="mx-auto p-4 md:flex max-w-[1990px] md:gap-8">
        <div className="flex-1">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 mb-4 rounded-lg shadow-md flex items-center space-x-4 border-b"
            >
              <Image
                src={item.image}
                alt={item.name}
                width={100}
                height={100}
                className="rounded-lg object-cover"
              />
              <div className="flex-1 flex flex-col gap-2">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">{item.description}</p>
                <div className="flex gap-2 items-center">
                  <p className="text-gray-600 text-sm">Size:</p>
                  <select
                    value={item.size}
                    onChange={(e) => handleSizeChange(item.id, e.target.value)}
                    className="border p-1 rounded-md text-sm"
                  >
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <p className="text-gray-600 text-sm">Quantity:</p>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="border px-2 py-1 rounded-md text-sm"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="border px-2 py-1 rounded-md text-sm"
                  >
                    +
                  </button>
                </div>
                <div className="flex space-x-2">
                  <Heart />
                  {/* TrashBin is updated to call removeFromCart when clicked */}
                  <TrashBin onClick={() => removeFromCart(item.id,item.size)} />
                </div>
              </div>
              <p className="font-bold">MRP: ${item.price}</p>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-lg font-bold mb-4">Summary</h2>
          <div className="mb-4">
            {cartItems.map((item) => (
              <div key={item.id} className="text-gray-700 mb-2">
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm">
                  Size: {item.size} | Qty: {item.quantity}
                </p>
                <p className="font-bold">Price: {item.price} x {item.quantity} = ${item.price * item.quantity}</p>
                <hr className="my-2" />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-gray-700">
            <p>Subtotal</p>
            <p>
              $
              {cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </p>
          </div>
          <div className="flex justify-between text-gray-700 mt-2">
            <p>Estimated Delivery & Handling</p>
            <p>Free</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between font-bold text-gray-900">
            <p>Total</p>
            <p>
              $
              {cartItems.reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </p>
          </div>
          <button className="mt-6 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600">
            Member Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
