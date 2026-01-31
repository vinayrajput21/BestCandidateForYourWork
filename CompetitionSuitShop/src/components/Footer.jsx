import { Link } from "react-router-dom";

// Your imported assets
import pinkLogo from "../assets/icons/logo.png";
import paymentIcons from "../assets/icons/payments.png";
import instagramIcon from "../assets/icons/instagram.png";
import youtubeIcon from "../assets/icons/Youtube.png";
import msgIcon from "../assets/icons/Message.png";
import callIcon from "../assets/icons/Vector.png";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 mt-10 font-montserrat">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-16">
        {/* Main Grid: Stacks on mobile, splits on Desktop */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24">
          
          {/* Brand & Social Section */}
          <div className="flex flex-col gap-6 min-w-[250px]">
            <img
              src={pinkLogo}
              alt="Competition Suit Shop"
              className="h-10 w-fit object-contain"
            />

            <div className="flex flex-col gap-4 text-gray-600 text-[13px] md:text-sm">
              <div className="flex items-center gap-3">
                <img src={instagramIcon} alt="Instagram" className="w-5 h-5 flex-shrink-0" />
                <a href="https://www.instagram.com/competitionsuitshop" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600">
                  @competitionsuitshop
                </a>
              </div>

              <div className="flex items-center gap-3">
                <img src={youtubeIcon} alt="YouTube" className="w-5 h-4 flex-shrink-0" />
                <span>Competition Suit Shop</span>
              </div>

              <div className="flex items-center gap-3">
                <img src={msgIcon} alt="Email" className="w-5 h-4 flex-shrink-0" />
                <a href="mailto:info@competitionsuitshop.com" className="hover:text-pink-600">
                  info@competitionsuitshop.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <img src={callIcon} alt="Phone" className="w-5 h-5 flex-shrink-0" />
                <span>+1 646 755 9535</span>
              </div>
            </div>
          </div>

          <hr className="lg:hidden border-gray-100" />

          {/* Links Sections: 1 column on mobile, 2 on tablet, 4 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 flex-1">
            
            {/* Company Column */}
            <div>
              <h4 className="text-gray-900 font-bold text-[15px] mb-5 uppercase tracking-tight">Company</h4>
              <ul className="flex flex-col gap-3 text-[13px] md:text-sm text-gray-500">
                <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
                <li><Link to="/reviews" className="hover:text-pink-600">Reviews</Link></li>
                <li><Link to="/blog" className="hover:text-pink-600">Blogs</Link></li>
                <li><Link to="/about" className="hover:text-pink-600">About Us</Link></li>
                <li><Link to="/best-time-to-order" className="hover:text-pink-600">Best Time to Order</Link></li>
                <li><Link to="/bikini-top" className="hover:text-pink-600">Bikini Top Style</Link></li>
                <li><Link to="/bikini-bottom" className="hover:text-pink-600">Bikini Bottom Style</Link></li>
                <li><Link to="/figuresuit-top" className="hover:text-pink-600">Figuresuit Top Style</Link></li>
                <li><Link to="/figuresuit-bottom" className="hover:text-pink-600">Figuresuit Bottom Style</Link></li>
              </ul>
            </div>

            <hr className="sm:hidden border-gray-100" />

            {/* Resources Column */}
            <div>
              <h4 className="text-gray-900 font-bold text-[15px] mb-5 uppercase tracking-tight">Resources</h4>
              <ul className="flex flex-col gap-3 text-[13px] md:text-sm text-gray-500">
                <li><Link to="/my-account" className="hover:text-pink-600">My Account</Link></li>
                <li><Link to="/custom-suit" className="hover:text-pink-600">Custom Competition Suit</Link></li>
                <li><Link to="/npc-bikini" className="hover:text-pink-600">NPC Bikini Competition Suits</Link></li>
                <li><Link to="/gift-cards" className="hover:text-pink-600">Gift Cards</Link></li>
                <li><Link to="/measurement-guide" className="hover:text-pink-600">Measurement Guide</Link></li>
                <li><Link to="/payment-plan" className="hover:text-pink-600">Payment Plan</Link></li>
                <li><Link to="/why-choose-us" className="hover:text-pink-600">Why choose us</Link></li>
              </ul>
            </div>

            <hr className="sm:hidden border-gray-100" />

            {/* Help Center Column */}
            <div>
              <h4 className="text-gray-900 font-bold text-[15px] mb-5 uppercase tracking-tight">Help Center</h4>
              <ul className="flex flex-col gap-3 text-[13px] md:text-sm text-gray-500">
                <li><Link to="/contact" className="hover:text-pink-600">Contact Us</Link></li>
                <li><Link to="/faqs" className="hover:text-pink-600">FAQs</Link></li>
                <li><Link to="/schedule-consult" className="hover:text-pink-600">Schedule a Consult</Link></li>
                <li><Link to="/returns-remakes" className="hover:text-pink-600">Returns and Remake</Link></li>
                <li><Link to="/cancellation" className="hover:text-pink-600">Cancellation Policy</Link></li>
                <li><Link to="/refund" className="hover:text-pink-600">Refund Policy</Link></li>
                <li><Link to="/privacy" className="hover:text-pink-600">Privacy Policy</Link></li>
                <li><Link to="/payment-delivery" className="hover:text-pink-600">Payment & Delivery</Link></li>
                <li><Link to="/coronavirus" className="hover:text-pink-600">Coronavirus Update</Link></li>
                <li><Link to="/terms" className="hover:text-pink-600">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Area */}
       <div className="border-t border-gray-300/60 bg-[#FCFCFC] py-6 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Competition Suit Shop</p>

          <img
            src={paymentIcons}
            alt="Visa, Mastercard, American Express, PayPal"
            className="h-2 md:h-3 w-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}