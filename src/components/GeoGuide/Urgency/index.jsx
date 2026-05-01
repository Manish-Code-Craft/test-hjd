"use client";
import { TrendingUp, Clock, Activity } from "lucide-react";



export default function Urgency() {

  const cards = [
    {
      title: "Citation Authority Compounds",
      desc: "AI engines learn which brands to trust over time. Each citation reinforces your authority, making future citations more likely. Brands that establish citation authority now create a compounding advantage that late movers cannot easily replicate",
    },
    {
      title: "The Window Is Narrow",
      desc: "AI engines cite only 2–7 sources per response. Once competitors establish themselves as trusted authorities in your category, displacing them becomes exponentially harder. The early-mover advantage in GEO is more pronounced than it ever was in SEO.",
    },
    {
      title: "Traffic Is Already Shifting",
      desc: "AI search referral traffic is growing at 130–150% year-over-year. Organic CTR on informational queries has declined 61%. This is not a gradual transition — it's a rapid, accelerating shift in how consumers discover and choose businesses.",
    },
  ];
 
  const icons = [TrendingUp, Clock, Activity];

  return (
    <section className="bg-[#020A12] text-white px-5">
      <div className="max-w-233 mx-auto px-4 sm:px-6 md:px-5 border-t border-[#FFFFFF14] py-16"> 
        {/* TOP LABEL */}
        <h4 className="chakra text-[11.52px] font-bold uppercase leading-[1.3em] tracking-[0.16em] text-[#10C8F0] mb-3">
          08 — The Urgency
        </h4>

        {/* TITLE */}
        <h2 className="chakra text-[28.8px] font-bold uppercase tracking-[0.015em] leading-[1.25em] mb-5">
         Why Acting Now Matters
        </h2>

        {/* DESC */}
        <p className="manrope text-[16px] text-[#FFFFFFC7] font-normal leading-[1.7em] mb-10 max-w-180">
          GEO is not a future consideration. The shift to AI-powered search is already well underway, and the window to establish early-mover advantage is closing.
        </p>


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
            The Competitive Reality
          </h3>

          <p className="manrope text-[14.72px] text-[#FFFFFFC7] font-normal leading-[1.4em]">
            Every day your competitors invest in GEO while you don't, they're building citation authority that makes them progressively harder to displace. GEO rewards early, consistent effort. The cost of waiting isn't just missed opportunities today — it's a compounding deficit that grows every week.
          </p>
        </div>
      </div>
    </section>
  );
}
