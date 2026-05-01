"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";

const benefitItems = [
  {
    title: "SEO",
    href: "/seo",
    paragraphs: [
      "High Jump Digital offers comprehensive Search Engine Optimization (SEO) services designed to enhance your online visibility and attract targeted organic traffic.",
      "We understand that a strong SEO strategy is fundamental to sustainable digital growth, and our team of experts is well-versed in the latest practices and algorithms to keep your business on the leading edge.",
      "Through careful keyword research, on-page optimization, and authoritative link building, we work to increase your website's rank, thereby driving more traffic, enhancing customer engagement, and boosting your conversion rates.",
    ],
  },
  {
    title: "GOOGLE ADS",
    href: "/google-ads",
    paragraphs: [
      "With our robust Google Ads strategies, High Jump Digital directly targets potential customers who have high purchase intent.",
      "Our team is skilled in designing paid search campaigns that get your message in front of the right audience at the right time, which is crucial for maximizing immediate revenue generation and brand exposure.",
      "By leveraging insights and analytics, we continually refine your campaigns, ensuring they deliver the greatest return on investment and meet your business objectives effectively and efficiently.",
    ],
  },
  {
    title: "FACEBOOK ADS",
    href: "/facebook-ads",
    paragraphs: [
      "High Jump Digital harnesses the power of Facebook Ads to reach, engage, and convert your potential customers.",
      "Understanding that social media is a vital touchpoint in the consumer journey, we leverage the platform's granular targeting capabilities to deliver personalized, compelling advertisements that resonate with your desired audience.",
      "Moreover, we use the inherent social proof of Facebook to foster trust and drive sales, maintaining an optimal balance between brand awareness and conversion-focused strategies.",
    ],
  },
  {
    title: "WEB DESIGN",
    href: "/web-design",
    paragraphs: [
      "At High Jump Digital, we believe that effective web design is the cornerstone of a strong online presence.",
      "Our team focuses on creating professional, user-friendly, and visually pleasing websites that optimize user experience and maximize customer retention and conversion rates.",
      "We ensure that your site not only looks great but also performs exceptionally, with fast load times, mobile responsiveness, and easy navigation.",
      "By striking a balance between aesthetics and functionality, we create websites that impress visitors and convert them into loyal customers.",
    ],
  },
  {
    title: "BRANDING",
    href: "",
    paragraphs: [
      "High Jump Digital's branding services aim to create a distinctive, memorable brand identity that resonates with your target audience.",
      "We believe that branding is much more than just a logo or tagline; it's about the emotional connection and trust that your brand inspires.",
      "Our team works closely with you to understand your vision, values, and unique selling propositions, using this information to craft a brand identity that tells your story, instills trust, and establishes long-term customer loyalty and advocacy.",
    ],
  },
];

const ArrowIcon = () => (
  <svg width="24" height="24" viewBox="0 0 18 16" fill="none">
    <path
      d="M9.33888 15.712L15.1469 9.04H0.770875V7.624H15.1709L9.33888 0.951999H11.1869L17.7869 8.32L11.1869 15.712H9.33888Z"
      fill="#10C8F0"
    />
  </svg>
);

export default function Benefit() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = benefitItems[activeIndex];

  return (
    <section className="bg-[#090F14] transition-all duration-300 py-12.5 md:py-25 xl:h-175">
      <Container>
        <h2 className="text-[30px] sm:text-[48px] lg:text-[64px] chakra font-bold uppercase leading-[1.8em] tracking-[0.32px] text-white mb-6">
          HOW CAN YOU BENEFIT?
        </h2>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT SIDE */}
          <div className="space-y-4 lg:space-y-0">
            {benefitItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div key={item.title}>
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 1024) setActiveIndex(index);
                    }}
                    className={`w-full lg:w-87 flex items-center justify-between gap-4 text-left text-[18px] sm:text-[20px] md:text-[24px] font-semibold chakra uppercase leading-[1.8em] tracking-[0.32px] transition-colors 
                       px-7.5 py-5 lg:px-0 lg:py-2.5 cursor-pointer border border-[#10c8f0] lg:border-0  bg-[#88888830] lg:bg-transparent
                        ${isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"
                            }`}>
                    <span>{item.title}</span>
                    <span className="inline-flex">
                      <ArrowIcon />
                    </span>
                  </button>

                  {isActive && (
                    <div className="block lg:hidden mt-3 space-y-4 p-2 sm:p-0">
                      {item.paragraphs.map((paragraph, i) => (
                        <p
                          key={i}
                          className="text-[16px] poppins leading-7 text-white"
                        >
                          {paragraph}
                        </p>
                      ))}

                      {item.href && (
                        <Link
                          href={item.href}
                          className="inline-flex items-center rounded-full border border-cyan-400 px-5 py-2.5 text-[18px] poppins font-normal uppercase text-cyan-400"
                        >
                          LEARN MORE
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE (DESKTOP ONLY) */}
          <div className="hidden lg:flex mt-2 flex-col justify-between">
            <div className="space-y-5 text-white">
              {activeItem.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[18px] poppins font-normal leading-8.25 text-white"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-4">
              {activeItem.href && (
                <Link
                  href={activeItem.href}
                  className="inline-flex items-center rounded-full border border-cyan-400 px-5 py-2.5 text-[18px] font-normal uppercase poppins text-cyan-400 transition hover:border-white hover:text-white"
                >
                  LEARN MORE
                </Link>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
