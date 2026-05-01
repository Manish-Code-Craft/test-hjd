"use client";
import Container from "@/components/Container";
import { useState } from "react";

export default function GoogleProcess() {
  const [active, setActive] = useState(1);

  const data = [
    {
      id: 1,
      title: "NO CONTRACTS",
      content:
        "We don’t believe in locking you into long contracts. Instead, we set your expectations correct from the beginning and deliver to make sure you stay happy. If you feel the need to stop your services with us, you are able to at any point.",
    },
    {
      id: 2,
      title: "BESPOKE PRICING",
      content:
        "We understand that, depending on your current advertising situation, not all campaigns require the same level of work and attention. Therefore, we pride ourselves on offering flexible pricing options suited to your business needs.",
    },
    {
      id: 3,
      title: "COMPLIMENTARY AUDIT",
      content:
        "If you are unsure about whether you’re getting the most out of your campaign, or you simply want a second pair of eyes to cast over your campaign. We can offer you a free, no obligation review, complete with suggestions on what could be implemented to improve performance.",
    },
    {
      id: 4,
      title: "EXTENSIVE TRACKING",
      content:
        "We believe that you should know exactly what you’re getting in return for every dollar invested into your campaign. That is why we always implement full conversion tracking of all your important goals, and work with you to figure out what ROI you’re getting from the campaign.",
    },
  ];

  return (
    <section className="bg-[#090F14] py-17.5 text-white">
      <Container>
        <div className="grid lg:grid-cols-[446px_1fr] items-center gap-10">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-[36px] md:text-[48px] xl:text-[64px] font-bold chakra tracking-[0.32px] leading-[1.6em] lg:leading-[1.8em]">
              Process
            </h2>

            {/* VIDEO */}
            <div className="relative mt-6">
              <video
                className="w-full h-auto"
                src="/seo/seo-process.mp4"
                autoPlay
                loop
                muted
                playsInline
              />
              <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(#090F1400_40%,#090F14_70%)]" />
            </div>
          </div>

          {/* RIGHT SIDE ACCORDION */}
          <div>
            {data.map((item) => (
              <div
                key={item.id}
                className="border-y border-[#3C4A56] lg:py-2 py-4 cursor-pointer"
                onClick={() =>
                  setActive((prev) =>
                    item.id === 1
                      ? 1 
                      : prev === item.id
                      ? 1 
                      : item.id
                  )
                }
              >
                {/* TITLE */}
                <div className="flex items-center gap-2.5 lg:gap-5">
                  <span className="text-white text-2xl md:text-[36px] xl:text-[55px] chakra font-light">
                    {String(item.id).padStart(2, "0")}.
                  </span>

                  <h3 className="text-[#10C8F0] text-2xl md:text-[36px] xl:text-[55px] font-medium chakra">
                    {item.title}
                  </h3>
                </div>

                {/* CONTENT */}
                {active === item.id && (
                  <p className="my-5 text-white manrope text-[15px] md:text-[18px] font-medium tracking-normal">
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}