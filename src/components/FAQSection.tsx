import { Stamp } from "lucide-react";
import React, { useState } from "react";
import { COLORS } from "../constants/constants";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQSection: React.FC = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<number>(0);

  const faqs: FAQItem[] = [
    {
      id: 0,
      question: "Why do we charge Service fee?",
      answer:
        "ChopaSap is a technology company that provides logistics services to both vendors and customers. Our services allow vendors to deliver their products seamlessly while providing customers with an easy platform to order meals, groceries, everyday essentials, and health products. Our platform curates a wide range of restaurants, markets, shops, and pharmacies in customers' city and helps them discover great products at unbeatable prices.",
    },
    {
      id: 1,
      question: "What is Surge fee?",
      answer:
        "Surge fees are applied during peak demand periods to ensure fair pricing and sustainable service delivery. This helps us manage delivery resources effectively and ensures that we can continue to serve our customers with quality service even during busy times.",
    },
    {
      id: 2,
      question: "Why do we charge surge fee?",
      answer:
        "We charge surge fees to balance supply and demand during high-traffic periods. This pricing model ensures that our delivery partners are fairly compensated, we can scale our operations efficiently, and we maintain service quality across the board.",
    },
    {
      id: 3,
      question: "How do I update my profile?",
      answer:
        "You can update your profile by going to your account settings. Click on your profile icon, select 'Edit Profile', and make the necessary changes to your personal information, address, payment methods, and preferences. All changes are saved automatically.",
    },
    {
      id: 4,
      question: "How do I delete a saved card?",
      answer:
        "To delete a saved card, navigate to your payment methods in account settings. Find the card you wish to remove and click the delete icon next to it. Confirm the deletion, and the card will be permanently removed from your account.",
    },
    {
      id: 5,
      question: "How do I fund / top up my ChopaSap wallet?",
      answer:
        "You can fund your ChopaSap wallet by going to the wallet section in your account. Select 'Add Money', choose your preferred payment method (debit card, bank transfer, or mobile wallet), enter the amount, and complete the transaction. Your wallet balance will update immediately.",
    },
  ];

  return (
    <div
      id="faqs"
      className="bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-3 sm:px-4 md:px-6 w-full absolute rounded-2xl sm:rounded-3xl shadow-xl scroll-mt-32"
      style={{
        border: `2px solid ${COLORS.brown}`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* FAQs Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900 mb-4 sm:mb-6 md:mb-8">
              FAQs.
            </h2>

            {/* FAQ Questions */}
            <div className="space-y-2 sm:space-y-3 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-y-auto pr-2">
              {faqs.map((faq) => (
                <button
                  key={faq.id}
                  onClick={() => setSelectedFAQ(faq.id)}
                  className={`w-full text-left px-3 sm:px-4 md:px-6 py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl transition-all duration-200 ${
                    selectedFAQ === faq.id
                      ? "bg-teal-50 border-2 border-teal-700"
                      : "bg-gray-50 border-2 border-gray-200 hover:border-teal-200"
                  }`}
                >
                  <h3
                    className={`text-sm sm:text-base md:text-lg lg:text-xl font-semibold transition-colors ${
                      selectedFAQ === faq.id ? "text-teal-900" : "text-teal-800"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </button>
              ))}
            </div>
          </div>

          {/* Answer Column */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-teal-900 mb-4 sm:mb-6 md:mb-8">
              Ans.
            </h2>

            {/* Answer Box */}
            <div className="bg-yellow-400 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] overflow-y-auto rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 flex items-start">
              <div className="space-y-3 sm:space-y-4">
                {/* Gear Icon */}
                <Stamp className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />

                {/* Answer Text */}
                <p className="text-sm sm:text-base md:text-lg text-gray-900 leading-relaxed font-medium">
                  {faqs[selectedFAQ].answer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
