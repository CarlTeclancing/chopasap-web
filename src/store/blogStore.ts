import { create } from "zustand";

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  author: string;
  image: string;
  readTime: string;
  featured: boolean;
}

interface BlogStore {
  posts: BlogPost[];
  getPostById: (id: number) => BlogPost | undefined;
}

export const useBlogStore = create<BlogStore>((_, get) => ({
  posts: [
    {
      id: 1,
      title: "10 Million Orders: A Year of Shared Wins at ChopaSap",
      excerpt:
        "2025 was a phenomenal year! We reached 10 million orders, and it wouldn't have been possible without our amazing community of customers, vendors, and riders.",
      content: `
# 10 Million Orders: A Year of Shared Wins at ChopaSap

2025 was a phenomenal year! We reached **10 million orders**, and it wouldn't have been possible without our amazing community of customers, vendors, and riders.

## A Milestone Worth Celebrating

When we started ChopaSap, we had a simple vision: to make food and grocery delivery seamless, reliable, and accessible to everyone. Hitting 10 million orders is more than just a number—it's a testament to the trust you've placed in us.

## Thank You to Our Community

- **Customers**: Thank you for choosing ChopaSap for your everyday needs
- **Vendors**: Your dedication to quality keeps our standards high
- **Riders**: Your commitment to timely delivery makes everything possible

## Looking Ahead

As we step into 2026, we're more committed than ever to improving your experience. Expect:
- Faster delivery times
- More restaurant and vendor partnerships
- Enhanced app features
- Better customer support

Here's to many more millions together! 🎉
      `,
      category: "Stories",
      date: "Jan 15, 2026",
      author: "ChopaSap Team",
      image:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&h=500&fit=crop",
      readTime: "5 min read",
      featured: true,
    },
    {
      id: 2,
      title: "Vendors Processed ₦1.4 Billion on Our Biggest Weekend",
      excerpt:
        "Our Black Friday sale broke records with vendors processing over ₦1.4 billion in just 4 days. Here's how we made it happen.",
      content: `
# Vendors Processed ₦1.4 Billion on Our Biggest Weekend

Our Black Friday sale broke records with vendors processing over **₦1.4 billion** in just 4 days. Here's how we made it happen.

## Record-Breaking Numbers

The numbers speak for themselves:
- **₦1.4 billion** in total vendor revenue
- **500,000+** orders processed
- **95%** on-time delivery rate
- **2,000+** active vendors participating

## What Made It Successful

### 1. Preparation
We worked with vendors weeks in advance to ensure inventory, staffing, and logistics were ready for the surge.

### 2. Technology
Our platform scaled seamlessly, handling 10x normal traffic without any downtime.

### 3. Team Effort
From customer support to our delivery fleet, everyone went above and beyond.

## Vendor Testimonials

*"ChopaSap's Black Friday event was our biggest sales day ever. The platform handled everything smoothly!"* - Restaurant Owner, Lagos

*"We tripled our usual weekend sales. The support team was incredible."* - Grocery Vendor, Abuja

## What's Next

We're already planning even bigger events for 2026. Stay tuned!
      `,
      category: "Updates",
      date: "Jan 10, 2026",
      author: "Business Team",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&h=500&fit=crop",
      readTime: "4 min read",
      featured: false,
    },
    {
      id: 3,
      title: "ChopaSap Now in Abuja: Fresh Eats, Faster Delivery",
      excerpt:
        "We're excited to announce our expansion to Abuja! Experience the same delicious meals and grocery delivery you love, now in Nigeria's capital.",
      content: `
# ChopaSap Now in Abuja: Fresh Eats, Faster Delivery

We're excited to announce our expansion to **Abuja**! Experience the same delicious meals and grocery delivery you love, now in Nigeria's capital.

## Welcome to Abuja

After months of preparation, we're thrilled to bring ChopaSap to Abuja. Our capital city deserves the same seamless delivery experience Lagosians have been enjoying.

## What You Can Expect

### Wide Selection
- 200+ restaurants available at launch
- Fresh groceries from top supermarkets
- Pharmacy deliveries for your convenience

### Fast Delivery
Our average delivery time in Abuja is **30 minutes** during peak hours.

### Coverage Areas
We're serving:
- Maitama
- Wuse 2
- Asokoro
- Garki
- Gwarimpa
- Jabi
- And more!

## Launch Offers

To celebrate our Abuja launch:
- **50% off** your first 3 orders
- **Free delivery** for the first month
- Special welcome bonus for new users

Download the app and start ordering today!
      `,
      category: "News",
      date: "Jan 5, 2026",
      author: "Growth Team",
      image:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&h=500&fit=crop",
      readTime: "3 min read",
      featured: false,
    },
    {
      id: 4,
      title: "5 Tips to Make Your Orders Even Faster",
      excerpt:
        "Want to get your food and groceries even quicker? Here are our top 5 hacks to speed up delivery times.",
      content: `
# 5 Tips to Make Your Orders Even Faster

Want to get your food and groceries even quicker? Here are our top **5 hacks** to speed up delivery times.

## 1. Save Your Delivery Address

Adding your address to your profile saves precious minutes during checkout. Set it once and you're ready to order in seconds.

## 2. Order During Off-Peak Hours

Deliveries are fastest between 3 PM - 5 PM and after 9 PM. Avoid lunch (12-2 PM) and dinner (6-8 PM) rushes for quicker service.

## 3. Use the "Schedule Order" Feature

Planning ahead? Schedule your order 1-2 hours in advance. This gives restaurants more preparation time and ensures your food arrives exactly when you want it.

## 4. Keep Your Phone On

Our riders call when they can't find your location. Having your phone ready prevents delays and unnecessary waiting.

## 5. Provide Clear Landmarks

Include landmarks in your delivery instructions:
- "Blue gate next to the pharmacy"
- "Third floor, apartment 304"
- "Security will direct you"

Clear instructions = faster deliveries!

## Bonus Tip

Enable location services for real-time tracking and automatic address detection. This makes reordering even faster!

Try these tips on your next order and let us know how it goes!
      `,
      category: "Tips",
      date: "Jan 1, 2026",
      author: "Customer Success",
      image:
        "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&h=500&fit=crop",
      readTime: "6 min read",
      featured: false,
    },
    {
      id: 5,
      title: "Behind the Scenes: A Day in Our Logistics Hub",
      excerpt:
        "Ever wondered how we manage thousands of daily deliveries? Check out our operations center and meet the team.",
      content: `
# Behind the Scenes: A Day in Our Logistics Hub

Ever wondered how we manage thousands of daily deliveries? Check out our operations center and meet the team.

## 6:00 AM - The Day Begins

Our logistics hub comes alive before sunrise. The morning shift arrives to prep for the breakfast rush.

### Morning Briefing
- Review yesterday's performance metrics
- Check weather forecasts
- Assign zones to delivery teams
- Ensure all equipment is ready

## 9:00 AM - Peak Hours Start

The breakfast and brunch orders start flooding in. Our system automatically:
- Routes orders to the nearest riders
- Balances workload across the fleet
- Monitors delivery times in real-time

## 12:00 PM - Lunch Rush

This is our busiest period. On average, we process **1,000 orders per hour** during lunch.

### How We Handle It
- Dynamic rider allocation
- Priority queuing for time-sensitive orders
- Real-time support for riders facing issues

## 3:00 PM - Analytics Review

The team analyzes morning data:
- Successful delivery rate: 99.2%
- Average delivery time: 28 minutes
- Customer satisfaction score: 4.8/5

## 6:00 PM - Dinner Preparation

Another peak period begins. Riders are strategically positioned in high-demand areas before orders even come in.

## 11:00 PM - Night Shift

Our 24/7 operation continues with a smaller night crew handling late-night cravings and emergency grocery runs.

## The Team

Our logistics hub employs:
- **50 dispatchers** managing rider assignments
- **30 support staff** helping customers and riders
- **10 tech specialists** monitoring systems
- **5 managers** coordinating everything

**Thank you to our incredible logistics team for keeping ChopaSap running smoothly every single day!**
      `,
      category: "Stories",
      date: "Dec 28, 2025",
      author: "Operations",
      image:
        "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=800&h=500&fit=crop",
      readTime: "7 min read",
      featured: false,
    },
    {
      id: 6,
      title: "New Payment Methods: More Ways to Pay",
      excerpt:
        "We've added several new payment options to make checkout easier. Your wallet, your way.",
      content: `
# New Payment Methods: More Ways to Pay

We've added several new payment options to make checkout easier. **Your wallet, your way.**

## What's New

We're excited to announce support for:

### 1. Bank Transfer (USSD)
Pay directly from your bank account using USSD codes. No card needed!

### 2. Mobile Money
Now supporting:
- MTN Mobile Money
- Airtel Money
- 9mobile Wallet

### 3. Buy Now, Pay Later
Partner with Klarna and PayLater to split payments into installments.

### 4. Cryptocurrency
Accept Bitcoin, Ethereum, and USDT for the crypto enthusiasts.

### 5. ChopaSap Wallet
Load money into your ChopaSap wallet for instant checkout. Get **2% cashback** on wallet payments!

## Why We Did This

We know everyone has different payment preferences. Our goal is to make ordering as frictionless as possible, no matter how you prefer to pay.

## Security First

All payment methods are:
- PCI-DSS compliant
- End-to-end encrypted
- Verified by our banking partners
- Protected by fraud detection systems

## How to Update Your Payment Method

1. Open the ChopaSap app
2. Go to Settings > Payment Methods
3. Add your preferred option
4. Start ordering!

## Coming Soon

We're working on:
- Google Pay integration
- Apple Pay support
- More local payment options

**Have a payment method you'd like to see? Let us know in the app feedback section!**
      `,
      category: "Updates",
      date: "Dec 25, 2025",
      author: "Product Team",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&h=500&fit=crop",
      readTime: "2 min read",
      featured: false,
    },
  ],
  getPostById: (id: number) => {
    return get().posts.find((post) => post.id === id);
  },
}));
