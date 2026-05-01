"use client";

import { useEffect, useState } from "react"; 
import { FlaskConical, TrendingUp, BarChart3 } from "lucide-react";

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

export default function Evidence() {
  const stats = [
    {
      value: "61%",
      text: "Decline in organic CTR for informational queries since AI Overviews launched",
      source: "Industry Analysis, 2026",
    },
    {
      value: "2.8x",
      text: "Higher citation rates for pages with sequential headings & rich schema",
      source: "GEO Research, 2026",
    },
    {
      value: "200%+",
      text: "Growth in ChatGPT search referrals since mid-2025",
      source: "Traffic Analysis, 2026",
    },
    {
      value: "315%",
      text: "ROI achieved by a mid-sized enterprise on GEO investment in year one",
      source: "Case Study, 2026",
    },
  ];

  const cards = [
    {
      title: "The Princeton-Georgia Tech Study",
      desc: "The landmark peer-reviewed GEO study (KDD 2024) found that adding statistics to content produces the single largest visibility improvement (+41%), that structured data formats receive 3x more citations, and that quotation addition improves impression scores by 28%.",
    },
    {
      title: "Proven ROI",
      desc: "Early adopters are seeing transformative results: one agency achieved an 8,337% increase in ChatGPT referral sessions. A FinTech client saw 5x SQL increases within four months. A SaaS company generated 20+ free trial signups per month directly from AI citations.",
    },
    {
      title: "The Scale of the Shift",
      desc: "AI search traffic is growing at 130–150% year-over-year. 80% of search users now rely on AI-generated summaries for at least 40% of their searches. Google AI Overviews now appear on approximately 25% of all Google searches.",
    },
  ];
 
  const icons = [FlaskConical, TrendingUp, BarChart3];;

  return (
   <section className="bg-[#020A12] text-white px-5">
      <div className="max-w-233 mx-auto px-4 sm:px-6 md:px-5 border-t border-[#FFFFFF14] py-16"> 
        {/* TOP LABEL */}
        <h4 className="chakra text-[11.52px] font-bold uppercase leading-[1.3em] tracking-[0.16em] text-[#10C8F0] mb-3">
          05 — The Evidence
        </h4>

        {/* TITLE */}
        <h2 className="chakra text-[28.8px] font-bold uppercase tracking-[0.015em] leading-[1.25em] mb-5">
         What the Research Shows
        </h2>

        {/* DESC */}
        <p className="manrope text-[16px] text-[#FFFFFFC7] font-normal leading-[1.7em] mb-10 max-w-180">
         GEO is grounded in peer-reviewed research and rapidly accumulating industry data. These findings demonstrate both the scale of the opportunity and the specific levers that drive AI citation performance
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
