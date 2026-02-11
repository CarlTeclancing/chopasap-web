import { APP_STORE_LINKS } from "../constants/constants";
import {
  UtensilsCrossed,
  ShoppingBag,
  Pill,
  Package,
  Clock,
  MapPin,
  Shield,
  Sparkles,
  CheckCircle2,
  Apple,
} from "lucide-react";
import phonesImage from "../assets/phones.png";
import ZigzagDivider from "../components/ZigzagDivider";
import RoughEdgeDivider from "../components/RoughEdgeDivider";
import TornDivider from "../components/TornDivider";
import SlantedDivider from "../components/SlantedDivider";
import HowItWorksImg from "../assets/chop-asap-how-it-works.jpeg"

const Services = () => {
  const services = [
    {
      icon: UtensilsCrossed,
      title: "Food Delivery",
      description:
        "Order from your favorite restaurants and get fresh, hot meals delivered to your doorstep in minutes.",
      color: "#FF6B6B",
    },
    {
      icon: ShoppingBag,
      title: "Grocery Delivery",
      description:
        "Shop for fresh groceries, household essentials, and more. We'll deliver everything you need.",
      color: "#4ECDC4",
    },
    {
      icon: Pill,
      title: "Pharmacy",
      description:
        "Get your medications and health products delivered quickly and safely from trusted pharmacies.",
      color: "#95E1D3",
    },
    {
      icon: Package,
      title: "Package Delivery",
      description:
        "Send and receive packages within the city with our reliable same-day delivery service.",
      color: "#F38181",
    },
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Average delivery time of 30 minutes or less",
    },
    {
      icon: MapPin,
      title: "Real-Time Tracking",
      description: "Track your order from pickup to doorstep",
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Contactless delivery and secure payments",
    },
    {
      icon: Sparkles,
      title: "Quality Assured",
      description: "Fresh products and top-rated vendors",
    },
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Choose Your Service",
      description: "Select from food, groceries, pharmacy, or package delivery",
    },
    {
      step: "02",
      title: "Place Your Order",
      description: "Browse vendors, add items to cart, and checkout securely",
    },
    {
      step: "03",
      title: "Track in Real-Time",
      description: "Watch your order journey from vendor to your door",
    },
    {
      step: "04",
      title: "Enjoy!",
      description: "Receive your order fresh and ready to enjoy",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-black py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br  from-white via-transparent to-white"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight animate-fade-in">
              Our Services
            </h1>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Everything you need, delivered to your door.{" "}
              <span className="text-yellow-400">
                Fast, reliable, and convenient.
              </span>
            </p>
          </div>
        </div>
        {/* Animated circles */}
        <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-white rounded-full blur-3xl opacity-10 animate-pulse delay-1000"></div>
      </div>

      {/* Divider */}
      <ZigzagDivider color="#ffffff" className="-mt-1" />

      {/* Services Grid */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="text-center mb-20">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              What We Deliver
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 mt-4">
              Four Ways to Satisfy
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From food to groceries, pharmacy to packages - we've got you
              covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border-4 border-black rounded-3xl p-10 hover:bg-black transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-500"
                  style={{ backgroundColor: service.color }}
                >
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="relative text-3xl font-bold text-black group-hover:text-white mb-4 transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="relative text-gray-600 group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <RoughEdgeDivider color="#000000" className="transform translate-y-[0.5px]" />

      {/* How It Works - Black Section */}
      <div className="bg-black py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-sm font-bold text-white/60 uppercase tracking-widest">
              Simple Process
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 mt-4">
              How It Works
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Four simple steps to satisfaction
            </p>
          </div>

          <div className="relative">
            {/* Connecting Lines Container - Desktop Only */}
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-1 z-0">
              <div className="absolute inset-0 flex items-center justify-between px-[12.5%]">
                {/* Background line */}
                <div className="absolute left-0 right-0 h-1 bg-white/20"></div>
                {/* Animated progress line */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-yellow-400 via-white to-yellow-400 animate-flow-line"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {howItWorks.map((item, index) => (
                <div key={index} className="group text-center">
                  <div className="relative mb-8">
                    <div
                      className="w-24 h-24 rounded-full border-4 border-white flex items-center justify-center mx-auto text-white text-3xl font-bold group-hover:bg-white group-hover:text-black transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 bg-black"
                      style={{ animationDelay: `${index * 0.5}s` }}
                    >
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-white/70 group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <img src={HowItWorksImg} alt="" className="w-full max-w-screen"/>
      {/* Divider */}
      <TornDivider color="#ffffff" className="-mt-1" />

      {/* Features Section - White with Black accents */}
      <div className="bg-white py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 mt-4">
              The ChopaSap{" "}
              <span className="relative inline-block">
                Difference
                <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10"></span>
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to delivering excellence in every order
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group text-center hover:scale-110 transition-transform duration-300"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-28 h-28 rounded-full bg-black flex items-center justify-center group-hover:bg-yellow-400 transition-colors duration-300">
                    <feature.icon className="w-12 h-12 text-white group-hover:text-black transition-colors duration-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider */}
      <SlantedDivider color="#000000" className="-mt-2 translate-y-0.5" />

      {/* Download App Section - Black background */}
      <div className="bg-black py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-yellow-400 via-transparent to-transparent"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white order-2 lg:order-1">
              <span className="text-sm font-bold text-yellow-400 uppercase tracking-widest">
                Mobile App
              </span>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 mt-4 leading-tight">
                Order Faster with the ChopaSap App
              </h2>
              <p className="text-xl text-white/80 mb-10 leading-relaxed">
                Get access to exclusive deals, faster checkout, and real-time
                tracking on iOS and Android.
              </p>
              <ul className="space-y-5 mb-10">
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg font-medium">Order in seconds</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg font-medium">
                    Exclusive app-only deals
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg font-medium">
                    Live order tracking
                  </span>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-lg font-medium">
                    Save your favorites
                  </span>
                </li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={APP_STORE_LINKS.ios}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 border-2 border-white">
                    <Apple className="w-6 h-6" />
                    App Store
                  </button>
                </a>
                <a
                  href={APP_STORE_LINKS.android}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 border-2 border-white">
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
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={phonesImage}
                alt="ChopaSap Mobile App"
                className="w-full max-w-md h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}

      {/* CTA Section - Bold Black and Yellow */}
      <div className="bg-white py-24 md:py-32 relative overflow-hidden">
        <RoughEdgeDivider
          color={"#0000000"}
          flip={true}
          className="-mt-0.5 bg-transparent z-10  w-full top-0 absolute"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-white to-white"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="bg-black rounded-3xl p-12 md:p-16 shadow-2xl hover:scale-105 transition-transform duration-500">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of happy customers enjoying fast, reliable delivery
              across the city.
            </p>
            <button className="bg-yellow-400 text-black px-12 py-5 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-2xl border-4 border-yellow-400 hover:border-white">
              Order Now →
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes flow-line {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-flow-line {
          animation: flow-line 4s ease-in-out infinite;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Services;
