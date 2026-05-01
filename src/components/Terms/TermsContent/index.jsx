"use client";

import Container from "@/components/Container";

const TERMS_DATA = [
  {
    id: "1. Introduction",
    isFirst: true,
    paragraphs: [
      "Welcome to the digital platform of High Jump Digital. The services provided on this platform are managed and operated by High Jump Digital Pty Ltd, an entity incorporated in Australia, High Jump Digital Limited, an entity incorporated in the United Kingdom, and High Jump Digital Co., Ltd, an entity incorporated in Thailand (hereinafter collectively referred to as “High Jump Digital,” “the Company,” “we,” “us,” or “our”). These Terms of Service (“Terms”) govern the use of our website and the services offered herein.",
    ],
  },
  {
    id: "2. Acceptance of Terms",
    paragraphs: [
      "By accessing this website and utilizing the services provided by High Jump Digital, you (“the User,” “you,” your”) agree to be bound by these Terms in their entirety. Your agreement to these Terms occurs upon your first use of the website or services. If you do not agree to be bound by these Terms, you are instructed to cease use of the website and services of High Jump Digital immediately.",
    ],
  },
  {
    id: "3. Services",
    paragraphs: [
      "High Jump Digital (“the Company”) furnishes an array of digital marketing services available to clients irrespective of geographical location, inclusive of the United Kingdom, Australia, and Thailand. The services provided are as follows:",
    ],
    listItems: [
      { label: "a. Web Design:", text: "The Company develops websites in accordance with the client’s specifications and business objectives, ensuring professional standards and operational functionality." },
      { label: "b. Web Development:", text: "The Company engages in the creation of websites ensuring robustness, scalability, and security, adhering to industry standards for performance and functionality." },
      { label: "c. Google AdWords:", text: "The Company manages pay-per-click advertising campaigns on the Google platform aimed at enhancing client visibility and traffic acquisition, in compliance with Google’s advertising policies." },
      { label: "d. Search Engine Optimization (SEO):", text: "The Company implements SEO strategies designed to improve website ranking and visibility on recognized search engines, in adherence to search engine guidelines." },
      { label: "e. Content Marketing:", text: "The Company creates and manages content marketing campaigns to engage audiences and drive traffic to client websites." },
      { label: "f. Facebook Ads:", text: "The Company develops and manages advertising campaigns on Facebook with the objective of reaching specified target audiences, in compliance with Facebook’s advertising policies." },
      { label: "g. Instagram Ads:", text: "The Company executes advertising campaigns on Instagram aimed at promoting brand engagement and awareness, in compliance with Instagram’s advertising policies." },
    ],
    extraParagraphs: [
      "The services are rendered digitally, encompassing a process that includes initial consultation, strategy development, execution, ongoing optimization, and reporting, in alignment with the Company’s operational protocols.",
      "**Service Modifications and Cancellations:**",
      "Clients may terminate any recurring campaign service by providing a 30-day notice, except during the first month of service. Should the 30-day notice period extend into a new billing month, invoices shall be prorated accordingly.",
    ],
  },
  {
    id: "4. Limitation of Liability",
    paragraphs: [
      "**a. No Guarantee of Results:**",
      "High Jump Digital does not guarantee any specific results from the use of its services. The success of digital marketing campaigns can be influenced by many factors outside the control of High Jump Digital.",
      "**No Liability:**",
      "High Jump Digital, its affiliates, and service providers will not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from (a) your access to, use of, inability to access or use the services; (b) any conduct or content of any third party on the services; or (c) unauthorized access, use, or alteration of your transmissions or content.",
      "**Client Responsibility:**",
      "The client assumes full responsibility for any losses or damages incurred as a result of the use of High Jump Digital’s services. Clients grant High Jump Digital the authority to make decisions and take actions it deems beneficial for the marketing campaigns.",
    ],
  },
  {
    id: "5. User Responsibilities",
    paragraphs: [
      "**a.Lawful Use:**",
      "Users agree to use the website and services of High Jump Digital in a lawful manner, in accordance with these Terms, and in compliance with all applicable laws and regulations of their respective jurisdictions.",
      "**b.Accurate Information:**",
      "Users agree to provide accurate, current, and complete information as may be prompted by any registration forms on the website.",
      "**c.Use Restrictions:**",
      "Users shall not engage in any activities that interfere with or disrupt the proper functioning of the website or services, including but not limited to hacking, spamming, or transmitting any viruses or malicious code.",
      "**d.Intellectual Property:**",
      "Users agree to respect the intellectual property rights of High Jump Digital and third parties. Unauthorized use, reproduction, or distribution of any content displayed on the website is prohibited.",
      "**e.Indemnification:**",
      "Users agree to indemnify and hold harmless High Jump Digital, its affiliates, officers, directors, employees, agents, and licensors from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from the user’s violation of these Terms or unauthorized use of the website and services.",
      "**f.Commercial Use:**",
      "Unless otherwise authorized in writing, users agree not to use the website or services for any commercial purposes without the express written consent of High Jump Digital.",
      "**g.Third-Party Websites and Services:**",
      "High Jump Digital may provide links to third-party websites or services. Users acknowledge and agree that High Jump Digital is not responsible or liable for the content or accuracy of such third-party resources.",
    ],
  },
  {
    id: "6. Payments",
    paragraphs: [
      "**a.Payment Obligations:**",
      "Clients shall remit payment to High Jump Digital in accordance with the terms stipulated herein. Payment for services is requisite in advance, prior to the initiation of work, unless otherwise explicitly agreed in writing.",
      "**b.Website Build Service:**",
      "For services pertaining to website construction, a deposit constituting fifty percent (50%) of the total fee is obligatory to commence the project. The residual fifty percent (50%) is due upon completion of the website and must be settled prior to the transfer of ownership or activation of hosting services.",
      "**c.Payment Modalities:**",
      "Payment may be effectuated via cash transfer or by credit/debit card, in alignment with the prevailing financial regulations and standards.",
      "**d.Overdue Payments:**",
      "In the event that an invoice remains unpaid post fourteen (14) days from the date of issuance, High Jump Digital reserves the right to cease all work pertaining to the client’s account until such time as the outstanding invoice is settled in full",
      "**e.Refund Policy:**",
      "High Jump Digital operates under a no-refund policy for services that have been rendered and completed in accordance with the agreed-upon terms.",
    ],
  },
  {
    id: "7.Intellectual Property Rights",
    paragraphs: [
      "**a.Ownership:**",
      "All intellectual property rights, including but not limited to copyrights, trademarks, trade names, patent rights, and other proprietary rights related to the website, its content, and services provided by High Jump Digital, shall remain the sole property of High Jump Digital or its licensors.",
      "**b.License to Use:**",
      "Clients are granted a limited, revocable, non-exclusive, non-transferable license to access and use the services provided by High Jump Digital solely for the purposes as agreed upon. This license does not confer any rights to copy, modify, distribute, sell, or otherwise exploit the website or its content without written permission from High Jump Digital.",
      "**c.Client Content:**",
      "Clients retain all intellectual property rights to the content they provide for the purpose of the services rendered. By providing such content, clients grant High Jump Digital a non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such content in connection with the services provided.",
      "**d.Unauthorized Use:**",
      "Any unauthorized use, reproduction, or distribution of the intellectual property owned by High Jump Digital or its licensors is strictly prohibited and may result in civil and criminal penalties.",
    ],
  },
  {
    id: "8. Governing Law",
    paragraphs: [
      "**a. Jurisdictional Law:**",
      "The Terms of Service and any separate agreements whereby High Jump Digital provides services shall be governed by and construed in accordance with the laws of the respective jurisdictions as follows:",
      "For services provided by High Jump Digital Pty Ltd, the laws of Australia shall apply.",
      "For services provided by High Jump Digital Limited, the laws of the United Kingdom shall apply.",
      "For services provided by High Jump Digital Co., Ltd, the laws of Thailand shall apply.",
      "**b.Dispute Resolution:**",
      "Any disputes arising out of or in connection with these Terms, the website, or the services provided shall initially be attempted to be resolved through amicable negotiations. In the event that a resolution cannot be reached, such disputes shall be referred to and finally resolved by arbitration. The arbitration shall be conducted in accordance with the rules of a recognized arbitration institution mutually agreed upon by the parties. If the parties are unable to agree upon an arbitration institution within ten (10) days of the initiation of arbitration, the arbitration shall be conducted under the rules of the following institutions based on the entity providing the services:",
      "For services provided by High Jump Digital Pty Ltd, arbitration shall be administered in Australia under the rules of the Australian Centre for International Commercial Arbitration (ACICA).",
      "For services provided by High Jump Digital Limited, arbitration shall be administered in the United Kingdom under the rules of the London Court of International Arbitration (LCIA).",
      "For services provided by High Jump Digital Co., Ltd, arbitration shall be administered in Thailand under the rules of the Thai Arbitration Center (THAC).",
      "The language of the arbitration shall be English. The arbitral award shall be final and binding upon both parties, and may be enforced in any court of competent jurisdiction.",
    ],
  },
  {
    id: "9. Contact Information",
    isContact: true,
    paragraphs: [
      "For any inquiries, concerns, or communications regarding these Terms of Service or any related matter, you may contact High Jump Digital at the following email address:",
    ],
  },
  {
    id: "10. Privacy Policy",
    isPrivacy: true,
    paragraphs: [
      "Your privacy is of utmost importance to High Jump Digital. We maintain a separate Privacy Policy that explains how we collect, use, and protect your personal information. By agreeing to these Terms of Service, you also agree to the terms of our Privacy Policy, which is accessible at",
    ],
  },
  {
    id: "11. Updates to Terms",
    paragraphs: [
      "High Jump Digital reserves the right, at its sole discretion, to modify or replace these Terms of Service at any time. In case of any material changes, we will provide a notice on our website or send an email notification to the users who have provided their email addresses to us. The changes will become effective immediately upon the posting of the updated Terms on this page.",
      "Your continued use of the website and our services following the posting of revised Terms indicates your acceptance and agreement to the changes. It is your responsibility to check these Terms periodically for any modifications. If you do not agree to the revised Terms, your sole remedy is to discontinue the use of our website and services.",
    ],
  },
];

