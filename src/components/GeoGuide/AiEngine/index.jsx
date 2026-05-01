"use client";

import { useEffect, useState } from "react";
import { Fingerprint, FileText, Network, ShieldCheck, Clock, Globe,} from "lucide-react";
 
//  (Counter)
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

export default function AiEngine() {
  const stats = [
    {
      value: "41%",
      text: "Visibility boost from adding statistics to content",
      source: "Princeton/Georgia Tech GEO Study",
    },
    {
      value: "3x",
      text: "Higher citation rate for sites with author schema",
      source: "Industry Data, 2026",
    },
    {
      value: "30%",
      text: "Of brands maintain visibility from one AI answer to the next",
      source: "GEO Research, 2026",
    },
    {
      value: "44%",
      text: "Of all LLM citations come from the first 30% of page text",
      source: "Citation Analysis, 2026",
    },
  ];

  const cards = [
    {
      title: "Entity Clarity",
      desc: "AI engines need to unambiguously identify who you are, what you do, and where you operate. Structured data (JSON-LD schema) provides this machine-readable identity. Without it, AI engines may confuse your brand with others or simply skip you.",
    },
    {
      title: "Content Extractability",
      desc: "AI engines extract quotable passages. Content structured with clear question-based headings, concise answer blocks in the first 200 words, and specific data points is dramatically easier for AI systems to cite with confidence.",
    },
    {
      title: "Multi-Source Corroboration",
      desc: "AI engines cross-reference your brand across independent domains — review sites, industry publications, directories, news outlets. Consistent positive mentions across multiple sources signal trustworthiness far more than your own website alone.",
    },
    {
      title: "Authority & Trust (E-E-A-T)",
      desc: "Named authors with visible credentials, verifiable claims backed by data, industry accreditations, and expert commentary are the hallmarks of content AI engines trust enough to cite. Anonymous brand content is cited at significantly lower rates.",
    },
    {
      title: "Content Freshness",
      desc: "50% of content cited in AI search is less than 13 weeks old. Pages not updated quarterly are 3x more likely to lose citations. AI engines aggressively favour recently published or recently updated content over stale pages.",
    },
    {
      title: "Technical Accessibility",
      desc: "If AI crawlers (GPTBot, ClaudeBot, PerplexityBot) are blocked by your robots.txt or hosting provider, your content is completely invisible — no matter how good it is. This is one of the most common and easily fixable GEO failures.",
    },
  ];
 
  const icons = [ Fingerprint, FileText,Network, ShieldCheck, Clock,  Globe, ];

  return (
    <section className=" bg-[#020A12] text-white px-5 ">
      <div className="max-w-233 mx-auto px-4 sm:px-6 md:px-5 py-16 border-t border-[#FFFFFF14]">
        {/* TOP LABEL */}
        <h4 className="chakra text-[11.52px] font-bold uppercase leading-[1.3em] tracking-[0.16em] text-[#10C8F0] mb-3">
          03 — How AI Engines Decide
        </h4>

        {/* TITLE */}
        <h2 className="chakra text-[28.8px] font-bold uppercase tracking-[0.015em] leading-[1.25em] mb-5">
          What Makes an AI Engine Cite Your Brand?
        </h2>

        {/* DESC */}
        <p className="manrope text-[16px] text-[#FFFFFFC7] font-normal leading-[1.7em] mb-10 max-w-180">
          AI engines don’t rank websites. They synthesise answers from the
          sources they trust most. Research reveals the specific signals that
          determine which brands earn citations — and which remain invisible.
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
      </div>
    </section>
  );
}
