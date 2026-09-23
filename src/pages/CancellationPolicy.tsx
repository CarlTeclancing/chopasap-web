import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const cancellationSections = [
  {
    title: "1. Overview",
    paragraphs: [
      "Customers may request cancellation of an Order through the cancellation functionality available on ChopaSap or by contacting Customer Support where applicable.",
      "An Order may be easier to cancel before it has been accepted or preparation has begun.",
      "Once a Restaurant Partner has accepted or started preparing an Order, cancellation may be restricted because food preparation and other costs may already have been incurred.",
    ],
  },
  {
    title: "2. Who Can Cancel an Order",
    paragraphs: ["An Order may generally be cancelled by:"],
    bullets: [
      "the Customer who placed the Order;",
      "ChopaSap where operational or technical circumstances require cancellation; or",
      "the Restaurant Partner where it is unable to fulfil the Order.",
    ],
    afterBullets: [
      "A Delivery Partner may not ordinarily cancel an Order independently except where permitted by the platform's operational procedures.",
    ],
  },
  {
    title: "3. How to Cancel",
    paragraphs: [
      "Customers should use the cancellation option available within the ChopaSap platform where such functionality is provided.",
      "Where the cancellation option is unavailable, the Customer may contact ChopaSap Customer Support as soon as possible.",
      "Customers should provide their Order number and any other information reasonably necessary to identify the Order.",
      "A cancellation request is not guaranteed to succeed if the Order has already progressed to a stage where cancellation is no longer reasonably possible.",
    ],
  },
  {
    title: "4. Cancellation Before Restaurant Acceptance",
    paragraphs: [
      "Where a Customer requests cancellation before the Restaurant Partner has accepted the Order, the Order may generally be cancelled without an additional cancellation charge.",
      "Where payment has already been completed, the amount may generally be eligible for a refund in accordance with the Refund Policy.",
    ],
  },
  {
    title: "5. Cancellation After Restaurant Acceptance",
    paragraphs: [
      "Once an Order has been accepted by the Restaurant Partner, the Customer may still request cancellation, but cancellation may be subject to different conditions.",
      "If preparation has already started, the Customer may not be entitled to a full refund because the Restaurant Partner may already have incurred costs in preparing the Order.",
      "Any refund will be determined in accordance with the circumstances of the cancellation and the Refund Policy.",
    ],
  },
  {
    title: "6. Cancellation After Preparation or Dispatch",
    paragraphs: [
      "Once food preparation has been substantially completed or the Order has been handed to a Delivery Partner, cancellation may no longer be possible.",
      "Where cancellation is still permitted at this stage, the Customer may not be entitled to a refund unless the cancellation or failure to fulfil the Order is attributable to ChopaSap or the Restaurant Partner, or a refund is otherwise required by applicable law.",
    ],
  },
  {
    title: "7. Cancellation by ChopaSap or a Restaurant Partner",
    paragraphs: [
      "ChopaSap or a Restaurant Partner may cancel an Order where reasonably necessary, including where:",
    ],
    bullets: [
      "the Restaurant Partner cannot fulfil the Order;",
      "required ingredients or menu items are unavailable;",
      "the Restaurant Partner is unable to prepare the Order;",
      "the Delivery Address is outside the available delivery area;",
      "there is a technical or operational problem;",
      "there is a payment or security issue;",
      "circumstances prevent the delivery from being reasonably completed; or",
      "cancellation is necessary for legal, safety, or other legitimate operational reasons.",
    ],
    afterBullets: [
      "Where an Order is cancelled after payment has been made, any applicable refund will be handled in accordance with the Refund Policy.",
    ],
  },
  {
    title: "8. Incorrect Delivery Information",
    paragraphs: [
      "Customers are responsible for providing an accurate Delivery Address, telephone number, and other information necessary to complete the delivery.",
      "Where an Order cannot be delivered because the Customer provided incorrect or incomplete information, the Customer may not be entitled to a full refund.",
      "ChopaSap may assess the circumstances, including whether the Delivery Partner made reasonable delivery attempts.",
    ],
  },
  {
    title: "9. Customer Unavailability",
    paragraphs: [
      "Customers should remain reasonably available to receive their Orders at the delivery location and during the expected delivery period.",
      "Where a Delivery Partner makes reasonable attempts to complete a delivery but the Customer cannot be reached or refuses to receive the Order without a valid reason, the Order may be treated as a completed or failed delivery, and a refund may not be available except where required by applicable law.",
    ],
  },
  {
    title: "10. Refunds Following Cancellation",
    paragraphs: [
      "Cancellation and refunds are separate matters.",
      "Cancelling an Order does not automatically guarantee a refund.",
      "Where a refund is applicable, it will be assessed and processed according to the Refund Policy, the circumstances of the cancellation, and the stage reached by the Order.",
    ],
  },
  {
    title: "11. Promotional Credits and Discounts",
    paragraphs: [
      "Where an Order is cancelled, promotional credits, discounts, coupons, or other promotional benefits may not necessarily be restored.",
      "Where appropriate, ChopaSap may restore an eligible promotional benefit or provide another adjustment in accordance with the applicable promotion terms.",
    ],
  },
  {
    title: "12. Cancellation Due to Unforeseen Circumstances",
    paragraphs: [
      "Orders may occasionally need to be cancelled because of circumstances outside the reasonable control of ChopaSap or the Restaurant Partner, including severe weather, major transportation disruptions, utility failures, security incidents, or other events that materially prevent fulfilment or delivery.",
      "Where an Order is cancelled in such circumstances, ChopaSap will assess any refund or other remedy in accordance with the Refund Policy and applicable law.",
    ],
  },
  {
    title: "13. Repeated or Abusive Cancellations",
    paragraphs: [
      "ChopaSap may monitor repeated cancellation activity where reasonably necessary to prevent fraud, abuse, or misuse of the platform.",
      "Where there is reasonable evidence of systematic abuse or fraudulent activity, ChopaSap may restrict certain account features or take other measures permitted by the Terms & Conditions and applicable law.",
    ],
  },
  {
    title: "14. Changes to This Cancellation Policy",
    paragraphs: [
      "ChopaSap Logistics Inc. may update this Cancellation Policy when necessary to reflect changes to the Services, ordering procedures, operational arrangements, payment processes, or applicable law.",
      "The revised version will display its effective date.",
      "Material changes may be communicated through the website, application, email, or another appropriate channel.",
    ],
  },
  {
    title: "15. Contact",
    paragraphs: ["For cancellation-related questions or requests:"],
    contact: [
      ["Company", "ChopaSap Logistics Inc."],
      ["Platform", "ChopaSap"],
      ["Website", "[INSERT WEBSITE URL]"],
      ["Email", "[INSERT SUPPORT EMAIL]"],
      ["Phone", "[INSERT PHONE NUMBER]"],
      ["Address", "[INSERT REGISTERED BUSINESS ADDRESS]"],
    ],
  },
];

const CancellationPolicy = () => {
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
            Cancellation Policy
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.12em] text-neutral-300">
            Effective date: [INSERT DATE]
          </p>
        </header>

        <div className="px-6 py-10 md:px-12 md:py-14">
          <div className="mb-12 border-b border-neutral-200 pb-10 text-lg leading-8 text-neutral-700">
            <p>
              This Cancellation Policy explains when and how Customers may cancel
              an Order placed through <strong>ChopaSap</strong>, and what may
              happen to the Order and any associated payment after cancellation.
            </p>
            <p className="mt-5">
              Because food Orders may be prepared shortly after they are
              accepted, the ability to cancel an Order and receive a refund may
              depend on the stage of the Order.
            </p>
            <p className="mt-5">
              This Policy should be read together with the Terms &amp; Conditions
              and Refund Policy.
            </p>
          </div>

          <div className="space-y-10">
            {cancellationSections.map((section) => (
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

export default CancellationPolicy;