export default function TermsContent() {
  const renderText = (text) => {
    if (text.includes("**")) {
      const parts = text.split("**");
      return (
        <>
          {parts[0]}
          <strong>{parts[1]}</strong>
          {parts[2]}
        </>
      );
    }
    return text;
  };

  return (
    <section className="py-15 bg-white text-black">
      <Container>
        <div className="text-[18px] p-2.5 font-normal manrope leading-[1.6em]">
          {TERMS_DATA.map((section) => (
            <div key={section.id}>
              <h2
                className={`text-[35px] border-b-2 border-[#10C8F0] uppercase font-bold chakra leading-[1.6em] ${
                  section.isFirst ? "pb-5" : "mt-5 py-5"
                }`}
              >
                {section.id}
              </h2>

              {section.paragraphs.map((p, i) => (
                <p key={i} className={section.isFirst && i === 0 ? "my-5" : "mt-5"}>
                  {renderText(p)}
                  {section.isContact && i === section.paragraphs.length - 1 && (
                    <>
                      {" "}
                      <a
                        href="mailto:admin@highjumpdigital.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#10C8F0" }}
                      >
                        <strong>admin@highjumpdigital.com</strong>
                      </a>{" "}
                      We endeavor to respond to all communications in a timely and professional
                      manner.
                    </>
                  )}
                  {section.isPrivacy && i === section.paragraphs.length - 1 && (
                    <>
                      {" "}
                      <a
                        href="https://www.highjumpdigital.com/privacy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#10C8F0" }}
                      >
                        <strong>https://www.highjumpdigital.com/privacy.</strong>
                      </a>{" "}
                      We encourage you to review our Privacy Policy to understand our practices
                      regarding your personal information.
                    </>
                  )}
                </p>
              ))}

              {section.listItems && (
                <ul className="space-y-5 manrope font-normal mt-5 text-[16px] md:text-[18px]">
                  {section.listItems.map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.label}</strong> {item.text}
                    </li>
                  ))}
                </ul>
              )}

              {section.extraParagraphs &&
                section.extraParagraphs.map((p, i) => (
                  <p key={i} className="mt-5">
                    {renderText(p)}
                  </p>
                ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}