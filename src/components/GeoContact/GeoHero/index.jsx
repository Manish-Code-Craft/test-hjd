"use client";

import { useEffect, useState } from "react";

function Counter({ end, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

export default function GeoHero() {
  return (
    <section className="py-37.5 pb-18 bg-[#020A12] text-center px-6 text-white">
      <div className="max-w-215 mx-auto text-center">

        {/* TOP TAG */}
        <div className="mb-5">
          <span className="inline-block bg-[#10C8F014] border border-[#10C8F029] px-7 py-3 rounded-full text-[11.52px] font-semibold uppercase tracking-[0.12em] poppins text-[#10C8F0]">
            FREE GEO AUDIT
          </span>
        </div>

        {/* HEADING */}
        <h1 className="chakra text-[32px] md:text-[48px] font-bold uppercase leading-[1.15em] tracking-[0.02em] mb-6">
          FIND OUT HOW{" "}
          <span className="text-[#10C8F0]">VISIBLE YOUR BRAND</span>{" "}
          IS INSIDE CHATGPT, CLAUDE & GOOGLE AI OVERVIEWS
        </h1>

        {/* DESCRIPTION */}
        <p className="manrope text-[16.8px] font-medium text-[#FFFFFFC7] leading-[1.7em] max-w-153.75 mx-auto mb-10">
          Tell us a little about your business and we’ll run a tailored Generative Engine Optimisation audit — completely free. You’ll get a clear view of where you’re cited, where competitors are winning, and the highest-leverage moves to make next.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
          <div>
            <h3 className="chakra text-[32px] md:text-[40px] font-bold text-[#10C8F0]">
              <Counter end={200} suffix="+" />
            </h3>
            <p className="poppins text-[12px] uppercase tracking-[0.06em] text-[#FFFFFFC7]">
              Audits Delivered
            </p>
          </div>

          <div>
            <h3 className="chakra text-[32px] md:text-[40px] font-bold text-[#10C8F0]">
              <Counter end={48} suffix="h" />
            </h3>
            <p className="poppins text-[12px] uppercase tracking-[0.06em] text-[#FFFFFFC7]">
              Typical Turnaround
            </p>
          </div>

          <div>
            <h3 className="chakra text-[32px] md:text-[40px] font-bold text-[#10C8F0]">
              <Counter end={0} prefix="£" />
            </h3>
            <p className="poppins text-[12px] uppercase tracking-[0.06em] text-[#FFFFFFC7]">
              No Obligation
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}