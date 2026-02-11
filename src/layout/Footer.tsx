import FAQSection from "../components/FAQSection";
import { COLORS, SOCIAL_LINKS } from "../constants/constants";
import logoSimplified from "../assets/logo-simplified.png";
import logo from "../assets/logo.png";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col gap-2 items-center">
      {/* FAQ Section */}
      <div className="container w-11/12 relative flex items-center justify-center mb-96">
        <FAQSection />
      </div>

      {/* Chowdeck-style Footer Section */}
      <section className="w-full text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <div className="grid gap-10 md:gap-8 md:grid-cols-[1.2fr_1fr_1fr_1fr] border-t border-neutral-800 pt-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full  p-2 flex items-center justify-center text-black font-black text-lg"
                  style={{
                    backgroundColor: `${COLORS.brown}`,
                  }}
                >
                  <img src={logoSimplified} />
                </div>
                <span className="text-2xl font-bold">ChopaSap</span>
              </div>
              <div className="w-65 h-24   flex items-center justify-center">
                <img src={logo} alt="logo" />
              </div>
            </div>

            <div className="space-y-4 border-l border-neutral-800 pl-6">
              <p className="text-sm tracking-[0.2em] text-neutral-500 font-semibold">
                COMPANY
              </p>
              <ul className="space-y-3 text-sm md:text-base text-neutral-200">
                <li>Customers</li>
                <li>Vendors</li>
                <li>Riders</li>
                <li>Storefront</li>
                <li>Documentation</li>
                <li>About</li>
                <li>Careers</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>

            <div className="space-y-4 border-l border-neutral-800 pl-6">
              <p className="text-sm tracking-[0.2em] text-neutral-500 font-semibold">
                CUISINES NEAR YOU
              </p>
              <ul className="space-y-3 text-sm md:text-base text-neutral-200">
                <li>Pasta near me</li>
                <li>Rice near me</li>
                <li>Fast food near me</li>
                <li>Asian food in Lagos</li>
                <li>African food in Lagos</li>
                <li>Breakfast menu in Lagos</li>
                <li>Fitfam stores in Lagos</li>
                <li>American food in Lagos</li>
                <li>Pastries in Lagos</li>
              </ul>
            </div>

            <div className="space-y-4 border-l border-neutral-800 pl-6">
              <p className="text-sm tracking-[0.2em] text-neutral-500 font-semibold">
                POPULAR
              </p>
              <ul className="space-y-3 text-sm md:text-base text-neutral-200">
                <li>Food delivery</li>
                <li>Surulere</li>
                <li>Ogudu</li>
                <li>Yaba</li>
                <li>Ikeja</li>
                <li>Lekki</li>
                <li>King Glab</li>
                <li>Korede Spaghetti</li>
                <li>Iyan Aladuke</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border border-neutral-800 rounded-xl overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-6 hover:bg-neutral-900 transition-colors"
              >
                <Twitter className="w-5 h-5 text-sky-400" />
                <span className="font-semibold">Twitter</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-6 hover:bg-neutral-900 transition-colors"
              >
                <Instagram className="w-5 h-5 text-pink-400" />
                <span className="font-semibold">Instagram</span>
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-6 hover:bg-neutral-900 transition-colors"
              >
                <Facebook className="w-5 h-5 text-violet-400" />
                <span className="font-semibold">Facebook</span>
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 py-6 hover:bg-neutral-900 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-orange-400" />
                <span className="font-semibold">LinkedIn</span>
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-neutral-500 mt-8">
            © All Rights Reserved. 2026, ChopaSap Logistics Inc.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
