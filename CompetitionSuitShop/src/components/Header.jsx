import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/icons/logo.png";
import call from "../assets/icons/Vector.png";
import Account from "../assets/icons/account.png";
import Wishlist from "../assets/icons/wishlist.png";
import ShoppingCart from "../assets/icons/Cart.png";
import { Search, PhoneCall, Truck, Star, CreditCard, Menu, X, ChevronDown } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isCartPage = location.pathname === "/cart";

  const navigationData = {
    "COMPETITION SUIT": [
      "BIKINI COMPETITION SUITS",
      "FIGURE COMPETITION SUITS",
      "WELLNESS COMPETITION SUITS",
      "FIT MODEL DIVISION",
      "POSING SUITS",
      "PRACTICE SUITS",
      "ROBES",
      "BUY NOW DESIGN LATER"
    ],
    "STYLE & GUIDES": [
      "MEASUREMENT GUIDE",
      "FABRIC SAMPLES",
      "STYLE GUIDE",
      "CRYSTAL PATTERNS"
    ]
  };

  // Scroll logic to hide/show header
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        // Show header if scrolling up, hide if scrolling down
        if (window.scrollY > lastScrollY && window.scrollY > 100) { 
          setIsVisible(false);
          setActiveDropdown(null); // Close dropdowns on hide
        } else {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header 
      className={`border-b border-gray-200 bg-white sticky top-0 z-50 font-['Montserrat',sans-serif] transition-all duration-500 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
      }`} 
      onMouseLeave={() => setActiveDropdown(null)}
    >
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

      {/* Main Logo/Action Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center flex-1">
          <button className="md:hidden p-1" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          <div className="hidden md:flex items-center">
            <img src={call} alt="Call" className="w-4 h-4" />
            <span className="ml-2 font-medium underline underline-offset-4 text-sm">
              +1 646 755 9535
            </span>
          </div>
        </div>

        <Link to="/" className="flex justify-center">
          <img src={logo} alt="Competition Suit Shop" className="h-7 md:h-10" />
        </Link>

        <div className="flex items-center justify-end gap-3 md:gap-5 flex-1">
          <img src={Account} alt="Account" className="w-5 h-5 cursor-pointer hover:opacity-80" />
          <img src={Wishlist} alt="Wishlist" className="w-5 h-5 cursor-pointer hover:opacity-80 hidden md:block" />
          <Link to="/cart" className="relative">
            <img src={ShoppingCart} alt="Cart" className="w-5 h-5 cursor-pointer hover:opacity-80" />
            <span className="absolute -top-2 -right-2 bg-pink-100 text-[10px] rounded-full w-4 h-4 flex items-center justify-center text-pink-600 font-bold">2</span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <NavLink to="/buy-now" onClick={() => setIsMobileMenuOpen(false)}>Buy now, Design late</NavLink>
          <NavLink to="/consult" onClick={() => setIsMobileMenuOpen(false)}>Schedule a Consult</NavLink>
          <NavLink to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</NavLink>
        </div>
      )}

      {/* Cart Page Trust Bar */}
      {isCartPage && (
        <div className="hidden md:block bg-gray-50/50 border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center text-[11px] tracking-wide">
            <div className="flex items-center gap-3">
              <PhoneCall size={22} className="text-gray-400 stroke-[1.5]" />
              <div className="flex flex-col">
                <p className="font-bold text-gray-700 leading-tight">Customer Support 24/7</p>
                <p className="text-gray-500 text-[10px]">Highest rated customer service</p>
              </div>
            </div>
            {/* ... rest of trust bar items ... */}
          </div>
        </div>
      )}

      {/* Desktop Navigation */}
      <div className="hidden md:block border-t border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between gap-6">
          <nav className="flex gap-8 text-[13px] tracking-tight">
            {Object.keys(navigationData).map((key) => (
              <div 
                key={key} 
                onMouseEnter={() => setActiveDropdown(key)}
                className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 py-1 border-b-2 ${activeDropdown === key ? 'border-black text-black' : 'border-transparent hover:text-black'}`}
              >
                {key} <ChevronDown size={14} className={`transition-transform ${activeDropdown === key ? 'rotate-180' : ''}`} />
              </div>
            ))}
            <NavLink to="/buy-now" className="hover:text-black pt-1">Buy now, Design later</NavLink>
            <NavLink to="/consult" className="hover:text-black pt-1">Schedule a Consult</NavLink>
            <NavLink to="/blog" className="hover:text-black pt-1">Blog</NavLink>
            <NavLink to="/mission" className="hover:text-black pt-1">Our Mission</NavLink>
          </nav>

          <div className="relative w-72">
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
            <input
              type="text"
              placeholder="Search Products..."
              className="w-full bg-gray-50 rounded-md px-4 py-2 pr-10 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Dropdown Content */}
      {activeDropdown && (
        <div 
          className="hidden md:block bg-white border-t border-gray-100 animate-in fade-in slide-in-from-top-1 duration-200"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
        >
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex flex-wrap gap-x-10 gap-y-2">
              {navigationData[activeDropdown].map((item) => (
                <Link 
                  key={item} 
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-[12px] font-bold text-gray-700 hover:text-pink-600 uppercase tracking-tight whitespace-nowrap"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}