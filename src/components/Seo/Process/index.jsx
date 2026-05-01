"use client";
import Container from "@/components/Container";
import { useState } from "react";

export default function Process() {
  const [active, setActive] = useState(1);

  const data = [
    {
      id: 1,
      title: "NO CONTRACTS",
      content:
        "That’s right, no contracts! We aim to make sure that your expectations are set right to begin with and that you are clear on the process and what to expect. Our goal is to over deliver so that you choose to stay on as a happy client. And if you do feel the need to stop your services with us, you are free to do so.",
    },
    {
      id: 2,
      title: "100% TRANSPARENCY",
      content:
        "We want our clients to know exactly what they are getting for their money and to make sure they are kept up to date on what is going on and why. We will provide reports and evidence on all aspects of what we do for your website. From content creation to link building, we don’t hide a thing, because we’re proud of the quality work we deliver.",
    },
    {
      id: 3,
      title: "WHITE HAT",
      content:
        "Unlike many in our industry, we do not believe in using dated, short-term ranking methods that are going to hurt your site in the long run. We only deliver quality work that will continue to provide value to your site for the life of it.",
    },
    {
      id: 4,
      title: "FULL ONSITE AUDIT/REVIEW",
      content:
        "Before carrying out any changes to a website, we always conduct a thorough review of our clients site. This allows us to identify areas of improvement but also aspects of the site that are set up correctly.",
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