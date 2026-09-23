import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const refundSections = [
  {
    title: "1. Overview",
    paragraphs: [
      "Our objective is to handle genuine Order problems fairly and transparently.",
      "A refund may be provided where an Order has not been properly fulfilled, where an eligible payment error has occurred, or where another circumstance justifies a refund under this Policy or applicable law.",
      "A refund is not automatically available merely because a Customer changes their mind after food preparation has begun.",
    ],
  },
  {
    title: "2. Refund Eligibility",
    paragraphs: [
      "A Customer should report an Order problem as soon as reasonably possible after receiving the Order or becoming aware of the issue.",
      "Refund eligibility may depend on:",
    ],
    bullets: [
      "the nature of the problem;",
      "whether the issue relates to the Restaurant Partner, Delivery Partner, payment process, or platform;",
      "the stage of the Order;",
      "the amount affected; and",
      "whether sufficient information is available to verify the complaint.",
    ],
  },
  {
    title: "3. Eligible Refund Situations",
    paragraphs: ["Subject to verification, a refund or partial refund may be considered where:"],
    bullets: [
      "an Order was paid for but was not delivered;",
      "significant items are missing;",
      "materially incorrect items were delivered;",
      "the Customer received an item that is materially different from what was ordered;",
      "an Order was cancelled by the platform or Restaurant Partner after payment;",
      "a payment was duplicated;",
      "a technical or billing error resulted in an incorrect charge;",
      "a material delivery problem resulted in the Order not being reasonably usable; or",
      "another circumstance gives rise to a refund or remedy under applicable law.",
    ],
  },
  {
    title: "4. Missing, Incorrect or Damaged Items",
    paragraphs: [
      "Customers should contact ChopaSap promptly when an Order contains missing, incorrect, damaged, or materially defective items.",
      "Depending on the circumstances, we may offer:",
    ],
    bullets: [
      "a refund for the affected item;",
      "a partial refund;",
      "replacement or redelivery where available;",
      "account credit; or",
      "another appropriate remedy.",
    ],
    afterBullets: [
      "The remedy may depend on whether the issue can be verified and whether the affected item or Order can reasonably be replaced.",
    ],
  },
  {
    title: "5. Food Quality Complaints",
    paragraphs: [
      "Customers may report serious or material concerns relating to the condition of food received.",
      "Complaints may include concerns such as:",
    ],
    bullets: [
      "food arriving in an unusable condition;",
      "substantial damage to packaging;",
      "significant discrepancies between the Order and the food received; or",
      "other material problems affecting the Order.",
    ],
    afterBullets: [
      "Minor differences in taste, appearance, portion perception, or personal preference do not automatically create a right to a refund.",
      "Food-quality complaints may be investigated with the relevant Restaurant Partner.",
    ],
  },
  {
    title: "6. Food Safety and Allergies",
    paragraphs: [
      "Customers with serious allergies or dietary restrictions should review available product information and contact the relevant Restaurant Partner before ordering.",
      "Where a Customer experiences a suspected food-safety issue or allergic reaction, the Customer should seek appropriate medical assistance where necessary and notify ChopaSap as soon as possible so that the matter can be investigated.",
      "Where appropriate, ChopaSap Logistics Inc. may share relevant information with the Restaurant Partner or competent authorities in accordance with applicable law.",
    ],
  },
  {
    title: "7. Refunds for Cancelled Orders",
    paragraphs: [
      "Where an Order is cancelled before payment is completed, no refund may be necessary.",
      "Where payment has already been made, the refund outcome will depend on the circumstances of the cancellation and the stage of the Order.",
      "An Order cancelled before restaurant acceptance may generally be eligible for a refund.",
      "An Order cancelled after acceptance or preparation has begun may be subject to reduced or no refund, except where otherwise required by applicable law or where the cancellation results from a failure attributable to the platform or Restaurant Partner.",
    ],
  },
  {
    title: "8. Promotional Credits and Discounts",
    paragraphs: [
      "Where an Order was paid partially using promotional credit, a refund may be allocated between the original payment method and applicable account credit depending on the circumstances.",
      "Promotional discounts that have already been consumed may not necessarily be reinstated.",
    ],
  },
  {
    title: "9. Payment Errors and Duplicate Charges",
    paragraphs: [
      "If you believe you have been charged more than once for the same Order or have been charged an incorrect amount, contact ChopaSap promptly.",
      "After verification, any confirmed duplicate or erroneous charge may be refunded or otherwise corrected.",
    ],
  },
  {
    title: "10. Refund Request Procedure",
    paragraphs: [
      "A refund request should contain sufficient information to identify the Order.",
      "You may be asked to provide:",
    ],
    bullets: [
      "your name;",
      "account email or telephone number;",
      "Order number;",
      "date and time of the Order;",
      "the restaurant concerned;",
      "details of the problem; and",
      "photographs or other supporting evidence where relevant.",
    ],
    afterBullets: [
      "Do not send passwords, PINs, one-time authentication codes, or full card numbers.",
    ],
  },
  {
    title: "11. Refund Review",
    paragraphs: [
      "Refund requests may be reviewed using available Order information, restaurant records, delivery information, payment records, customer communications, photographs, and other relevant evidence.",
      "ChopaSap Logistics Inc. may contact the Customer, Restaurant Partner, or Delivery Partner where reasonably necessary to investigate the matter.",
    ],
  },
  {
    title: "12. Refund Method",
    paragraphs: [
      "Where a refund is approved, it will generally be returned through the original payment method where reasonably possible.",
      "Where payment was made through a third-party provider, the time required for the refund to appear may depend on the bank, Mobile Money operator, payment provider, or other financial institution.",
      "Where reasonably appropriate, ChopaSap Logistics Inc. may provide an account credit or another remedy where permitted and agreed.",
    ],
  },
  {
    title: "13. Non-Refundable Situations",
    paragraphs: ["Except where otherwise required by applicable law, a refund may not be available where:"],
    bullets: [
      "the Customer simply changes their mind after the Order has been accepted or prepared;",
      "the Customer provided an incorrect Delivery Address;",
      "the Customer was unavailable to receive the Order despite reasonable delivery attempts;",
      "the Customer refused delivery without a valid reason;",
      "the complaint concerns a minor difference that does not materially affect the Order;",
      "the request is unsupported by sufficient information where verification is reasonably necessary; or",
      "the Customer misused the refund process or submitted a fraudulent claim.",
    ],
  },
  {
    title: "14. Fraudulent or Abusive Refund Claims",
    paragraphs: [
      "ChopaSap Logistics Inc. may investigate repeated or suspicious refund requests.",
      "Where there is reasonable evidence of fraud, abuse, false claims, or systematic misuse of refund procedures, access to certain platform benefits or the Customer account may be restricted in accordance with the Terms & Conditions and applicable law.",
    ],
  },
  {
    title: "15. Statutory Consumer Rights",
    paragraphs: [
      "Nothing in this Refund Policy is intended to remove or restrict mandatory rights or remedies available to consumers under applicable law.",
      "Where applicable law requires a refund, replacement, compensation, or other remedy, the relevant legal requirement will apply.",
    ],
  },
  {
    title: "16. Changes to This Refund Policy",
    paragraphs: [
      "ChopaSap Logistics Inc. may update this Refund Policy when necessary to reflect changes to the Services, payment arrangements, operational procedures, or applicable law.",
      "The revised version will display its effective date.",
    ],
  },
  {
    title: "17. Contact",
    contact: [
      ["Company", "[COMPANY NAME]"],
      ["Platform", "[PLATFORM NAME]"],
      ["Website", "[INSERT WEBSITE URL]"],
      ["Email", "[INSERT SUPPORT EMAIL]"],
      ["Phone", "[INSERT PHONE NUMBER]"],
      ["Address", "[INSERT REGISTERED BUSINESS ADDRESS]"],
    ],
  },
];

