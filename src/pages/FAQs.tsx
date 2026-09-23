import FAQSection from "../components/FAQSection";

const FAQs = () => {
  return (
    <main className="min-h-screen bg-[#fffaf2] px-4 pb-20 pt-32 md:px-8 md:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#8b4513]">
            Need help?
          </p>
          <h1 className="text-4xl font-black tracking-tight text-neutral-950 md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-600 md:text-lg">
            Find answers to common questions about ordering, payments, delivery,
            and your ChopaSap account.
          </p>
        </div>
        <FAQSection />
      </div>
    </main>
  );
};

export default FAQs;
