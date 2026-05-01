"use client";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

const seoPoints = [
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
  "Lorem ipsum dolor sit amet",
];

export default function WhyBrand() {
  return (
    <section className="py-20 bg-[#090F14] text-white">
      <Container>
        <h2 className="text-[30px] lg:text-[48px] xl:text-[64px] chakra leading-[1.2em] tracking-[0.32px] font-bold">
          WHAT DOES BRANDING DO?
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-[1fr_726px] gap-10 items-center justify-between ">
          
          {/* LEFT SIDE */}
          <div className="p-2.5">
            <ul className="space-y-5">
              {seoPoints.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  
                  <ArrowRight className="w-6 h-5 mt-1 shrink-0" />

                  <span className="text-[16px] md:text-[18px] xl:text-[24px] font-bold uppercase chakra">
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
                className="h-102 w-181.5"
                src="/branding/why-brand.mp4"  
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