const RefundPolicy = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <main className="min-h-screen bg-[#fffaf2] px-4 pb-20 pt-6 md:px-8 md:pt-8">
      <button
        type="button"
        onClick={handleGoBack}
        className="mb-6 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
      >
        <ArrowLeft className="h-4 w-4" />
        Go back
      </button>

      <article className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <header className="bg-black px-6 py-12 text-white md:px-12 md:py-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#f4c27a]">
            Legal
          </p>
          <h1 className="text-4xl font-black tracking-tight md:text-6xl">
            Refund Policy
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.12em] text-neutral-300">
            Effective date: [INSERT DATE]
          </p>
        </header>

        <div className="px-6 py-10 md:px-12 md:py-14">
          <div className="mb-12 border-b border-neutral-200 pb-10 text-lg leading-8 text-neutral-700">
            <p>
              This Refund Policy explains the circumstances in which a Customer
              may be eligible for a refund or other adjustment relating to an
              Order placed through <strong>[PLATFORM NAME]</strong>.
            </p>
            <p className="mt-5">
              Because food Orders may involve preparation shortly after an Order
              is accepted, refund eligibility may depend on the nature and stage
              of the Order.
            </p>
            <p className="mt-5">
              This Policy should be read together with the Terms &amp; Conditions
              and Cancellation Policy.
            </p>
          </div>

          <div className="space-y-10">
            {refundSections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-2xl font-bold text-neutral-950 md:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4 leading-7 text-neutral-700">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.bullets && (
                    <ul className="list-disc space-y-2 pl-6">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.afterBullets?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.contact && (
                    <dl className="grid gap-4 rounded-xl bg-[#fffaf2] p-5 md:grid-cols-2 md:p-7">
                      {section.contact.map(([label, value]) => (
                        <div key={label}>
                          <dt className="text-sm font-bold uppercase tracking-[0.12em] text-neutral-500">
                            {label}
                          </dt>
                          <dd className="mt-1 text-neutral-950">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  )}
                </div>
              </section>
            ))}
          </div>
        </div>
      </article>
    </main>
  );
};

export default RefundPolicy;
