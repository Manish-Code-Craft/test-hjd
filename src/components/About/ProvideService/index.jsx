"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/Container";

const benefitItems = [
  {
    title: "FULL TRANSPARENCY",
    paragraphs: [
      "Clients often come to us and express a concern that their current marketing agency is not always transparent in terms of work being carried out.",
      "That is why we offer a fully transparent service that not only provides a live reporting dashboard so that our clients can monitor the performance of their campaign at any time but also provide monthly work reports.",
      "These reports identify what has been done and when in order for you to be fully up to speed with the work being carried out on your website.",
    ],
  },
  {
    title: "RESULTS DRIVEN",
    paragraphs: [
      "Allowing clients to correctly understand the performance of their campaign is imperative. As a result, we ensure that all of the necessary tracking is in place so that you are able to account for every single dollar invested. Being a results driven agency allows us to build trust and credibility with our clients. All results are compiled and reported using our state of the art reporting dashboard.",
    ],
  },
  {
    title: "NO CONTRACTS",
    paragraphs: [
      "We do not believe in holding clients against their will as a result of being tied into lengthy contracts. At High Jump Digital we do not have minimum term contracts and ultimately expect our clients to stay with us because they are happy with the level of service we are offering along with the results.",
    ],
  },
  {
    title: "PERSONABLE SERVICE",
    paragraphs: [
      "We offer a highly personable service to all of our clients. You will not be passed from pillar to post every step of the way throughout your client journey. This can dilute the process itself and can also blur the vision and clarity of a campaign. We ensure that you deal with the same experienced account manager from inception to ensure your expectations become a reality.",
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

export default function ProvideService() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = benefitItems[activeIndex];

  return (
    <section className="bg-[#090F14] transition-all duration-300 py-12.5 xl:h-132">
      <Container>
        <h2 className="text-[30px] xl:text-[63px] chakra font-bold uppercase leading-[1.8em] tracking-[0.32px] text-white mb-6">
          PROVIDING A DIFFERENT TYPE OF SERVICE
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
                    className={`w-full lg:w-87 flex items-center justify-between gap-4 text-left text-[18px] sm:text-[20px] md:text-[24px] font-semibold chakra uppercase leading-[1.8em] cursor-pointer tracking-[0.32px] transition-colors 
                       px-7.5 py-5 lg:px-0 lg:py-2.5 border border-[#10c8f0] lg:border-0  bg-[#88888830] lg:bg-transparent
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
          </div>
        </div>
      </Container>
    </section>
  );
}
