"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

const strategies = [
  {
    title: "SEO Audit Results",
    content:
      "The initial SEO audit revealed several areas for improvement. The website had numerous broken links, missing meta descriptions, and images without alt text. The site speed was also found to be slower than the industry standard.",
  },
  {
    title: "Keyword",
    content:
      "A comprehensive keyword research was conducted to identify high-volume, relevant keywords related to transport and logistics services. Some of the targeted keywords included 'container transport services,' 'general transport services,' 'logistics services Australia,' among others.",
  },
  {
    title: "On-Page SEO",
    content:
      "Content Optimization: A content calendar was developed to consistently publish high-quality, informative, and relevant blog posts that support the service pages and target the identified keywords. Each blog post was meticulously crafted to provide value to the readers, incorporating internal links to service pages and a clear call-to-action. Metadata Optimization: All web pages were optimized with keyword-rich title tags, meta descriptions, and header tags to enhance search engine visibility and click-through rates.",
  },
  {
    title: "Off-Page SEO",
    content:
      "Link Building: A robust link-building strategy was implemented to acquire high-quality, relevant backlinks from authoritative websites in the transport and logistics industry. Outreach campaigns were conducted to offer guest posts, and a focus was placed on obtaining backlinks from local business directories and industry-specific forums to enhance the website’s domain authority and search rankings.",
  },

  // ✅ FIXED ONLY THIS PART
  {
    title: "Technical SEO",
    content: [
      "Site Speed Optimization: The website’s loading speed was significantly improved by optimizing images, leveraging browser caching, and minimizing the use of heavy scripts and plugins.",
      "Mobile Optimization: The website was optimized for mobile users by implementing a responsive design, ensuring that all elements are displayed correctly on various screen sizes and devices, and improving the site's mobile loading speed.",
      "By addressing these areas, the SEO campaign laid a solid foundation for improving Reef Group's organic search rankings, online visibility, and user experience, contributing to the overall success of the campaign.",
    ],
  },

];

export default function CaseStudySection() {
  const [active, setActive] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  // ✅ FIX: support string + array (NO UI CHANGE)
  const benefitItems = strategies.map((item) => ({
    title: item.title,
    paragraphs: Array.isArray(item.content)
      ? item.content
      : [item.content],
  }));

  const activeItem = benefitItems[activeIndex];

  return (
    <section className="bg-[#0B0F1A] py-17.5 text-white">
      <Container>

        {/* Project Goals */}
        <div>
          <h2 className="chakra text-[36px] lg:text-[64px] font-bold uppercase mb-4">
            Project Goals
          </h2>
          <p className="manrope text-[18px] font-medium mb-12">
            The primary objective of the SEO campaign for Reef Group was to enhance organic rankings for keywords related to their diverse transport services, ultimately boosting their online visibility and attracting more potential customers.
          </p>
        </div>

        {/* Problem Section */}
        <div className="border-b border-[#898A93] mb-12.5 grid lg:grid-cols-2 xl:grid-cols-[63.788%_1fr] gap-5 lg:gap-2 items-center">
          <div>
            <h2 className="chakra text-[36px] md:text-[48px] xl:text-[64px] font-bold uppercase mb-4">
              Problem/Challenge
            </h2>
            <p className="manrope text-[18px] font-medium mb-12">
              Before the commencement of the SEO campaign, Reef Group faced significant challenges in acquiring high-quality, non-spam backlinks. Another challenge was creating compelling and supportive blog content for their service pages.
            </p>
          </div>

          <div>
            <Image
              src="/reefgroup/reef-group-problem.png"
              alt="Reef Group"
              width={462}
              height={294}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Strategy */}
        <h2 className="chakra text-[36px] md:text-[64px] font-bold uppercase mb-4">
          STRATEGY/SOLUTION
        </h2>

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
                      className={
                        isActive ? "text-[#10C8F0]" : "text-white"
                      }
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
            src="/reefgroup/Reef-group-Report.jpg"
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
            The SEO campaign for Reef Group was meticulously planned and executed, addressing the key challenges of link building and content creation. The strategic approach to on-page and off-page SEO, coupled with [any other strategies used], has set the foundation for improved organic rankings for relevant keywords.
          </p>

            <p className="manrope text-[18px] font-medium mt-5">
            By overcoming the initial challenges and implementing a robust SEO strategy, Reef Group is now better positioned to attract organic traffic, convert leads, and continue growing its online presence.
          </p>

        </div>

      </Container>
    </section>
  );
}