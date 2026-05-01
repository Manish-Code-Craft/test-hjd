"use client";

import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

export default function AiAdditional() {
  return (
    <section
      className="bg-[#05141F] flex items-center py-20"
      style={{
        backgroundImage: "url('/aichatbots/aioptions.jpg')",
        backgroundPosition: "85px -1px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <Container>
        <div className="grid lg:grid-cols-3">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-white text-[40px] sm:text-[60px] xl:text-[80px] font-bold uppercase leading-[1.2em] chakra">
              Additional <br /> Options
            </h2>

            <ul className="mt-6 space-y-5">
              {[
                "SMS lead notifications",
                "Additional API integration",
                "Extra 5,000 messages",
                "Additional 100 leads via API",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <ArrowRight className="text-[#10C8F0] w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  <span className="text-[#10C8F0] text-[16px] sm:text-[18px] font-semibold uppercase chakra">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div />
          <div />

        </div>
      </Container>
    </section>
  );
}