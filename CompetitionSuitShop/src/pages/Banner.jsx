import React from 'react';
import Popup from '../assets/sliders/popup.png';
import { X, Sparkles, ArrowRight } from 'lucide-react';

function Banner({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white rounded-full shadow-lg hover:scale-110 transition-transform group"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-[#E10174] group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Side - Image */}
          <div className="relative bg-gradient-to-br from-[#E10174] to-[#b0015c] p-6 flex items-center justify-center">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10 w-full">
              <img
                src={Popup}
                alt="Promotional banner"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="p-8 flex flex-col justify-center bg-white">
            {/* Header */}
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-[#E10174] animate-pulse" />
              <span className="text-[#E10174] text-xs font-semibold uppercase tracking-wider">
                Special Announcement
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Don't Miss Out!
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6 leading-relaxed">
              Exclusive offer available for a limited time. Get access to amazing deals and premium features designed just for you.
            </p>

            {/* Features List */}
            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#E10174] rounded-full" />
                Limited time special pricing
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#E10174] rounded-full" />
                Premium features included
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700">
                <div className="w-1.5 h-1.5 bg-[#E10174] rounded-full" />
                No hidden charges
              </li>
            </ul>

            {/* CTA Button */}
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#E10174] to-[#b0015c] text-white px-8 py-3 rounded-full font-bold hover:shadow-xl hover:scale-105 transition-all group w-full sm:w-auto">
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;