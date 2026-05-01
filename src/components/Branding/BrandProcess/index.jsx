"use client";
import Container from "@/components/Container";
import { useState } from "react";

export default function BrandProcess() {
  const [active, setActive] = useState(1);

  const data = [
    {
      id: 1,
      title: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius arcu vel venenatis iaculis. Donec pharetra semper vulputate. Quisque vulputate eros eget arcu interdum, nec lacinia felis sagittis.",
    },
    {
      id: 2,
      title: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius arcu vel venenatis iaculis. Donec pharetra semper vulputate. Quisque vulputate eros eget arcu interdum, nec lacinia felis sagittis.",
    },
    {
      id: 3,
      title: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius arcu vel venenatis iaculis. Donec pharetra semper vulputate. Quisque vulputate eros eget arcu interdum, nec lacinia felis sagittis.",
    },
    {
      id: 4,
      title: "Lorem ipsum",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius arcu vel venenatis iaculis. Donec pharetra semper vulputate. Quisque vulputate eros eget arcu interdum, nec lacinia felis sagittis.",
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
                className="w-full h-100 object-cover"
                src="/branding/brand-process-faq.mp4"
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
                  <span className="text-white text-2xl md:text-[36px] lg:text-[55px] chakra font-light">
                    {String(item.id).padStart(2, "0")}.
                  </span>

                  <h3 className="text-[#10C8F0] text-2xl md:text-[36px] lg:text-[55px] font-medium chakra">
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