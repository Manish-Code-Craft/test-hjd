"use client";

import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

export default function AiTechnology() {
  return (
    <section
      className="bg-black relative overflow-hidden flex items-center min-h-125"
      style={{
        backgroundImage: "url('/aichatbots/aitechnology.png')",
        backgroundPosition: "-250px -17px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "1800px auto",
      }}
    >
      <Container>
        <div className="grid lg:grid-cols-2 items-center">
          <div />

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-white text-[40px] sm:text-[60px] xl:text-[80px] font-bold uppercase leading-[1.2em] chakra">
              Technologies
            </h2>

            <ul className="mt-6 space-y-5">
              
              <li className="flex items-center gap-3 group">
                <ArrowRight className="text-[#10C8F0] w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                <span className="text-[#10C8F0] text-[16px] sm:text-[18px] font-bold uppercase chakra">
                  OpenAI’s GPT-3.5 & GPT-4
                </span>
              </li>

              <li className="flex items-center gap-3 group">
                <ArrowRight className="text-[#10C8F0] w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
                <span className="text-[#10C8F0] text-[16px] sm:text-[18px] font-bold uppercase chakra">
                  Stack AI, Voiceflow
                </span>
              </li>

            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}