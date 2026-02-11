import React from "react";
import {
  Apple,
  MapPin,
  Star,
  Clock,
  Gift,
  Heart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  UtensilsCrossed,
  ShoppingBag,
  Plus,
  Users,
  ShoppingCart,
  BookOpen,
} from "lucide-react";
import { COLORS, APP_STORE_LINKS } from "../constants/constants";
import WaveDivider from "../components/WaveDivider";
import phones from "../assets/phones.png";
import slide1 from "../assets/slide1.svg";
import slide2 from "../assets/slide2.svg";
import slide3 from "../assets/slide3.svg";
import slide4 from "../assets/slide4.svg";
import slide5 from "../assets/slide5.svg";
import TornDivider from "../components/TornDivider";
import RestaurantMap from "../components/RestaurantMap";

const backgroundVideo = "https://www.pexels.com/download/video/6613037/";

const welcomeTexts = [
  "As-tu Mange?",
  "Have you eaten?",
  "¿Has comido?",
  "你吃了吗？",
];

const slides = [
  {
    id: 1,
    image: slide1,
    title: "Find Your Favorite Food",
    description: "Discover restaurants near you",
    icon: MapPin,
    bgColor: "#FFFFFF",
    textColor: "#000000",
    navBg: "#1F2937",
    navActiveBg: "#DC2626",
    accentColor: "#FDB913",
  },
  {
    id: 2,
    image: slide2,
    title: "Order With Ease",
    description: "Simple and fast ordering process",
    icon: Star,
    bgColor: "#FEF3C7",
    textColor: "#1F2937",
    navBg: "#92400E",
    navActiveBg: "#F59E0B",
    accentColor: "#FFFFFF",
  },
  {
    id: 3,
    image: slide3,
    title: "Quick Delivery",
    description: "Get your food delivered in minutes",
    icon: Clock,
    bgColor: "#DBEAFE",
    textColor: "#001F3F",
    navBg: "#003366",
    navActiveBg: "#0EA5E9",
    accentColor: "#FFFFFF",
  },
  {
    id: 4,
    image: slide4,
    title: "Great Offers",
    description: "Exclusive deals and discounts",
    icon: Gift,
    bgColor: "#F3E8FF",
    textColor: "#581C87",
    navBg: "#6B21A8",
    navActiveBg: "#A855F7",
    accentColor: "#FCD34D",
  },
  {
    id: 5,
    image: slide5,
    title: "Save Your Favorites",
    description: "Quick access to your preferred meals",
    icon: Heart,
    bgColor: "#FCE7F3",
    textColor: "#831843",
    navBg: "#9D174D",
    navActiveBg: "#EC4899",
    accentColor: "#FDE047",
  },
];

const badges = [
  {
    id: 1,
    text: "Seamless experience for customers and vendors",
    icon: Users,
    bgColor: "#1F2937",
  },
  {
    id: 2,
    text: "Quick and easy onboarding",
    icon: Sparkles,
    bgColor: "#1F2937",
  },
  {
    id: 3,
    text: "Quality meal choices",
    icon: UtensilsCrossed,
    bgColor: "#1F2937",
  },
  {
    id: 4,
    text: "Fresh market picks",
    icon: ShoppingBag,
    bgColor: "#1F2937",
  },
  {
    id: 5,
    text: "Essential healthcare supplies",
    icon: Plus,
    bgColor: "#1F2937",
  },
];

