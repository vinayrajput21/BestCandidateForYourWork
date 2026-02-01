import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import img1 from "../assets/sliders/Slider1.png";
import img2 from "../assets/sliders/Slider2.png";
import img3 from "../assets/sliders/Slider3.png";
import img4 from "../assets/sliders/Slider4.png";
import img5 from "../assets/sliders/Slider5.png";
import popupimg from "../assets/sliders/popup.png";
import popupimg2 from "../assets/sliders/popup2.png";
import popupimg3 from "../assets/sliders/popup3.png";
import popupimg4 from "../assets/sliders/popup4.png";
import poster1 from "../assets/poster/Poster1.png";
import poster2 from "../assets/poster/Poster2.png";
import poster3 from "../assets/poster/Poster3.png";
import world from "../assets/icons/world.png";
import sparks from "../assets/icons/sparks.png";
import verified from "../assets/icons/verified.png";
import playButton from "../assets/icons/Layer_1.png";
import medal from "../assets/icons/medal.png";
import pinkmedal from "../assets/icons/pinkmedal.png";
import consultation from "../assets/poster/Consultation.png";
import quoteIcon from "../assets/icons/quote.png";

const images = [img1, img2, img3, img4, img5];

const athletesData = [
  {
    id: 1,
    name: "Gissele Quezadq",
    image: popupimg2,
    tagline: "Became a coach",
    suitName: "Custom Pink Suit",
    review:
      "Good words about the company and assisting them to achieve whatever.",
  },
  {
    id: 2,
    name: "Kelsey Ahronson",
    image: popupimg,
    tagline: "Professional Athlete",
    suitName: "Purple Shine Suit",
    review: "Amazing quality and fit.",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    image: popupimg3,
    tagline: "Fitness Enthusiast",
    suitName: "Emerald Green Suit",
    review: "The sparkle is incredible!",
  },
  {
    id: 4,
    name: "Maria Garcia",
    image: popupimg4,
    tagline: "Bikini Competitor",
    suitName: "Ocean Blue Suit",
    review: "Felt so confident on stage.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("stories");
  const [selectedAthlete, setSelectedAthlete] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [index, setIndex] = useState(0);

  const gridAthletes = Array(4)
    .fill(null)
    .map((_, i) => ({
      ...athletesData[i % athletesData.length],
      id: i,
    }));


  // Auto-slide every 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-gray-800 font-['Montserrat']">
<section className="relative py-12 overflow-hidden bg-white">
      <div className="relative h-[450px] flex justify-center items-center">
        {images.map((src, i) => {
          // Logic for infinite loop positioning
          let position = i - index;
          if (position < -2) position += images.length;
          if (position > 2) position -= images.length;

          const isCenter = position === 0;
          const isNeighbor = Math.abs(position) === 1;

          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                x: position * 220, // Distance between small images
                scale: isCenter ? 1 : isNeighbor ? 0.8 : 0.6,
                y: isCenter ? -30 : 20, // Center goes UP, others go DOWN
                opacity: Math.abs(position) > 2 ? 0 : 1,
                zIndex: isCenter ? 30 : 20 - Math.abs(position),
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute w-[180px] md:w-[220px] aspect-[3/5]"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl h-full border-2 border-white/50">
                <img
                  src={src}
                  className="w-full h-full object-cover"
                  alt={`Slide ${i}`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* The White Shade/Gradient at the bottom */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-40 pointer-events-none" />
    </section>

      <section className="text-center max-w-5xl mx-auto px-6">
        <span className="text-[12px] uppercase tracking-[3px] text-gray-400 block mb-4">
          Glimpse of Happiness
        </span>
        <h1 className="text-2xl font-montserrat md:text-4xl font-extrabold mb-20">
          Behind every custom suit lies a story of grit,{" "}
          <br className="hidden md:block" /> transformation, and unshakable
          determination
        </h1>

        <div className="flex flex-wrap font-montserrat justify-center gap-8 md:gap-16 mb-12">
          {[
            [world, "Worldwide Stories"],
            [sparks, "Stunning Personalities"],
            [verified, "Unique Products"],
          ].map(([icon, text]) => (
            <div key={text} className="flex items-center gap-2">
              <img src={icon} alt={text} className="w-5 h-5" />
              <span className="text-sm font-bold text-gray-700">{text}</span>
            </div>
          ))}
        </div>

  <div className="flex justify-center py-6 px-4">
  <div className="relative flex items-center w-full max-w-[460px] bg-gray-50/50 rounded-xl p-1">
    {/* Sliding Background */}
    <div
      className="absolute top-1 bottom-1 transition-all duration-300 border-2 border-pink-500 rounded-xl bg-white shadow-sm"
      style={{
        width: "50%",
        left: activeTab === "stories" ? "0%" : "50%",
      }}
    />

    {/* Stories Button */}
    <button
      onClick={() => setActiveTab("stories")}
      className={`relative z-10 flex-1 py-3 md:py-4 text-[11px] md:text-[13px] font-bold transition-colors ${
        activeTab === "stories" ? "text-gray-900" : "text-gray-400"
      }`}
    >
      Share your story
    </button>

    {/* Suits Button */}
    <button
      onClick={() => setActiveTab("suits")}
      className={`relative z-10 flex-1 py-3 md:py-4 text-[11px] md:text-[13px] font-bold transition-colors ${
        activeTab === "suits" ? "text-gray-900" : "text-gray-400"
      }`}
    >
      Order your unique suit
    </button>
  </div>
</div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-24">
        {activeTab === "stories" ? (
          <div className="space-y-16">
            <StoryItem
              name="Kelsey Ahronson"
              tagline="Choosing healthy lifestyle"
              poster={poster1}
              productImg={img1}
              productName="Custom Pink Figure Suit"
              subtext="Placement text, to place everywhere. Please change it later according to the context it is kept around."
            />
            <StoryItem
              name="Gissele Quezadq"
              tagline="Became a coach"
              poster={poster2}
              productImg={img2}
              productName="Custom Purple Bikini Suit"
              subtext="Placement text, to place everywhere. Please change it later according to the context it is kept around."

            />
            <StoryItem
              name="Sarah"
              tagline="Balancing motherhood"
              poster={poster3}
              productImg={img4}
              productName="Custom Green Wellness Suit"
              subtext="Placement text, to place everywhere. Please change it later according to the context it is kept around."

            />
          </div>
        ) : (
          <div>
            {/* MOBILE VIEW */}
            <div className="flex flex-col gap-6 md:hidden -mx-6">
              {gridAthletes.map((athlete) => (
                <div
                  key={athlete.id}
                  className="bg-[#FFF5F8] pb-8 flex flex-col gap-4"
                >
                  {/* Full Width Image */}
                  <div className="relative aspect-[4/5] w-full bg-gray-200">
                    <img
                      src={athlete.image}
                      className="w-full h-full object-cover"
                      alt={athlete.name}
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <img
                        src={playButton}
                        className="w-14 h-14 opacity-90"
                        alt="play"
                      />
                    </div>
                  </div>

                  {/* Navigation Controls */}
                  <div className="flex items-center justify-between px-6">
                    <button className="text-pink-400 text-xl">‹</button>
                    <div className="flex gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#E10174]"></span>
                      <span className="w-2 h-2 rounded-full bg-pink-200"></span>
                      <span className="w-2 h-2 rounded-full bg-pink-200"></span>
                    </div>
                    <button className="w-7 h-7 rounded-full bg-[#E10174] text-white flex items-center justify-center text-xs shadow-md">
                      ›
                    </button>
                  </div>

                  {/* Content Cards - kept with padding for readability */}
                  <div className="px-4 flex flex-col gap-3">
                    {/* Info Card */}
                    <div className="bg-white rounded-[35px] p-6 shadow-sm">
                      <h2 className="text-xl font-bold mb-4 border-b border-gray-50 pb-2">
                        Meet {athlete.name}
                      </h2>
                      <h4 className="font-semibold text-gray-700 text-[14px] mb-1">
                        {athlete.tagline}
                      </h4>
                      <p className="text-[12px] text-gray-400 mb-6 leading-relaxed">
                        Placement text, to place everywhere. Please change it
                        later according to context.
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 py-3 border-2 border-pink-100 rounded-xl text-[11px] font-bold flex items-center justify-center gap-2">
                          View suit{" "}
                          <img
                            src={athlete.image}
                            className="w-5 h-5 rounded-md object-cover"
                            alt=""
                          />
                        </button>
                        <button className="flex-1 py-3 border-2 border-pink-100 rounded-xl text-[11px] font-bold">
                          ♡ Wishlist suit
                        </button>
                      </div>
                    </div>

                    {/* Review Card */}
                    <div className="bg-white rounded-[30px] p-6 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-gray-400 block tracking-tight">
                            Review
                          </span>
                          <span className="text-yellow-400 text-xs">★★★★★</span>
                        </div>
                        <img
                          src={quoteIcon}
                          className="w-5 h-5 opacity-20"
                          alt=""
                        />
                      </div>
                      <p className="text-[12px] text-gray-500 italic leading-snug">
                        "{athlete.review}"
                      </p>
                    </div>

                    {/* Bottom Decorative Divider */}
                    <div className="w-16 h-1 bg-pink-200/50 rounded-full mx-auto mt-4" />
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP VIEW */}
            <div className="hidden md:grid grid-cols-4 gap-4">
              {gridAthletes.map((athlete) => (
                <div
                  key={athlete.id}
                  onClick={() => setSelectedAthlete(athlete)}
                  className="rounded-xl overflow-hidden aspect-square relative group bg-gray-100 cursor-pointer"
                >
                  <img
                    src={athlete.image}
                    className="w-full h-full object-cover"
                    alt="Athlete"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all" />
                </div>
              ))}
            </div>

            <div className="flex justify-center my-12">
              <button className="px-6 py-2 border-2 border-[#E10174] rounded-md text-sm font-medium">
                Load more
              </button>
            </div>

            <div className="relative py-40 rounded-full overflow-hidden text-center">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] opacity-80 z-0"
                style={{
                  background: `radial-gradient(circle, rgba(249, 168, 212, 0.5) 0%, transparent 70%)`,
                  filter: "blur(10px)",
                }}
              />
              <h2 className="relative z-10 text-2xl md:text-3xl font-semibold mb-3">
                We're opening the spotlight to you, <br /> our incredible
                athletes.
              </h2>
              <p className="relative z-10 text-gray-500 text-xs mb-8 uppercase tracking-widest">
                Tell us:
              </p>
              <div className="relative z-10 max-w-xl mx-auto bg-white/85 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-pink-50 text-left">
                <img
                  src={quoteIcon}
                  className="absolute top-6 right-8 w-6 h-6"
                  alt=""
                />
                <div className="space-y-6">
                  {[
                    "What was going through your mind during prep?",
                    "How did stepping on stage make you feel?",
                    "What’s one moment that changed everything?",
                  ].map((q, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <img src={pinkmedal} className="w-4 h-5 mt-1" alt="" />
                      <p className="text-gray-700 text-sm">{q}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3 border-2 border-[#E10174] rounded-lg text-sm font-semibold">
                  Share your story
                </button>
              </div>
            </div>

            <div className="mt-12 bg-[#FDF2F8] rounded-3xl flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">
                  Get Ready for your next <br /> Competition
                </h3>
                <p className="text-gray-500 text-xs mb-6 max-w-xs">
                  Are you ready to shine on stage? Step into our world of
                  professional design.
                </p>
                <button className="bg-[#D81B60] text-white px-6 py-3 rounded-full text-sm font-semibold">
                  Book Free Consultation
                </button>
              </div>
              <div className="flex-1 flex justify-end">
                <img src={consultation} className="w-full max-w-sm" alt="" />
              </div>
            </div>
          </div>
        )}
      </section>

{selectedAthlete && (
  <div className="hidden md:flex fixed inset-0 z-[100] items-center justify-center p-4">
    <div
      className="absolute inset-0 bg-black/40 backdrop-blur-sm"
      onClick={() => setSelectedAthlete(null)}
    />
    
    {/* Main Container */}
    <div className="relative bg-[#FFF5F8] p-5 rounded-[45px] shadow-2xl w-full max-w-4xl flex gap-5 animate-in fade-in zoom-in duration-300">
      
      {/* Left Column: Media & Navigation */}
      <div className="w-[45%] flex flex-col gap-4">
        <div className="relative rounded-[35px] overflow-hidden aspect-[4/5] bg-gray-200">
          <img
            src={selectedAthlete.image}
            className="w-full h-full object-cover"
            alt={selectedAthlete.name}
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img src={playButton} className="w-16 h-16 drop-shadow-lg" alt="play" />
          </div>
        </div>

        {/* Navigation Dots & Arrows */}
        <div className="flex items-center justify-between px-2">
          <button className="w-9 h-9 rounded-full bg-pink-100 flex items-center justify-center text-pink-400 hover:bg-pink-200 transition-colors">
            ‹
          </button>
          <div className="flex gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E10174]"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-pink-200"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-pink-200"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-pink-200"></span>
          </div>
          <button className="w-9 h-9 rounded-full bg-[#E10174] text-white flex items-center justify-center hover:bg-pink-600 transition-colors">
            ›
          </button>
        </div>
      </div>

      {/* Right Column: Info & Review */}
      <div className="w-[55%] flex flex-col gap-4">
        {/* Profile Card */}
        <div className="bg-white rounded-[40px] p-10 flex-grow flex flex-col shadow-sm">
          <div className="flex-grow">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b border-gray-50 pb-4">
              Meet {selectedAthlete.name}
            </h2>

            <div className="mb-8">
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                {selectedAthlete.tagline}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Placement text, to place everywhere. Please change it later 
                according to the context it is kept around.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-[1.5] py-4 px-4 border-2 border-pink-500/30 rounded-2xl text-[12px] font-black uppercase tracking-tight text-gray-700 flex items-center justify-center gap-3 hover:bg-pink-50 transition-all">
              View suit
              <img
                src={selectedAthlete.image}
                className="w-8 h-8 rounded-lg object-cover border border-pink-100"
                alt="suit"
              />
            </button>
            <button className="flex-1 py-4 px-4 border-2 border-pink-500/30 rounded-2xl text-[12px] font-black uppercase tracking-tight text-gray-700 flex items-center justify-center gap-2 hover:bg-pink-50 transition-all">
              <span className="text-pink-500 text-lg">♡</span> Wishlist suit
            </button>
          </div>
        </div>

        {/* Review Card */}
        <div className="bg-white rounded-[35px] p-8 relative shadow-sm">
          <div className="flex justify-between items-center mb-3">
            <div className="flex flex-col">
              <span className="text-[11px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                Review
              </span>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-sm">★</span>
                ))}
              </div>
            </div>
            <span className="text-4xl text-gray-100 font-serif leading-none h-6">99</span>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed italic pr-4">
            "{selectedAthlete.review || "Good words about the company and assisting them to achieve whatever."}"
          </p>
        </div>
      </div>

      {/* Close Button */}
      <button
        onClick={() => setSelectedAthlete(null)}
        className="absolute -top-4 -right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-400 hover:text-pink-500 transition-all text-2xl"
      >
        &times;
      </button>
    </div>
  </div>
)}
    </div>
  );
}

function StoryItem({ name, tagline, poster, productImg, productName,subtext }) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 max-w-4xl mx-auto">
      <div className="w-full lg:w-1/2 relative rounded-[40px] overflow-hidden shadow-2xl aspect-[3/5]">
        <img src={productImg} className="w-full h-full object-cover" alt="" />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={playButton} className="w-16 h-16" alt="play" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-6 text-left">
        <div>
          <h3 className="text-2xl font-extrabold">Meet {name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <img src={medal} alt="" className="w-4 h-4" />
            <p className="text-[12px] text-gray-500 font-bold">
              IFBB 2024, Florida Winner
            </p>
          </div>
        </div>
        <div className="bg-white border p-6 rounded-3xl relative">
          <h4 className="font-bold mb-2">{tagline}</h4>
          <p className="text-xs text-gray-400">
            {subtext}
          </p>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border">
          <div className="flex items-center gap-4">
            <img
              src={poster}
              className="w-12 h-12 rounded-lg object-cover"
              alt=""
            />
            <div>
              <p className="text-xs font-bold">{productName}</p>
              <Link to="/items" className="relative">
               <button className="text-[10px] underline">View Product</button>
              </Link>
            </div>
          </div>
          <span className="text-gray-400">›</span>
        </div>
      </div>
    </div>
  );
}
