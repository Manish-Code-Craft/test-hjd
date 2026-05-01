"use client";
import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

const seoPoints = [
  "GET FOUND ON THE WORLD'S BIGGEST SEARCH ENGINE",
  "100% MEASURABLE PROGRESS",
  "INCREASE THE NUMBER OF PHONE CALLS AND ENQUIRIES",
  "BUILD YOUR WEBSITE CONTENT FOR LONG TERM GROWTH",
];

export default function WhySeo() {
  return (
    <section className="py-20 bg-[#090F14] text-white">
      <Container>
        <div className="grid md:grid-cols-2 xl:grid-cols-[836px_1fr] gap-10 items-center justify-between ">
          
          {/* LEFT SIDE */}
          <div className="p-2.5">
            <h2 className="text-[30px] lg:text-[48px] xl:text-[64px] chakra leading-[1.2em] tracking-[0.32px] font-bold mb-6">
              WHY USE SEO?
            </h2>

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
                className="h-118 w-118 rounded-xl"
                src="/seo/why-seo.mp4"
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