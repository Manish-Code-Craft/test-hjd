"use client";
import Container from "@/components/Container";
import { useState } from "react";

export default function FacebookProcess() {
  const [active, setActive] = useState(1);

  const data = [
    {
      id: 1,
      title: "NO CONTRACTS",
      content:
        "Fear not, we do not attempt to lock you into lengthy contacts! Our mission is to provide the results you need to stay on with us as a satisfied client. If you wish to leave for whatever reason, you are free to do so.",
    },
    {
      id: 2,
      title: "FACEBOOK CERTIFIED",
      content:
        "This means that your campaign manager will have completed comprehensive assessments set by Facebook and is certified in managing all types of campaigns. We stick by our tune that you will always deal with an industry expert.",
    },
    {
      id: 3,
      title: "COMPLIMENTARY AUDIT",
      content:
        "If you’re currently running a Facebook campaign either by yourself or with an agency and would like an obligation free review with suggestions, we are happy to provide this for you.",
    },
    {
      id: 4,
      title: "AD CREATIVE GENIUS",
      content:
        "Utilise our specialist design team to work with you on creating awesome ads that not only convert, but represent your company and brand in the best possible way.",
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