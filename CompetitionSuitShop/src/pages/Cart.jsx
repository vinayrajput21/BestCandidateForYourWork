import React from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import poster1 from "../assets/poster/Poster1.png";
import poster2 from "../assets/poster/Poster2.png";

const cartItems = [
  {
    id: 1,
    name: "Orange Pink Wellness Competition Suit (BM151-29)",
    price: 379.00,
    originalPrice: 426.00,
    discount: "11% OFF",
    image: poster1
  },
  {
    id: 2,
    name: "Orange Pink Wellness Competition Suit (BM151-29)",
    price: 329.00,
    originalPrice: 379.00,
    discount: "13% OFF",
    image: poster2
  }
];

export default function Cart() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-10 font-sans">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        
        {/* Left Side: Shopping Bag */}
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-4 md:mb-6">Shopping Bag</h2>
          <hr className="border-gray-200 mb-6" />
          
          <div className="space-y-6 md:space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="pb-6 border-b border-gray-100">
                <div className="flex gap-3 md:gap-4">
                  {/* Smaller image on mobile */}
                  <img src={item.image} alt="Product" className="w-20 h-28 md:w-24 md:h-32 object-cover rounded" />
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row justify-between items-start gap-2">
                      <h3 className="text-xs md:text-sm text-gray-600 max-w-md leading-tight">{item.name}</h3>
                      <div className="text-left md:text-right">
                        <p className="text-gray-400 line-through text-xs md:text-sm">${item.originalPrice.toFixed(2)}</p>
                        <p className="font-bold text-base md:text-lg text-pink-600 md:text-black">${item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <span className="bg-green-700 text-white text-[9px] md:text-[10px] px-2 py-0.5 rounded-xl font-bold">{item.discount}</span>
                      <span className="text-green-700 text-[10px] md:text-xs font-medium">Savings on this order</span>
                    </div>

                    <div className="mt-4 md:mt-6 flex items-center justify-between">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-gray-300 rounded bg-white">
                        <button className="p-1.5 md:p-2 hover:bg-gray-50"><Minus size={12} className="md:w-[14px]" /></button>
                        <span className="px-3 md:px-4 py-1 text-xs md:text-sm border-x border-gray-300">1</span>
                        <button className="p-1.5 md:p-2 hover:bg-gray-50"><Plus size={12} className="md:w-[14px]" /></button>
                      </div>
                      
                      <button className="text-gray-400 hover:text-red-500 transition-colors p-1">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="lg:w-1/3">
          {/* We remove 'sticky' on mobile so it flows naturally under the items */}
          <div className="lg:sticky lg:top-32 bg-gray-50 p-6 rounded-2xl md:bg-transparent md:p-0">
            <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Discount</h2>
            <div className="flex gap-2 mb-8 md:mb-10">
              <input 
                type="text" 
                placeholder="Promo code"
                className="flex-1 border border-pink-100 bg-white md:bg-pink-50/30 rounded px-4 py-2 outline-none focus:border-pink-300 text-sm" 
              />
              <button className="bg-pink-200 text-gray-700 px-4 md:px-6 py-2 rounded font-medium hover:bg-pink-300 transition text-sm">
                Apply
              </button>
            </div>

            <h2 className="text-lg md:text-xl font-semibold mb-4 md:mb-6">Payment Summary</h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium text-black">$ 708.00</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span className="text-green-600 font-medium">FREE</span>
              </div>
              <hr className="border-gray-200 my-4" />
              <div className="flex justify-between text-base md:text-lg font-bold text-black">
                <span>Total</span>
                <span>$ 708.00</span>
              </div>
            </div>

            <button className="w-full bg-[#E30075] text-white py-3 md:py-4 rounded-full mt-6 md:mt-8 font-semibold hover:opacity-90 shadow-lg shadow-pink-200 transition-all active:scale-[0.98]">
              Checkout
            </button>
            
            {/* Added a back to shop link for better mobile UX */}
            <div className="text-center mt-4">
              <button className="text-xs text-gray-400 underline md:hidden">Continue Shopping</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}