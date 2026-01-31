import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/icons/logo.png";
import call from "../assets/icons/Vector.png";
import Account from "../assets/icons/account.png";
import Wishlist from "../assets/icons/wishlist.png";
import ShoppingCart from "../assets/icons/Cart.png";
import { Search, PhoneCall, Truck, ShieldCheck, Star, Menu, X } from "lucide-react"; // Added Menu and X

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  function NavItem({ label }) {
    return (
      <div className="relative group cursor-pointer">
        <div className="flex items-center gap-1 hover:text-primary">
          <span>{label}</span>
          <svg className="w-3 h-3 mt-[1px]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
        <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white shadow-lg rounded-md border text-sm min-w-[180px]">
          <div className="px-4 py-2 hover:bg-gray-50">Option 1</div>
          <div className="px-4 py-2 hover:bg-gray-50">Option 2</div>
          <div className="px-4 py-2 hover:bg-gray-50">Option 3</div>
        </div>
      </div>
    );
  }

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-pink-50 text-center text-[10px] md:text-xs py-2 px-4 flex flex-col md:flex-row justify-center items-center gap-4 border-b border-pink-100">
        <span>
          Reach us on Instagram{" "}
          <a href="https://www.instagram.com/competitionsuitshop" target="_blank" rel="noopener noreferrer" className="font-medium text-pink-600 hover:underline">
            @competitionsuitshop
          </a>
          , and our seasoned experts will personally guide you
        </span>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        
        {/* MOBILE: Menu Button | DESKTOP: Phone Number */}
        <div className="flex items-center flex-1">
          <button 
            className="md:hidden p-1" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:flex items-center">
            <img src={call} alt="Call" className="w-4 h-4" />
            <span className="ml-2 font-medium underline underline-offset-4 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
              +1 646 755 9535
            </span>
          </div>
        </div>

        {/* Logo - Centered */}
        <Link to="/" className="flex justify-center">
          <img src={logo} alt="Competition Suit Shop" className="h-7 md:h-10" />
        </Link>

        {/* Action Icons */}
        <div className="flex items-center justify-end gap-3 md:gap-5 flex-1">
          <img src={Account} alt="Account" className="w-5 h-5 cursor-pointer hover:opacity-80" />
          <img src={Wishlist} alt="Wishlist" className="w-5 h-5 cursor-pointer hover:opacity-80 hidden md:block" />
          <Link to="/cart" className="relative">
            <img src={ShoppingCart} alt="Cart" className="w-5 h-5 cursor-pointer hover:opacity-80" />
            {/* Optional badge if you want to match the "2" in your image */}
            <span className="absolute -top-2 -right-2 bg-pink-100 text-[10px] rounded-full w-4 h-4 flex items-center justify-center text-pink-600 font-bold">2</span>
          </Link>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium animate-in slide-in-from-top duration-300">
          <NavLink to="/buy-now" onClick={() => setIsMobileMenuOpen(false)}>Buy now, Design late</NavLink>
          <NavLink to="/consult" onClick={() => setIsMobileMenuOpen(false)}>Schedule a Consult</NavLink>
          <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
        </div>
      )}

      {/* Trust Bar (Desktop Only usually, but kept conditional) */}
      {isCartPage && (
        <div className="hidden md:block bg-gray-50/50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center text-[11px] text-gray-500 uppercase tracking-wide">
             <div className="flex items-center gap-3">
               <PhoneCall size={18} className="text-gray-400" />
               <div>
                 <p className="font-bold text-gray-700">Customer Support 24/7</p>
                 <p className="normal-case text-[10px]">Highest rated customer service</p>
               </div>
             </div>
             {/* ... Other Trust items (keeping your existing logic) */}
             <div className="flex items-center gap-3 border-l border-gray-200 pl-8">
               <Truck size={20} className="text-gray-400" />
               <div>
                 <p className="font-bold text-gray-700">Free Shipping</p>
                 <p className="normal-case text-[10px]">Free shipping worldwide!</p>
               </div>
             </div>
          </div>
        </div>
      )}

      {/* Navigation & Search Bar (Desktop Only) */}
      <div className="hidden md:block border-t border-gray-100 bg-white" style={{ fontFamily: "Montserrat, sans-serif" }}>
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <nav className="flex gap-8 text-sm font-medium text-gray-700">
            <NavItem label="Competition Suit" />
            <NavItem label="Style & Measurement Guide" />
            <NavLink to="/buy-now" className="hover:text-primary">Buy now, Design late</NavLink>
            <NavLink to="/consult" className="hover:text-primary">Schedule a Consult</NavLink>
            <NavLink to="/blog" className="hover:text-primary">Blog</NavLink>
          </nav>

          <div className="relative w-72">
            <Search size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search your Competition Suit"
              className="w-full rounded-xl border border-gray-300 px-4 py-2 pr-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
}