import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const privacySections = [
  {
    title: "1. Introduction",
    paragraphs: [
      "This Privacy Policy applies to personal information collected through the ChopaSap website, mobile application, ordering systems, customer-support channels, and related Services.",
      "By using the platform, you acknowledge the processing of personal data as described in this Privacy Policy.",
    ],
  },
  {
    title: "2. Who We Are",
    paragraphs: [
      "ChopaSap Logistics Inc. operates the ChopaSap food delivery platform.",
      "Website: [INSERT WEBSITE URL]",
      "Email: [INSERT PRIVACY EMAIL]",
      "Address: [INSERT REGISTERED BUSINESS ADDRESS]",
      "The party responsible for personal-data processing may depend on the context in which the information is collected and the relationship between ChopaSap, the Customer, Restaurant Partner, and Delivery Partner.",
    ],
  },
  {
    title: "3. Information We Collect",
    paragraphs: ["We may collect information including:"],
    bullets: [
      "Account information: name, email address, telephone number, password or authentication information, and account preferences.",
      "Delivery information: Delivery Address, delivery instructions, location information where necessary to provide delivery services, and contact details.",
      "Order information: items ordered, restaurants selected, order history, order status, prices, discounts, delivery information, and transaction records.",
      "Payment information: payment method, transaction reference, payment status, and related billing information. Where a third-party payment provider processes payment credentials, those credentials may be handled directly by the provider.",
      "Restaurant information: business name, address, contact information, menu information, business documentation, payment details, and other information necessary to operate a Restaurant Partner account.",
      "Delivery Partner information: name, contact details, account information, delivery-related information, and other information necessary to coordinate delivery services.",
      "Technical information: IP address, browser information, device information, operating system, access times, logs, and technical events.",
      "Location information: location data where necessary for displaying nearby restaurants, calculating delivery services, tracking delivery progress, preventing fraud, or providing location-based functionality, subject to applicable law and available settings.",
      "Communication information: information contained in customer-support requests, messages, complaints, ratings, reviews, and other communications.",
    ],
  },
  {
    title: "4. How We Collect Information",
    paragraphs: ["We may collect information:"],
    bullets: [
      "directly from you when you create or use an account;",
      "when you place or receive an Order;",
      "when you communicate with customer support;",
      "from Restaurant Partners or Delivery Partners where relevant;",
      "automatically when you use the platform;",
      "through cookies and similar technologies; and",
      "from payment providers, identity providers, mapping services, or other service providers where necessary for the Services.",
    ],
  },
  {
    title: "5. How We Use Personal Data",
    paragraphs: ["We may use personal data to:"],
    bullets: [
      "create and manage accounts;",
      "process and fulfil Orders;",
      "connect Customers with Restaurant and Delivery Partners;",
      "coordinate deliveries;",
      "calculate delivery charges and service fees;",
      "process payments;",
      "provide order tracking;",
      "provide customer support;",
      "manage complaints and refund requests;",
      "prevent fraud and abuse;",
      "protect the security of the platform;",
      "improve the platform and user experience;",
      "communicate important service information;",
      "provide relevant promotions and marketing where permitted; and",
      "comply with applicable legal obligations.",
    ],
  },
  {
    title: "6. Lawful Grounds for Processing",
    paragraphs: [
      "Depending on the circumstances, personal-data processing may be carried out because it is necessary to provide requested Services, perform or administer a contractual relationship, comply with legal obligations, protect the security of the platform, pursue a lawful operational purpose where permitted, or obtain consent where consent is required.",
      "Where consent is required by applicable law, we will seek it in an appropriate manner.",
    ],
  },
  {
    title: "7. Customer, Restaurant and Delivery Partner Information",
    paragraphs: [
      "Different users interact with the platform in different capacities.",
      "A Customer's information may be shared with a Restaurant Partner when necessary to prepare and fulfil an Order.",
      "Relevant delivery information may be shared with a Delivery Partner when necessary to complete the delivery.",
      "Restaurant Partner information may be displayed to Customers as necessary to provide the marketplace service.",
      "Delivery Partner information may be displayed or shared only to the extent reasonably necessary to facilitate delivery and platform operations.",
    ],
  },
  {
    title: "8. Location Information",
    paragraphs: [
      "Where location services are used, ChopaSap may process approximate or precise location information depending on the functionality and permissions you provide.",
      "Location information may be used to:",
    ],
    bullets: [
      "determine nearby restaurants;",
      "determine whether delivery is available;",
      "calculate delivery routes or charges;",
      "provide order tracking;",
      "improve delivery coordination;",
      "prevent fraud; and",
      "provide location-based platform features.",
    ],
    afterBullets: [
      "Where applicable, you may manage location permissions through your device settings.",
    ],
  },
  {
    title: "9. Cookies and Similar Technologies",
    paragraphs: ["ChopaSap may use cookies and similar technologies to:"],
    bullets: [
      "maintain login sessions;",
      "remember preferences;",
      "support security;",
      "provide platform functionality;",
      "understand usage and performance; and",
      "improve the user experience.",
    ],
    afterBullets: [
      "You may manage cookies through browser or device settings where available.",
      "Disabling certain cookies may affect the operation of some features.",
    ],
  },
  {
    title: "10. Data Sharing",
    paragraphs: [
      "We do not sell or rent personal data to third parties for their independent commercial use.",
      "We may share relevant information with:",
    ],
    bullets: [
      "Restaurant Partners;",
      "Delivery Partners;",
      "payment providers;",
      "hosting and infrastructure providers;",
      "mapping and location service providers;",
      "communications providers;",
      "customer-support providers;",
      "security and fraud-prevention providers;",
      "analytics or technology providers;",
      "professional advisers where necessary; and",
      "public authorities where required or permitted by law.",
    ],
    afterBullets: [
      "Information is shared only to the extent reasonably necessary for the relevant purpose, subject to applicable law.",
    ],
  },
  {
    title: "11. Restaurant Partners and Third Parties",
    paragraphs: [
      "Restaurant Partners may receive Customer information necessary to prepare and fulfil Orders.",
      "Restaurant Partners may process that information according to their own legal obligations and privacy practices.",
      "Where a third party independently controls information outside the services provided by ChopaSap Logistics Inc., its own privacy policy may apply.",
    ],
  },
  {
    title: "12. International Data Transfers",
    paragraphs: [
      "Some technology or service providers used by ChopaSap may operate outside Cameroon.",
      "Where personal data is transferred outside Cameroon, ChopaSap Logistics Inc. will take reasonable measures to comply with applicable legal requirements concerning the transfer and protection of personal data.",
    ],
  },
  {
    title: "13. Data Security",
    paragraphs: [
      "ChopaSap Logistics Inc. uses reasonable technical and organizational measures designed to protect personal information against unauthorized access, misuse, alteration, loss, or disclosure.",
      "These measures may include access controls, authentication, monitoring, backups, security procedures, and other safeguards appropriate to the nature of the information.",
      "No online system can be guaranteed to be completely secure.",
    ],
  },
  {
    title: "14. Data Retention",
    paragraphs: [
      "Personal data is retained only for as long as reasonably necessary for the purposes for which it was collected, including providing Services, maintaining records, resolving disputes, preventing fraud, protecting security, and complying with legal obligations.",
      "Different categories of information may be retained for different periods.",
    ],
  },
  {
    title: "15. Account and Data Deletion",
    paragraphs: [
      "You may request deletion of your account and applicable personal information through the available account or support process.",
      "Some information may need to be retained where necessary for legal compliance, accounting, fraud prevention, security, dispute resolution, or other purposes permitted by applicable law.",
      "Deletion of an account does not necessarily delete information that must legally or operationally be retained.",
    ],
  },
  {
    title: "16. Data Subject Rights",
    paragraphs: [
      "Subject to applicable law and any lawful limitations, individuals may have rights concerning their personal information, including rights to request access, correction, deletion, or other rights provided by applicable data-protection law.",
      "Where processing is based on consent, consent may be withdrawn where applicable.",
      "Requests may be subject to reasonable identity verification.",
      "Requests should be sent to: [INSERT PRIVACY EMAIL]",
    ],
  },
  {
    title: "17. Marketing Communications",
    paragraphs: [
      "Where permitted by law, we may send information about promotions, special offers, new restaurants, platform features, or other marketing communications.",
      "Where applicable, you may unsubscribe from marketing communications through the method provided in the communication or through available account settings.",
      "Transactional and service-related messages, such as order confirmations, security notices, and delivery updates, may continue to be sent because they are necessary to provide the Services.",
    ],
  },
  {
    title: "18. Children's Privacy",
    paragraphs: [
      "The platform is intended primarily for users who are legally permitted to order or use the Services.",
      "We do not knowingly seek to collect personal data from children where such collection is prohibited by applicable law.",
      "Where an adult places an Order for a child, the adult remains responsible for the information submitted and the use of the Services.",
    ],
  },
  {
    title: "19. Data Security Incidents",
    paragraphs: [
      "If ChopaSap Logistics Inc. becomes aware of a personal-data security incident affecting the Services, we will assess the incident and take reasonable steps to contain, investigate, and address it.",
      "Where notification is required by applicable law, the appropriate notifications will be made to competent authorities and, where applicable, affected individuals.",
    ],
  },
  {
    title: "20. Changes to This Privacy Policy",
    paragraphs: [
      "We may update this Privacy Policy to reflect changes in the platform, data practices, security measures, or applicable law.",
      "The revised Policy will contain an updated effective date.",
      "Material changes may be communicated through the website, application, email, or another appropriate method.",
    ],
  },
  {
    title: "21. Contact Us",
    contact: [
      ["Company", "[COMPANY NAME]"],
      ["Platform", "[PLATFORM NAME]"],
      ["Website", "[INSERT WEBSITE URL]"],
      ["Privacy Email", "[INSERT PRIVACY EMAIL]"],
      ["Phone", "[INSERT PHONE NUMBER]"],
      ["Address", "[INSERT REGISTERED BUSINESS ADDRESS]"],
    ],
  },
];

const PrivacyPolicy = () => {
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
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm uppercase tracking-[0.12em] text-neutral-300">
            Effective date: [INSERT DATE]
          </p>
        </header>

        <div className="px-6 py-10 md:px-12 md:py-14">
          <div className="mb-12 border-b border-neutral-200 pb-10 text-lg leading-8 text-neutral-700">
            <p>
              At <strong>[PLATFORM NAME]</strong>, operated by
              <strong> [COMPANY NAME]</strong>, we respect the privacy of our
              customers, restaurant partners, delivery partners, visitors, and
              other users.
            </p>
            <p className="mt-5">
              This Privacy Policy explains what personal information we collect,
              how we use it, how we protect it, when we share it, and the choices
              and rights that may be available to you under applicable law.
            </p>
          </div>

          <div className="space-y-10">
            {privacySections.map((section) => (
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

export default PrivacyPolicy;
