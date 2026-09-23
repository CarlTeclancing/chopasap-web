import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const termsSections = [
  {
    title: "1. Introduction and Acceptance",
    paragraphs: [
      "ChopaSap provides an online platform through which customers may discover participating restaurants, browse menus, place food or related orders, make payments through available payment methods, and arrange delivery to an address within the areas served by the platform.",
      "Depending on the applicable service, ChopaSap may facilitate interactions between customers, restaurants, and delivery partners and may provide certain services directly.",
      "The specific role of ChopaSap in relation to a particular order may depend on the service selected and the information displayed to you during the ordering process.",
      "By using the Services, you agree to comply with these Terms and all applicable laws and regulations.",
    ],
  },
  {
    title: "2. Definitions",
    paragraphs: ["For purposes of these Terms:"],
    definitions: [
      ["\"ChopaSap Logistics Inc.\", \"we\", \"us\", or \"our\"", "means the company operating ChopaSap."],
      ["\"ChopaSap\"", "means the food ordering and delivery platform, including its website, mobile application, software, systems, and related services."],
      ["\"Customer\" or \"you\"", "means a person who accesses or uses the Services to browse, order, purchase, or receive products or services."],
      ["\"Restaurant Partner\"", "means a restaurant, food business, merchant, or other participating establishment offering products through the platform."],
      ["\"Delivery Partner\"", "means an individual or business engaged, where applicable, to deliver an order to a Customer."],
      ["\"Order\"", "means a request submitted by a Customer through the platform to purchase products or services offered by a Restaurant Partner or otherwise made available through the platform."],
      ["\"Menu\"", "means the products, meals, beverages, descriptions, prices, images, options, and other information displayed by a Restaurant Partner."],
      ["\"Delivery Address\"", "means the location provided by the Customer for delivery of an Order."],
      ["\"Order Total\"", "means the amount payable for an Order, which may include item prices, taxes where applicable, delivery charges, service charges, discounts, or other disclosed charges."],
    ],
  },
  {
    title: "3. Account Registration",
    paragraphs: [
      "Certain features may require you to create an account.",
      "You agree to provide accurate and current information when registering and to update your information when reasonably necessary.",
      "You are responsible for maintaining the confidentiality of your account credentials and for activities carried out through your account.",
      "You must not create an account using false information or impersonate another person.",
      "You should notify ChopaSap Logistics Inc. promptly if you believe that your account has been accessed without authorization.",
    ],
  },
  {
    title: "4. Customer Eligibility and Responsibilities",
    paragraphs: [
      "You are responsible for ensuring that the information you provide is accurate, including your name, phone number, Delivery Address, and payment information.",
      "You must ensure that someone is available to receive an Order at the Delivery Address where required.",
      "You are responsible for providing clear delivery instructions and for ensuring that the Delivery Address can reasonably be accessed by the Delivery Partner.",
      "If an Order cannot be delivered because the Customer provides an incorrect address, is unavailable, refuses to receive the Order, or otherwise prevents delivery, additional charges or cancellation consequences may apply where permitted by the applicable service terms.",
    ],
  },
  {
    title: "5. Restaurant Partners and Menus",
    paragraphs: [
      "Restaurant Partners are responsible for the accuracy of their menus and the information they provide about products, including descriptions, prices, ingredients, availability, and other information displayed through the platform.",
      "Menu availability may change without notice.",
      "A product displayed on the platform may become unavailable before or after an Order is placed.",
      "Where a Restaurant Partner cannot fulfil an Order or an item within an Order, ChopaSap may notify the Customer and may offer cancellation, substitution, refund, credit, or another available solution.",
      "Restaurant Partners remain responsible for preparing food in compliance with applicable food-safety and other legal requirements.",
    ],
  },
  {
    title: "6. Food Information and Allergies",
    paragraphs: [
      "Customers are responsible for reviewing available product descriptions, ingredients, allergen information, and other relevant information before placing an Order.",
      "Restaurant Partners are responsible for the accuracy of the information they provide concerning their products.",
      "If you have a food allergy, intolerance, dietary restriction, or other health-related dietary concern, you should contact the relevant Restaurant Partner before placing the Order.",
      "Because food may be prepared in environments where allergens are present, ChopaSap does not guarantee that food is completely free from allergens unless expressly stated otherwise.",
      "Customers should not rely solely on photographs, descriptions, or general menu information where they have a serious allergy or other dietary risk.",
    ],
  },
  {
    title: "7. Placing an Order",
    paragraphs: [
      "An Order is submitted when you complete the ordering process and confirm the purchase.",
      "Before confirming an Order, you should review the selected items, quantities, Delivery Address, Order Total, and other relevant information.",
      "Submitting an Order constitutes a request to purchase the selected products.",
      "Acceptance of an Order may depend on restaurant availability, product availability, delivery availability, payment authorization, and other circumstances.",
      "An Order may be accepted, rejected, cancelled, or modified in accordance with these Terms and the information presented during checkout.",
    ],
  },
  {
    title: "8. Prices and Charges",
    paragraphs: [
      "Prices displayed on the platform are those applicable at the time of ordering, subject to correction of obvious errors.",
      "The Order Total may include:",
    ],
    bullets: [
      "food or product prices;",
      "applicable taxes or charges;",
      "delivery fees;",
      "service fees;",
      "applicable discounts or promotions; and",
      "other charges clearly displayed before order confirmation.",
    ],
    afterBullets: [
      "The final amount payable should be displayed before you confirm the Order.",
      "Restaurant prices, delivery charges, and other fees may vary according to location, time, restaurant, distance, promotions, or other operational factors.",
    ],
  },
  {
    title: "9. Payments",
    paragraphs: [
      "Available payment methods may include Mobile Money, bank cards, cash, bank transfer, or other payment methods made available through the platform.",
      "You authorize the applicable payment provider to process the amount due for an accepted Order.",
      "ChopaSap Logistics Inc. may use third-party payment providers to process transactions.",
      "If payment fails, is reversed, or cannot be verified, the Order may be delayed, rejected, or cancelled.",
      "Customers are responsible for providing accurate payment information and ensuring that they have sufficient funds or authorization to complete the transaction.",
    ],
  },
  {
    title: "10. Order Confirmation and Changes",
    paragraphs: [
      "Once an Order has been submitted, changes may not always be possible because the Restaurant Partner may begin preparing the food immediately.",
      "You should contact the platform as soon as possible if you need to correct an Order.",
      "ChopaSap does not guarantee that changes can be made after an Order has been accepted or preparation has started.",
      "Any additional amount resulting from a requested change may be payable by the Customer.",
    ],
  },
  {
    title: "11. Delivery",
    paragraphs: [
      "Delivery times shown on the platform are estimates unless expressly stated otherwise.",
      "Actual delivery time may be affected by restaurant preparation time, traffic, weather, road conditions, delivery demand, location, public events, technical issues, or other circumstances outside reasonable control.",
      "Customers should ensure that their Delivery Address and contact details are accurate.",
      "A Delivery Partner may contact the Customer by telephone or through platform communication features to complete the delivery.",
      "Where reasonable attempts to deliver an Order are unsuccessful because of circumstances attributable to the Customer, the Order may be cancelled without a refund, subject to applicable law and the Refund Policy.",
    ],
  },
  {
    title: "12. Delivery Areas",
    paragraphs: [
      "ChopaSap only provides delivery to locations within its service areas.",
      "The available delivery area may change depending on the Restaurant Partner, Delivery Partner availability, distance, operational capacity, and other factors.",
      "An address that is accessible at one time may not always be available for delivery.",
    ],
  },
  {
    title: "13. Delivery Fees",
    paragraphs: [
      "A delivery fee may apply to an Order.",
      "The applicable fee should be disclosed before Order confirmation.",
      "Delivery fees may depend on distance, location, time, demand, restaurant, promotions, or other operational factors.",
      "Where a promotional offer provides free or reduced delivery, additional conditions may apply.",
    ],
  },
  {
    title: "14. Promotions, Discounts and Credits",
    paragraphs: [
      "ChopaSap may occasionally provide discount codes, promotional offers, credits, vouchers, or other incentives.",
      "Promotions may have separate conditions, including expiry dates, minimum order values, eligible restaurants, geographical restrictions, or limits on use.",
      "Unless otherwise stated, promotional offers cannot be exchanged for cash.",
      "ChopaSap Logistics Inc. may withdraw or modify a promotional offer where reasonably necessary because of misuse, fraud, technical errors, or other legitimate circumstances.",
    ],
  },
  {
    title: "15. Cancellation of Orders",
    paragraphs: [
      "Order cancellations are governed by the Cancellation Policy.",
      "The ability to cancel an Order may depend on whether the Restaurant Partner has accepted the Order, started preparation, or whether the Order has already been dispatched for delivery.",
      "A cancellation may result in no refund or a partial refund depending on the stage of the Order and the circumstances.",
    ],
  },
  {
    title: "16. Refunds and Order Issues",
    paragraphs: [
      "Refunds and other remedies relating to Orders are governed by the Refund Policy.",
      "Customers should promptly report issues such as:",
    ],
    bullets: [
      "missing items;",
      "incorrect items;",
      "damaged packaging;",
      "an Order not delivered;",
      "significant discrepancies between the Order and the products received; or",
      "other material problems affecting the Order.",
    ],
    afterBullets: [
      "Supporting information, including photographs or other evidence, may be requested where reasonably necessary to investigate a complaint.",
    ],
  },
  {
    title: "17. Customer Conduct",
    paragraphs: ["Customers must not use the platform to:"],
    bullets: [
      "commit fraud;",
      "provide false information;",
      "abuse promotional offers;",
      "make knowingly false complaints;",
      "threaten, harass, or abuse Restaurant or Delivery Partners;",
      "interfere with the platform's operation or security;",
      "attempt to obtain unauthorized access to another account; or",
      "use the platform for unlawful purposes.",
    ],
    afterBullets: [
      "ChopaSap Logistics Inc. may restrict or suspend an account where there is reasonable evidence of fraud, abuse, unlawful activity, or serious violation of these Terms.",
    ],
  },
  {
    title: "18. Restaurant Partner Responsibilities",
    paragraphs: [
      "Restaurant Partners are responsible for the products they list and provide, including preparation, packaging, product descriptions, pricing, availability, food safety, and applicable legal obligations.",
      "Where the platform provides a marketplace function, Restaurant Partners remain responsible for their legal and regulatory obligations relating to their food business.",
      "Specific commercial, operational, and service obligations may also be governed by separate agreements between ChopaSap Logistics Inc. and participating Restaurant Partners.",
    ],
  },
  {
    title: "19. Delivery Partner Responsibilities",
    paragraphs: [
      "Where applicable, Delivery Partners are responsible for complying with the operational, safety, and service requirements applicable to their delivery activities.",
      "Delivery Partners may be independent service providers or may otherwise operate under arrangements separately established with ChopaSap Logistics Inc.",
      "Specific terms applicable to Delivery Partners may be provided in separate agreements or policies.",
    ],
  },
  {
    title: "20. Intellectual Property",
    paragraphs: [
      "The platform, including its software, interface, branding, logos, designs, text, graphics, technology, and other materials provided by ChopaSap Logistics Inc., is protected by applicable intellectual-property laws.",
      "Except as expressly permitted, you may not copy, reproduce, modify, distribute, sell, reverse engineer, or commercially exploit protected parts of the platform without appropriate authorization.",
      "Restaurant Partner names, trademarks, logos, menus, photographs, and other materials remain the property of their respective owners.",
    ],
  },
  {
    title: "21. User Content and Reviews",
    paragraphs: [
      "Customers may be permitted to submit ratings, reviews, photographs, comments, or other content.",
      "You are responsible for ensuring that content you submit is accurate, lawful, and does not infringe the rights of another person.",
      "You must not submit fraudulent, defamatory, abusive, discriminatory, misleading, or unlawful content.",
      "ChopaSap Logistics Inc. may remove content that violates these Terms or applicable law.",
    ],
  },
  {
    title: "22. Third-Party Services",
    paragraphs: [
      "The platform may rely on third-party services, including payment providers, mapping services, communication providers, hosting providers, analytics services, and other technology providers.",
      "Third-party services may operate under their own terms and privacy policies.",
      "ChopaSap Logistics Inc. is not responsible for the independent actions or policies of third-party providers that it does not control.",
    ],
  },
  {
    title: "23. Service Availability",
    paragraphs: [
      "ChopaSap Logistics Inc. aims to keep the platform available and operational but does not guarantee uninterrupted or error-free service.",
      "Temporary interruptions may occur because of maintenance, software updates, technical failures, internet or telecommunications problems, cybersecurity incidents, third-party outages, or circumstances beyond reasonable control.",
    ],
  },
  {
    title: "24. Limitation of Responsibility",
    paragraphs: [
      "The platform's role in relation to a transaction may vary depending on the service provided.",
      "Where a Restaurant Partner independently prepares and supplies food, that Restaurant Partner remains responsible for the food it prepares and supplies, subject to applicable law and the nature of ChopaSap's role in the transaction.",
      "Nothing in these Terms excludes or limits any liability or consumer protection that cannot lawfully be excluded or limited.",
    ],
  },
  {
    title: "25. Suspension and Termination",
    paragraphs: [
      "ChopaSap Logistics Inc. may suspend or terminate access to an account where reasonably necessary to prevent fraud, address security issues, enforce these Terms, comply with applicable law, or protect the platform and its users.",
      "A Customer may stop using the platform at any time.",
      "Outstanding obligations relating to completed transactions may continue after account closure.",
    ],
  },
  {
    title: "26. Changes to the Services",
    paragraphs: [
      "ChopaSap Logistics Inc. may update, modify, add, or remove platform features, restaurants, delivery areas, payment methods, or other Services as the platform develops.",
      "Material changes may be communicated through the website, application, email, or another appropriate means where reasonably necessary.",
    ],
  },
  {
    title: "27. Changes to These Terms",
    paragraphs: [
      "These Terms may be updated from time to time.",
      "The updated version will include a revised effective date.",
      "Where appropriate, material changes may be communicated through the platform or another reasonable channel.",
      "Continued use of the Services after the effective date of updated Terms may constitute acceptance of the updated Terms to the extent permitted by applicable law.",
    ],
  },
  {
    title: "28. Governing Law and Dispute Resolution",
    paragraphs: [
      "These Terms are governed by the applicable laws of the Republic of Cameroon.",
      "The parties should first attempt to resolve disputes through good-faith communication.",
      "Where a dispute cannot be resolved amicably, it may be submitted to a competent court or other dispute-resolution mechanism having jurisdiction under applicable law.",
    ],
  },
  {
    title: "29. Contact Information",
    contact: [
      ["Company", "ChopaSap Logistics Inc."],
      ["Platform", "ChopaSap"],
      ["Website", "[INSERT WEBSITE URL]"],
      ["Email", "[INSERT OFFICIAL EMAIL]"],
      ["Phone", "[INSERT OFFICIAL PHONE NUMBER]"],
      ["Address", "[INSERT REGISTERED BUSINESS ADDRESS]"],
    ],
  },
];

