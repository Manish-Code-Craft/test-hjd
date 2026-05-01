"use client";

import Container from "@/components/Container";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AiSetup() {
  return (
    <section className="bg-[#05141F] py-20">
      <Container>
        <div className="grid lg:grid-cols-3 gap-10 items-center">

          {/* LEFT COLUMN */}
          <div>
            <h2 className="text-white text-[40px] sm:text-[60px] xl:text-[80px] font-bold uppercase leading-[1.2em] chakra">
              Setup
            </h2>

            <ul className="mt-6 space-y-4">
              {[
                "Complete chatbot configuration",
                "Base instructions for AI Chatbot",
                "Lead capture setup",
                "Notifications for lead capture",
                "One automated lead capture process",
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

          {/* MIDDLE COLUMN */}
          <div>
            <ul className="space-y-4 mt-20 lg:mt-30">
              {[
                "Knowledge base setup",
                "CSV, PDF, Excel, Word, or text",
                "AI knowledge base guidelines",
                "Thorough testing and debugging",
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

          {/* RIGHT COLUMN (IMAGE) */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/aichatbots/aisetup.png"
              alt="AI Setup"
              width={414}
              height={410}
              className="w-75 lg:w-103.5 h-auto"
            />
          </div>

        </div>
      </Container>
    </section>
  );
}