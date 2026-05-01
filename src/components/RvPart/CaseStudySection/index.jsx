"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

const strategies = [
  {
    title: "Search Campaigns",
    content:
      "The search campaigns that we set up has allowed us to test multiple variations of ads which in turn over time has allowed us to optimise the account efficiently. The search campaigns have allowed us to target a wide variety of relevant keywords.",
  },
  {
    title: "Shopping Campaigns",
    content:
      "The shopping campaigns allowed us to create product specific campaigns that showed both images and pricing. This worked incredibly well along side the clients search campaigns in order to provide maximum visibility to the client.",
  },
  {
    title: "Performance Max",
    content:
      "In keeping with Google AdWords best practices, we slowly transitioned the client over to the use of more performance max campaigns within the account. Through a period of testing we were able to identify which areas of the clients business were best suited to performance max which in turn has allowed us to see large gains across the board in terms of revenue generated.",
  },
  {
    title: "Remarketing",
    content:
      "Having managed the clients account for quite some time, we have been able to build very successful remarketing campaigns. These have been particularly valuable to the client when they are running specific promotions throughout the year. Remarketing has given us the potential to maximise the clients returns on every dollar invested.",
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
        {/* Problem Section */}
        <div className="border-b border-[#898A93] mb-12.5 grid lg:grid-cols-2 xl:grid-cols-[63.788%_1fr] gap-5 lg:gap-2 items-center">
          <div>
            <h2 className="chakra text-[36px] md:text-[48px] xl:text-[64px] font-bold uppercase mb-4">
            Problem/Challenge
            </h2>
            <p className="manrope text-[18px] font-medium mb-12">
            The client approached us with a specific requirement to boost online sales through their website. Although they have previously seen some level of results, they felt that they were fairly stagnant in the market place. The client understood the importance of cost per click marketing and in particular the value that AdWords could provide their business.
            </p>
          </div>

          <div>
            <Image
              src="/rvpartexpress/rvparts-prob.png"
              alt="Rv Part Express"
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
        <p className="manrope text-[18px] font-medium">
            Our approach for RV Parts Express was a comprehensive one, that involved running multiple campaigns and campaign types in order to maximise visibility and increase the revenue generated through their site.
          </p>

            <p className="manrope text-[18px] font-medium my-5 lg:mb-5">
            We adopted the following campaign types:
          </p>

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
            src="/rvpartexpress/rvparts-report.png"
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
           The result of implementing these strategies was a significant increase in keyword positions, organic users, and organic inquiries. Our data-driven, multi-faceted approach allowed us to improve the visibility of Smart Security’s online presence, thereby fulfilling their business objectives.
          </p>

        </div>

      </Container>
    </section>
  );
}