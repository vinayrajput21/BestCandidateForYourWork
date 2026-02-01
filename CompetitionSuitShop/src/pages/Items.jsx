import React, { useState } from 'react';
import poster1 from "../assets/poster/Poster1.png";
import poster2 from "../assets/poster/Poster2.png";
import poster3 from "../assets/poster/Poster3.png";
import { ChevronDown, Minus, Plus, ShoppingBag } from "lucide-react";

export default function Items() {
  const [mainImg, setMainImg] = useState(poster1);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, show: false });
  const [quantity, setQuantity] = useState(1);
  const images = [poster1, poster2, poster3];

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;
    setZoomPos({ x, y, show: true });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 font-['Montserrat',sans-serif]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Left: Image Gallery */}
        <div className="flex flex-col gap-4">
          <div 
            className="relative aspect-square overflow-hidden cursor-zoom-in bg-gray-50 rounded-sm"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setZoomPos({ ...zoomPos, show: false })}
          >
            <img src={mainImg} alt="Product" className="w-full h-full object-contain" />
            {zoomPos.show && (
              <div 
                className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                style={{
                  backgroundImage: `url(${mainImg})`,
                  backgroundPosition: `${zoomPos.x}% ${zoomPos.y}%`,
                  backgroundSize: '200%'
                }}
              />
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((img, i) => (
              <img 
                key={i} src={img} 
                className={`aspect-square object-cover cursor-pointer border-2 ${mainImg === img ? 'border-pink-500' : 'border-transparent'}`}
                onClick={() => setMainImg(img)}
              />
            ))}
          </div>
          <p className="text-[11px] text-gray-600 mt-2 leading-relaxed">
            We will email you regarding your measurements and styles for your suit, once your order has been submitted!
          </p>
        </div>

        {/* Right: Product Info */}
        <div className="flex flex-col gap-6">
          <div className="space-y-2">
            <span className="text-[12px] text-gray-500 flex items-center gap-1">
              <span className="inline-block w-3 h-3 border border-gray-400 rounded-full text-[8px] flex items-center justify-center">👁</span>
              Viewed by 2.2K athletes & coaches
            </span>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">Enchanted Forest Wellness Competition Bikini B211</h1>
            <span className="inline-block bg-green-600 text-white text-[10px] px-3 py-1 rounded-full font-bold tracking-wider uppercase">Available</span>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-[12px] font-semibold text-gray-700 block mb-2 uppercase">Competition League</label>
              <input type="text" placeholder="E.g - NPC, WBFF, IFBB..." className="w-full border border-gray-200 p-3 text-sm focus:outline-none" />
            </div>

            <div>
              <label className="text-[12px] font-semibold text-gray-700 block mb-2 uppercase">Competition Date</label>
              <div className="grid grid-cols-3 gap-2">
                <div className="relative"><select className="w-full border border-gray-200 p-3 text-sm appearance-none outline-none"><option>Month</option></select><ChevronDown size={14} className="absolute right-3 top-4 text-gray-400" /></div>
                <div className="relative"><select className="w-full border border-gray-200 p-3 text-sm appearance-none outline-none"><option>Date</option></select><ChevronDown size={14} className="absolute right-3 top-4 text-gray-400" /></div>
                <div className="relative"><select className="w-full border border-gray-200 p-3 text-sm appearance-none outline-none"><option>Year</option></select><ChevronDown size={14} className="absolute right-3 top-4 text-gray-400" /></div>
              </div>
            </div>

            <div>
              <label className="text-[12px] font-semibold text-gray-700 block mb-2 uppercase">Your Instagram account</label>
              <input type="text" placeholder="@competitionsuitshop" className="w-full border border-gray-200 p-3 text-sm focus:outline-none" />
            </div>

            <div className="bg-pink-50/50 p-4 border border-pink-100 flex gap-3">
              <span className="text-xl">📏</span>
              <div>
                <p className="text-[12px] font-bold text-gray-800">Measurements After Order</p>
                <p className="text-[11px] text-gray-600 leading-relaxed">You'll receive a personalized measurement form once your order is placed. All our suits are newly custom-made to fit you perfectly</p>
              </div>
            </div>

            <div>
              <label className="text-[12px] font-semibold text-gray-700 block mb-2 uppercase">Payments option *</label>
              <div className="relative">
                <select className="w-full border border-gray-200 p-3 text-sm appearance-none outline-none"><option>Full Payment</option></select>
                <ChevronDown size={14} className="absolute right-3 top-4 text-gray-400" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-4">
            <span className="text-gray-400 line-through text-lg">$ 379.00</span>
            <span className="text-2xl font-bold">$ 329.00</span>
          </div>

          <div className="flex gap-4">
            <div className="flex items-center border border-gray-200 rounded-sm">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-4 hover:bg-gray-50"><Minus size={14} /></button>
              <span className="px-4 font-semibold w-10 text-center">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="p-4 hover:bg-gray-50"><Plus size={14} /></button>
            </div>
            <button className="flex-1 bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-colors uppercase tracking-tight text-sm">
              Add to your bag <ShoppingBag size={18} />
            </button>
          </div>
          <p className="text-center text-[12px] text-gray-500">Got questions? <span className="text-pink-600 cursor-pointer underline">Slide into our DMs on Instagram!</span> ❤️</p>
        </div>
      </div>
    </div>
  );
}