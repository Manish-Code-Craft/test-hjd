"use client";

import { useEffect, useState } from "react";
import Container from "@/components/Container";
import { Search, Bot, TrendingUp } from "lucide-react"; // ✅ ADDED

// ✅ Counter Logic (ONLY ADDITION)
function Counter({ value }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const num = parseFloat(value);
    let start = 0;

    const duration = 3000;
    const step = num / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  const suffix = value.replace(/[0-9.]/g, "");

  return (
    <>
      {Number.isInteger(count) ? count : count.toFixed(1)}
      {suffix}
    </>
  );
}

export default function LandscapeSection() {
  const stats = [
    {
      value: "25%",
      text: "Projected decline in organic search traffic by 2026",
      source: "Gartner, 2024",
    },
    {
      value: "93%",
      text: "AI search sessions that end without a website click",
      source: "Industry Research, 2026",
    },
    {
      value: "2.8B",
      text: "Monthly active ChatGPT users worldwide",
      source: "OpenAI, Jan 2026",
    },
    {
      value: "1.5B",
      text: "Monthly users reached by Google AI Overviews",
      source: "Google, 2026",
    },
  ];

  const cards = [
    {
      title: "The Old Model: Rank & Click",
      desc: "Traditional SEO optimised for position on a results page. Success meant ranking in the top 10 blue links, earning a click, and then converting on-site. Consumers chose from a list.",
    },
    {
      title: "The New Model: Cite & Recommend",
      desc: "AI engines synthesise information and deliver a direct answer. They cite only 2–7 sources per response — far fewer than the 10+ results on a traditional search page. If you're not cited, you're invisible.",
    },
    {
      title: "The Compound Advantage",
      desc: "AI engines learn which brands to trust over time. Early movers build citation authority that compounds — creating a flywheel that becomes progressively harder for competitors to displace.",
    },
  ];
 
  const icons = [Search, Bot, TrendingUp];

  return (
    <section className="py-16 bg-[#020A12] text-white px-5 ">
      <div className="max-w-233 mx-auto px-4 sm:px-6 md:px-5"> 
        {/* TOP LABEL */}
        <h4 className="chakra text-[11.52px] font-bold uppercase leading-[1.3em] tracking-[0.16em] text-[#10C8F0] mb-3">
          01 — The Landscape
        </h4>

        {/* TITLE */}
        <h2 className="chakra text-[28.8px] font-bold uppercase tracking-[0.015em] leading-[1.25em] mb-5">
          Search Has Fundamentally Changed
        </h2>

        {/* DESC */}
        <p className="manrope text-[16px] text-[#FFFFFFC7] font-normal leading-[1.7em] mb-10 max-w-180">
          For two decades, businesses have invested in appearing on page one of
          Google. That playbook is no longer enough. Consumers are rapidly
          shifting from clicking through search results to receiving direct
          answers from AI assistants — and the businesses that get cited in
          those answers win.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 bg-[#101820EB]">
          {stats.map((item, i) => (
            <div
              key={i}
              className="text-center px-5 py-8 border-r border-[#10C8F029] last:border-none space-y-5"
            >
              <h3 className="chakra text-[38.4px] font-bold text-[#10C8F0]">
                <Counter value={item.value} />
              </h3>

              <p className="poppins text-[12px] font-medium uppercase tracking-[0.06em] text-[#FFFFFFC7]">
                {item.text}
              </p>

              <p className="manrope text-[10.4px] text-[#FFFFFF7A]">
                {item.source}
              </p>
            </div>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {cards.map((item, i) => {
            const Icon = icons[i];
            return (
              <div
                key={i}
                className="border border-[#FFFFFF14] rounded-[14px] px-6 pt-7 pb-17.5 hover:border-[#10C8F033] hover:shadow-[0_0_20px_#10C8F033] transition"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-4 border border-[#10C8F029] rounded-[10px]">
                  <Icon className="w-6 h-6 text-[#10C8F0]" />
                </div>

                <h3 className="chakra text-[16px] leading-[1.2em] font-bold uppercase mb-4">
                  {item.title}
                </h3>

                <p className="manrope text-[14.08px] text-[#FFFFFFC7] leading-[1.65em]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM BOX */}
        <div className="mt-12 border border-[#10C8F033] bg-[linear-gradient(135deg,rgba(16,200,240,0.06)_0%,rgba(16,200,240,0.02)_100%)] rounded-[14px] py-8 px-7">
          <h3 className="chakra text-[14.4px] leading-[1em] font-bold uppercase text-[#10C8F0] mb-3">
            The Bottom Line
          </h3>

          <p className="manrope text-[14.72px] text-[#FFFFFFC7] font-normal leading-[1.4em]">
            When a potential customer asks an AI assistant "Who are the best
            [service providers] in [city]?", that AI's answer is increasingly
            replacing the Google search results page. The question is no longer
            whether your business ranks — it's whether your business gets{" "}
            <span className="text-[#10C8F0]">named</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
