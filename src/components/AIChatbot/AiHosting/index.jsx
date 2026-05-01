"use client";

import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

export default function AiHosting() {
  return (
    <section
      className="bg-black flex items-center py-20 h-125"
      style={{
        backgroundImage: "url('/aichatbots/hosting-mind.png')",
        backgroundPosition: "250px 74px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "540px auto",
      }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 items-center"> 
          <div />
          <div>
            <h2 className="text-white text-[40px] sm:text-[60px] xl:text-[80px] font-bold uppercase leading-[1.2em] chakra">
              Hosting & Management
            </h2>

            <ul className="mt-6 space-y-5">
              {[
                "1.5 hours of monthly maintenance (non-cumulative)",
                "Up to 2000 chatbot messages",
                "A maximum of 100 leads transferred via API",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <ArrowRight className="text-[#10C8F0] w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                  <span className="text-[#10C8F0] text-[16px] sm:text-[18px] font-bold uppercase chakra">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}