const Home = () => {
  const [currentTextIndex, setCurrentTextIndex] = React.useState(0);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [progress, setProgress] = React.useState(100);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex(
          (prevIndex) => (prevIndex + 1) % welcomeTexts.length,
        );
        setIsAnimating(false);
      }, 300); // Half of animation duration
    }, 3000); // Change text every 3 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-play slider with countdown progress
  React.useEffect(() => {
    const duration = 4000; // 4 seconds per slide
    const interval = 50; // Update every 50ms
    let elapsed = 0;

    const timer = setInterval(() => {
      elapsed += interval;
      const timeRemaining = duration - elapsed;
      const newProgress = (timeRemaining / duration) * 100;
      setProgress(newProgress);

      if (elapsed >= duration) {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        elapsed = 0;
        setProgress(100);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(100);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(100);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(100);
  };

  // Circular Timer SVG Component
  const CircularProgress = ({
    progress,
    isActive,
    accentColor = "#FDB913",
  }: {
    progress: number;
    isActive: boolean;
    accentColor?: string;
  }) => {
    const radius = 28;
    const strokeWidth = 3;
    const normalizedRadius = radius - strokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    if (!isActive) return null;

    return (
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <svg width="76" height="76" viewBox="0 0 76 76" className="-rotate-90">
          {/* Background track */}
          <circle
            stroke="rgba(255, 255, 255, 0.2)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={38}
            cy={38}
          />
          {/* Countdown progress arc */}
          <circle
            stroke={accentColor}
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={38}
            cy={38}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset,
              transition: "stroke-dashoffset 50ms linear",
            }}
          />
        </svg>
      </div>
    );
  };

  return (
    <div>
      <div
        className="video-background-div relative w-full overflow-hidden flex items-center justify-center "
        style={{
          height: "110vh",
          minHeight: "600px",
        }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40"></div>
        <div className="text-container relative z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-7xl font-bold text-center mb-6 animate-fade-up text-white drop-shadow-2xl">
            Welcome to ChopaSap
          </h1>
          <h2
            className={`text-3xl md:text-4xl font-semibold text-center transition-all duration-300 text-white drop-shadow-lg animate-fade-up-delay-1 ${
              isAnimating
                ? "opacity-0 transform -translate-y-2"
                : "opacity-100 transform translate-y-0"
            }`}
          >
            {welcomeTexts[currentTextIndex]}
          </h2>
          <div
            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center items-center animate-fade-up-delay-2"
            style={{ opacity: 0 }}
          >
            <a
              href={APP_STORE_LINKS.android}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="flex items-center gap-2 px-7 py-4 rounded-lg text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-2xl w-full sm:w-auto"
                style={{ backgroundColor: COLORS.red }}
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </button>
            </a>
            <a
              href={APP_STORE_LINKS.ios}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                className="flex items-center gap-2 px-7 py-4 rounded-lg text-white font-semibold hover:opacity-90 hover:scale-105 transition-all shadow-2xl w-full sm:w-auto"
                style={{ backgroundColor: COLORS.red }}
              >
                <Apple className="w-6 h-6" />
                App Store
              </button>
            </a>
          </div>
        </div>
        <WaveDivider color="#ffffff" className="absolute bottom-0" />
      </div>
      <div className="bg-white flex flex-col w-full items-center justify-center  py-16">
        <div className="flex flex-col w-full items-center justify-center gap-3 md:gap-6 py-16">
          <span className="text-4xl md:text-5xl font-bold">
            Your Command Center
          </span>
          <span className="text-2xl ">Unlock every feature</span>
        </div>
        <div className="container">
          <img
            src={phones}
            alt="app preview"
            className="w-full h-auto rounded-lg "
          />
        </div>
      </div>

      <div
        className="relative py-20  px-4 mt-20"
        style={{ backgroundColor: COLORS.red }}
      >
        <div className="max-w-7xl mx-auto -translate-y-1/2 md:-translate-y-1/3 ">
          {/* Slider Container */}
          <div className="relative">
            {/* Image Container */}
            <div className="relative h-[280px] sm:h-[350px] md:h-[500px] lg:h-[600px]">
              <div
                className="relative w-full h-full overflow-visible rounded-2xl shadow-2xl flex flex-col items-center justify-between p-3 sm:p-6 md:p-8 pb-28 sm:pb-8 md:pb-8 transition-all duration-500"
                style={{ backgroundColor: slides[currentSlide].bgColor }}
              >
                {/* Text at the top */}
                <div className="text-center z-10">
                  <h2
                    className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 transition-all duration-500"
                    style={{ color: slides[currentSlide].textColor }}
                  >
                    {slides[currentSlide].title}
                  </h2>
                  <p
                    className="text-xs sm:text-base md:text-xl lg:text-2xl transition-all duration-500"
                    style={{
                      color: slides[currentSlide].textColor,
                      opacity: 0.8,
                    }}
                  >
                    {slides[currentSlide].description}
                  </p>
                </div>

                {/* Image - Centered */}
                <div className="flex-1 flex items-center justify-center w-full">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`transition-all duration-700 ease-in-out transform h-full flex items-center justify-center ${
                        index === currentSlide
                          ? "opacity-100 translate-x-0 scale-100"
                          : index < currentSlide
                            ? "opacity-0 -translate-x-full scale-95"
                            : "opacity-0 translate-x-full scale-95"
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-full w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>

                {/* Navigation Bar - Absolutely positioned at bottom */}
                <div className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-0 right-0 flex items-center justify-between px-2 sm:px-6 md:px-12">
                  {/* Circular Numbered Navigation */}
                  <div className="flex gap-1.5 sm:gap-3">
                    {slides.map((slide, index) => {
                      const Icon = slide.icon;
                      return (
                        <button
                          key={index}
                          onClick={() => goToSlide(index)}
                          className="relative"
                          aria-label={`Go to slide ${index + 1}`}
                        >
                          <CircularProgress
                            progress={progress}
                            isActive={index === currentSlide}
                            accentColor={slides[currentSlide].accentColor}
                          />
                          <div
                            className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center text-[10px] sm:text-sm md:text-lg font-bold transition-all duration-300 cursor-pointer"
                            style={{
                              backgroundColor:
                                index === currentSlide
                                  ? slides[currentSlide].navActiveBg
                                  : slides[currentSlide].navBg,
                              color:
                                index === currentSlide
                                  ? slides[currentSlide].accentColor
                                  : "#FFFFFF",
                              transform:
                                index === currentSlide
                                  ? "scale(1.1)"
                                  : "scale(1)",
                              boxShadow:
                                index === currentSlide
                                  ? "0 10px 25px -5px rgba(0, 0, 0, 0.3)"
                                  : "none",
                            }}
                          >
                            {index === currentSlide ? (
                              <Icon className="w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                            ) : (
                              <span>{String(index + 1).padStart(2, "0")}</span>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Arrow Navigation */}
                  <div className="flex gap-1.5 sm:gap-3">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                      style={{ backgroundColor: slides[currentSlide].navBg }}
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full text-white flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
                      style={{ backgroundColor: slides[currentSlide].navBg }}
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" py-0 md:py-0 px-4">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Side - Main Heading */}
            <div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                ChopaSap has you covered{" "}
                <span className="inline-block">🍜🥘</span>
              </h2>
            </div>

            {/* Right Side - Description */}
            <div>
              <p className="text-lg sm:text-xl md:text-2xl text-white/95 leading-relaxed">
                What do you need? A quick fix on a busy day? Last-minute dinner
                backup? Supplies for the week? Download ChopaSap and let's
                deliver happiness to your doorstep in minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Infinite Scroll Badges */}
        <div className="overflow-hidden pt-6 sm:pt-8 md:py-10 relative">
          <div className="flex animate-scroll">
            {/* First set of badges */}
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={`badge-1-${badge.id}`}
                  className="flex-shrink-0 mx-1.5 sm:mx-2 md:mx-3"
                >
                  <div
                    className="flex items-center gap-2 sm:gap-2.5 md:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-white whitespace-nowrap shadow-lg"
                    style={{ backgroundColor: badge.bgColor }}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      {badge.text}
                    </span>
                  </div>
                </div>
              );
            })}
            {/* Duplicate set for seamless scrolling */}
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={`badge-2-${badge.id}`}
                  className="flex-shrink-0 mx-1.5 sm:mx-2 md:mx-3"
                >
                  <div
                    className="flex items-center gap-2 sm:gap-2.5 md:gap-3 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full text-white whitespace-nowrap shadow-lg"
                    style={{ backgroundColor: badge.bgColor }}
                  >
                    <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm md:text-base font-medium">
                      {badge.text}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br />
        <TornDivider className="w-full left-0 bottom-0 mt-6  absolute  rotate-180 translate-y-1" />
      </div>

      {/* Map and Restaurants Section */}
      <div className="bg-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Map Section */}
            <div className="w-full h-[400px] md:h-[600px] z-10 rounded-2xl overflow-hidden shadow-xl">
              <RestaurantMap />
            </div>

            {/* Restaurants List */}
            <div className="flex flex-col">
              <div className="bg-blue-100 px-6 py-4 rounded-t-2xl border-b-2 border-blue-200">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Restaurants
                </h3>
              </div>

              <div className="bg-gray-50 rounded-b-2xl shadow-xl max-h-[400px] md:max-h-[500px] overflow-y-scroll overflow-hidden">
                {[
                  "Top Notch",
                  "Dovv - Simbock",
                  "Marco Fufu",
                  "Correct Chop",
                  "Milies Restaurant",
                  "Mama's Kitchen",
                ].map((restaurant, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-6 py-5 border-b border-gray-200 hover:bg-white transition-all duration-200 group"
                  >
                    <span className="text-base md:text-lg text-gray-800 font-medium">
                      {restaurant}
                    </span>
                    <button className="text-teal-600 hover:text-teal-700 transition-colors">
                      <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ChopaSap Has You Covered Section */}

      {/* Stories Section */}
      <div className="bg-gray-50 py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Stories Header */}
          <div className="flex items-center gap-3 mb-8 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
              Stories
            </h2>
            <BookOpen
              className="w-10 h-10 md:w-13 md:h-13 p-2   rounded-full flex items-center justify-center"
              style={{
                border: `2px solid ${COLORS.red}`,
                color: `${COLORS.brown}`,
              }}
            />
          </div>

          {/* Stories Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Story Card 1 */}
            <div className="bg-white rounded-3xl border-2 border-black overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-blue-200 p-8 md:p-12 h-48 md:h-64 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    1M Deliveries
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    A year of shared wins at ChopaSap
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-white">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase">
                  1 MILLION ORDERS: A YEAR OF SHARED WINS AT CHOPASAP.
                </h4>
                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                  1 million orders in 2025! What a year at ChopaSap!
                </p>
              </div>
            </div>

            {/* Story Card 2 */}
            <div className="bg-white rounded-3xl border-2 border-black overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-black p-8 md:p-12 h-48 md:h-64 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                    500M in 3 Days!
                  </h3>
                  <p className="text-base md:text-lg text-white">
                    Our Biggest Promo Yet
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-white">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase">
                  VENDORS PROCESSED FCFA500M ON CHOPASAP DURING THE BIG WEEKEND
                </h4>
                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                  What happens when you combine unbeatable deals, live
                  transparency and thousands of customers across Nigeria? Big
                  WIN!
                </p>
              </div>
            </div>

            {/* Story Card 3 */}
            <div className="bg-white rounded-3xl border-2 border-black overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="bg-blue-100 p-8 md:p-12 h-48 md:h-64 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    Abuja, Welcome ChopaSap!
                  </h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Fresh Meals and Groceries on the go
                  </p>
                </div>
              </div>
              <div className="p-6 md:p-8 bg-white">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3 uppercase">
                  ABUJA, WELCOME CHOPASAP!
                </h4>
                <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                  If Abuja is your city, we have good news! You can now order
                  delicious meals, fresh groceries, and meds on ChopaSap!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
