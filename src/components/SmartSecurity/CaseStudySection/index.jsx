"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

const strategies = [
  {
    title: "SEO OPTIMIZATION",
    content:
      "Given that Search Engine Optimisation (SEO) was a primary area of interest for Smart Security, we began by conducting an in-depth audit of their existing website. Our analysis focused on identifying areas of improvement in meta-tagging, keyword integration, backlinking, site architecture, and loading speed. These improvements ensured better crawlability and indexing of the website by search engine bots.",
  },
  {
    title: "KEYWORD STRATEGY",
    content:
      "We undertook extensive keyword research to identify high-traffic and industry-relevant keywords. In addition to integrating these keywords into website content, we implemented a long-tail keyword strategy to capture more specific, niche searches. This aimed to increase the quantity and quality of organic traffic, thereby increasing organic enquiries.",
  },
  {
    title: "CONTENT STRATEGY",
    content:
      "To augment the keyword strategy, we created a robust content strategy that included regular blog posts, updates on security industry trends and tips, and in-depth articles on home and business security. This strategy aimed to establish Smart Security as a thought leader in the industry while improving the website's SEO ranking.",
  },
  {
    title: "LOCAL SEO",
    content:
      "As Smart Security is based in Perth, a local SEO strategy was crucial to driving local organic traffic. We optimized Google My Business listings, ensured NAP (Name, Address, Phone Number) consistency across all platforms, and encouraged local reviews.",
  },
  {
    title: "BACKLINK BUILDING",
    content:
      "A significant part of our strategy was to improve the site’s domain authority by building high-quality backlinks. We identified authoritative websites and blogs in the security industry and reached out to them for guest posting opportunities, collaborations, and link exchanges.",
  },
  {
    title: "USER EXPERIENCE",
    content:
      "Understanding the importance of user engagement, we also worked on enhancing the website's user experience. This involved improving website layout, navigation, mobile responsiveness, and page loading speed.",
  },
  {
    title: "PERFORMANCE REPORTS",
    content:
      "Regular performance tracking was instituted to assess the effectiveness of the strategy. We used a range of tools for ongoing website monitoring, keyword ranking tracking, and conversion optimization.",
  },
];

export default function CaseStudySection() {
  const [active, setActive] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ FIX: support string + array (NO UI CHANGE)
  const benefitItems = strategies.map((item) => ({
    title: item.title,
    paragraphs: Array.isArray(item.content) ? item.content : [item.content],
  }));

  const activeItem = benefitItems[activeIndex];

  return (
    <section className="bg-[#0B0F1A] py-17.5 text-white">
      <Container>
        {/* Project Goals */}
        <div>
          <h2 className="chakra text-[36px] lg:text-[64px] font-bold uppercase mb-4">
            STRATEGY/SOLUTION
          </h2>
          <p className="manrope text-[18px] font-medium mb-12">
            Our approach for Smart Security was a comprehensive one, targeting
            all aspects of their digital presence to maximise visibility and
            user engagement. We adopted the following strategies:
          </p>
        </div>

        {/* Problem Section */}
        <div className="border-b border-[#898A93] mb-12.5 grid lg:grid-cols-2 xl:grid-cols-[63.788%_1fr] gap-5 lg:gap-2 items-center">
          <div>
            <h2 className="chakra text-[36px] md:text-[48px] xl:text-[64px] font-bold uppercase mb-4">
              Problem/Challenge
            </h2>
            <p className="manrope text-[18px] font-medium">
              The client approached us with a specific requirement to bolster
              their online visibility. Despite possessing a pre-existing website
              constructed by a third party, it was unable to garner the expected
              level of engagement and traffic. Among several avenues of digital
              marketing strategies they considered, the client displayed a
              distinct interest in Search Engine Optimisation to enhance their
              website’s performance and reach.
            </p>
          </div>

          <div>
            <Image
              src="/smartsecurity/smart-security-prob.png"
              alt="Smart Security"
              width={462}
              height={294}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:grid lg:grid-cols-[377px_1fr] gap-10">
          {/* LEFT */}
          <div className="space-y-0">
            {benefitItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  onMouseEnter={() => {
                    if (window.innerWidth >= 1024) setActiveIndex(index);
                  }}
                  className={`w-full flex items-center justify-between text-left 
                  text-[18px] sm:text-[20px] md:text-[24px] cursor-pointer font-semibold chakra uppercase 
                  leading-[1.8em] tracking-[0.32px] transition-colors px-0 py-2.5 border-0 bg-transparent                  
                  ${
                    isActive
                      ? "text-[#10C8F0]"
                      : "text-white hover:text-[#10C8F0]"
                  }`}
                >
                  <span>{item.title}</span>

                  <span className="ml-auto">
                    <ArrowRight
                      size={18}
                      className={isActive ? "text-[#10C8F0]" : "text-white"}
                    />
                  </span>
                </button>
              );
            })}
          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex mt-2 flex-col justify-between">
            <div className="space-y-5 text-white">
              {activeItem.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-[18px] poppins font-normal leading-[1.8em] text-white"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden space-y-4">
          {strategies.map((item, index) => (
            <div key={index} className="border-b border-gray-600 pb-4">
              <button
                onClick={() => setActive(active === index ? null : index)}
                className="w-full chakra text-[24px] text-left font-semibold flex justify-between"
              >
                {item.title}
                <span>{active === index ? "-" : "+"}</span>
              </button>

              {active === index && (
                <div className="mt-2 manrope text-white space-y-2">
                  {(Array.isArray(item.content)
                    ? item.content
                    : [item.content]
                  ).map((text, i) => (
                    <p key={i}>{text}</p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="my-16">
          <Image
            src="/smartsecurity/smart-security-report.jpg"
            alt="SEO Results"
            width={2000}
            height={800}
            className="w-full h-auto"
          />
        </div>

        {/* Closing */}
        <div>
          <h2 className="chakra text-[36px] md:text-[64px] font-bold uppercase mb-4">
            Closing Comments
          </h2>

          <p className="manrope text-[18px] font-medium">
            The result of implementing these strategies was a significant
            increase in keyword positions, organic users, and organic inquiries.
            Our data-driven, multi-faceted approach allowed us to improve the
            visibility of Smart Security’s online presence, thereby fulfilling
            their business objectives.
          </p>
        </div>
      </Container>
    </section>
  );
}
