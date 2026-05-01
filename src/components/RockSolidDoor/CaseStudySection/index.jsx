"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

const strategies = [
  {
    title: "SEO Optimization",
    content:
      "Given Rock Solid Doors' emphasis on SEO, our starting point was a meticulous audit of their current website. This deep dive enabled us to spot opportunities for refining meta-tags, keyword embedding, backlinks, site structure, and load times, making the website more attractive for search engine crawlers.",
  },
  {
    title: "Keyword Strategy",
    content:
      "A thorough keyword exploration was undertaken to pinpoint those with high traffic potential and relevance to the door industry. Beyond merely infusing these keywords into the site, we also championed a long-tail keyword approach to tap into specific and niche search queries. The goal? Elevate both the volume and quality of organic traffic, leading to more organic interactions.",
  },
  {
    title: "Content Strategy",
    content:
      "Complementing our keyword efforts, we designed a dynamic content strategy encompassing regular blogs, insights into the latest in-door design and functionality, and detailed articles centred around home safety and aesthetics. This was geared towards cementing Rock Solid Doors' position as an industry authority while simultaneously boosting their SEO stature.",
  },
  {
    title: "Local SEO",
    content:
      "Given Rock Solid Doors' UK base, local SEO was paramount. This meant refining their Google My Business profile, ensuring consistent NAP details across platforms, and rallying local customers for reviews.",
  },
  {
    title: "Backlink Building",
    content:
      "Part of our mission was to uplift the site’s domain authority. Our method? Building top-notch backlinks. We shortlisted authoritative sites and blogs in the home improvement domain for guest post outreach.",
  },
  {
    title: "Performance Monitoring and Reporting",
    content:
      "To ensure our strategy's potency, we set up rigorous performance tracking. Employing a suite of tools, we kept a tab on website health, keyword standings, and avenues for conversion rate optimization.",
  },
];

export default function CaseStudySection() {
  const [active, setActive] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const benefitItems = strategies.map((item) => ({
    title: item.title,
    paragraphs: [item.content],
  }));

  const activeItem = benefitItems[activeIndex];

  return (
    <section className="bg-[#0B0F1A] py-17.5 text-white">
      <Container>

        {/* Problem Section */}
        <div className="border-b border-[#898A93] mb-12.5 grid lg:grid-cols-2 xl:grid-cols-[63.788%_1fr] gap-5 lg:gap-2 items-center">
          <div>
            <h2 className="chakra text-[36px] md:text-[48px] xl:text-[64px] font-bold uppercase mb-4">
              Problem/Challenge
            </h2>
            <p className="manrope text-[18px] font-medium mb-12">
              Rock Solid Doors reached out to us with a pressing need to elevate their online presence. Among the various digital marketing solutions they contemplated, Rock Solid Doors was particularly keen on harnessing the power of Search Engine Optimisation (SEO) to amplify their website’s effectiveness.
            </p>
          </div>

          <div>
            <Image
              src="/rocksoliddoor/Rocksolid-door-problem.png"
              alt="Rock Solid Doors"
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

        <p className="manrope font-medium text-[18px] mb-10 ">
          Our plan of action for Rock Solid Doors was holistic, touching upon every facet of their online identity to bolster visibility and customer engagement. Here’s a breakdown of our strategies:
        </p>

        {/* ✅ FIXED GRID */}
        <div className="hidden lg:grid lg:grid-cols-[577px_1fr] gap-10">

          {/* ✅ LEFT SIDE (FIXED DESIGN) */}
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

          {/* RIGHT SIDE */}
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

        {/* Mobile Accordion */}
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
                <p className="mt-2 manrope  text-white">{item.content}</p>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Image */}
        <div className="my-16">
          <Image
            src="/rocksoliddoor/highjumpdigitalrank.png"
            alt="SEO Results"
            width={2000}
            height={800}
            className="w-full h-auto"
          />
        </div>

        {/* Closing */}
        <div>
          <h2 className="chakra text-[48px] md:text-[64px] font-bold uppercase mb-4">
            Closing Comments
          </h2>

          <p className="manrope text-[18px] font-medium">
            The culmination of these efforts was a marked upswing in keyword rankings, organic visitors, and genuine inquiries. Our analytical, multifaceted strategy propelled Rock Solid Doors’ online visibility, aligning with their business aspirations.
          </p>
        </div>

      </Container>
    </section>
  );
}