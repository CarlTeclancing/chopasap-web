import React, { useState } from "react";
import { User, Mail, Phone, Heart } from "lucide-react";
import { COLORS } from "../constants/constants";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-h-screen pb-8 md:pb-16 px-4 relative"
      // style={{ backgroundColor: COLORS.red }}
    >
      <div className="img-container w-screen z-0">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1260&h=750&fit=crop"
          alt="Contact Us"
          className="w-full h-48 md:h-72 object-cover z-0 left-0 shadow-lg absolute"
        />
      </div>
      <div className="max-w-5xl mx-auto z-10 relative pt-32 md:pt-48">
        {/* White content card */}
        <div
          className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8"
          style={{
            border: `4px solid ${COLORS.red}`,
          }}
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-3">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 animate-fade-up">
              Email Us
            </h1>
            <div className="relative animate-fade-up-delay-1">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-yellow-400 flex items-center justify-center border-4 border-yellow-500 shadow-lg rotate-12">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-gray-900 fill-gray-900 -rotate-12" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name, Email, Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {/* Name Input */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
                  style={
                    { "--tw-ring-color": COLORS.red } as React.CSSProperties
                  }
                  required
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email Address"
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
                  style={
                    { "--tw-ring-color": COLORS.red } as React.CSSProperties
                  }
                  required
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone Number"
                  className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all"
                  style={
                    { "--tw-ring-color": COLORS.red } as React.CSSProperties
                  }
                  required
                />
              </div>
            </div>

            {/* Topic Dropdown */}
            <div className="relative">
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-6 py-3 bg-black text-white rounded-xl appearance-none cursor-pointer focus:outline-none focus:ring-2 transition-all"
                style={{ "--tw-ring-color": COLORS.red } as React.CSSProperties}
                required
              >
                <option value="">Select a topic</option>
                <option value="general">General Inquiry</option>
                <option value="support">Customer Support</option>
                <option value="vendor">Vendor Partnership</option>
                <option value="rider">Become a Rider</option>
                <option value="feedback">Feedback</option>
                <option value="complaint">Complaint</option>
              </select>
              <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-white text-sm font-semibold tracking-wider">
                  SELECT ▼
                </span>
              </div>
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type a message..."
                rows={5}
                className="w-full px-6 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none"
                style={{ "--tw-ring-color": COLORS.red } as React.CSSProperties}
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="px-8 py-3 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:opacity-90"
                style={{ backgroundColor: COLORS.red }}
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
