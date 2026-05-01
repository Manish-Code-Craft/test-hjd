"use client";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

const seoPoints = [
  "UNIQUE & PROFESSIONAL DESIGNS",
  "FAST WEBSITES, CLEAN & EASY TO USE",
  "STRUCTURED FOR THE BEST UX",
  "MOBILE & TABLET RESPONSIVE",
];

export default function WhyDesign() {
  return (
    <section className="py-20 bg-[#090F14] text-white">
      <Container>
        <h2 className="text-[30px] lg:text-[48px] xl:text-[64px] chakra leading-[1.2em] tracking-[0.32px] font-bold mb-6">
          HIGH PERFORMANCE WEB DESIGN
        </h2>
        <div className="grid md:grid-cols-2 gap-10 items-center justify-between ">
          {/* LEFT SIDE */}
          <div className="p-2.5">
            <ul className="space-y-5">
              {seoPoints.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  {/* Lucide Icon */}
                  <ArrowRight className="w-6 h-5 mt-1 shrink-0" />

                  <span className="text-[16px] md:text-[18px] xl:text-[24px] font-bold chakra">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT SIDE (VIDEO + OVERLAY) */}
          <div className="relative p-2.5 flex xl:justify-end">
            <div className="relative">
              <video
                className="h-104.5 w-181.5 "
                src="/webdesign/why-webdesign.mp4"
                autoPlay
                loop
                muted
                playsInline
              />

              <div className="absolute inset-0 rounded-xl pointer-events-none bg-[radial-gradient(circle_at_center,transparent_30%,#090F14_85%)]" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