const TermsAndConditions = () => {
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
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.12em] text-neutral-300">
            Effective date: [INSERT DATE]
          </p>
        </header>

        <div className="px-6 py-10 md:px-12 md:py-14">
          <div className="mb-12 border-b border-neutral-200 pb-10 text-lg leading-8 text-neutral-700">
            <p>
              Welcome to <strong>ChopaSap</strong>, a food ordering and delivery
              platform operated by <strong>ChopaSap Logistics Inc.</strong>, a
              company registered and operating under the laws of the Republic of
              Cameroon.
            </p>
            <p className="mt-5">
              These Terms and Conditions ("Terms") govern your access to and use
              of the ChopaSap website, mobile application, software, ordering
              services, delivery services, and related features (collectively,
              the "Services").
            </p>
            <p className="mt-5">
              By accessing, creating an account on, placing an order through, or
              otherwise using the Services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and the related
              Privacy Policy, Refund Policy, and Cancellation Policy.
            </p>
            <p className="mt-5">
              If you do not agree with these Terms, you should not use the
              Services.
            </p>
          </div>

          <div className="space-y-10">
            {termsSections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 text-2xl font-bold text-neutral-950 md:text-3xl">
                  {section.title}
                </h2>
                <div className="space-y-4 leading-7 text-neutral-700">
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}

                  {section.definitions && (
                    <dl className="space-y-4 rounded-xl bg-[#fffaf2] p-5 md:p-7">
                      {section.definitions.map(([term, definition]) => (
                        <div key={term}>
                          <dt className="font-bold text-neutral-950">{term}</dt>
                          <dd>{definition}</dd>
                        </div>
                      ))}
                    </dl>
                  )}

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

export default TermsAndConditions;
