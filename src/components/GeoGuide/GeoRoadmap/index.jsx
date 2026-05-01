export default function GeoRoadmap() {
  const phases = [
    {
      phase: "Phase 1 — Weeks 1–2",
      title: "Technical Foundation",
      desc: `Audit and configure robots.txt for AI crawler access. Implement core JSON-LD schemas (Organisation/LocalBusiness, FAQPage, Service) across all key pages. Create an llms.txt file. Verify XML sitemap includes lastmod dates. Check CDN/hosting for default AI bot blocking. This phase removes the most common reasons websites are completely invisible to AI engines.`,
    },
    {
      phase: "Phase 2 — Weeks 3–4",
      title: "Content Restructuring",
      desc: `Restructure existing service pages with quick-answer blocks in the first 200 words. Convert headings to question-based format. Embed contextual FAQs on every service page. Add specific statistics and data points throughout. Add named author attribution to all content. Implement Article, AggregateRating, and Speakable schemas.`,
    },
    {
      phase: "Phase 3 — Months 2–3",
      title: "Authority Building",
      desc: `Launch a structured content publishing programme targeting topic clusters aligned with core services. Create definitive resource pages for key queries. Build out case studies and credentials pages. Audit and optimise third-party directory and review profiles for NAP consistency and completeness. Begin earned media and thought leadership outreach.`,
    },
    {
      phase: "Phase 4 — Ongoing",
      title: "Sustained Growth & Measurement",
      desc: `Maintain publishing cadence of 8–12 quality articles per month. Refresh existing high-value pages quarterly. Monitor AI citation performance across ChatGPT, Perplexity, Google AI Overviews, and Copilot. Track share of voice, citation rate, and referral traffic from AI sources. Iterate strategy based on performance data.`,
    },
  ];

  return (
    <section className="bg-[#020A12] text-white px-5">
      <div className="max-w-233 mx-auto px-4 sm:px-6 md:px-5 border-t border-[#FFFFFF14] py-16">
        {/* TOP LABEL */}
        <h4 className="chakra text-[11.52px] font-bold uppercase leading-[1.3em] tracking-[0.16em] text-[#10C8F0] mb-3">
          07 — The Roadmap
        </h4>

        {/* TITLE */}
        <h2 className="chakra text-[28.8px] font-bold uppercase tracking-[0.015em] leading-[1.25em] mb-5">
          Implementation Roadmap
        </h2>

        {/* DESC */}
        <p className="manrope text-[16px] text-[#FFFFFFC7] font-normal leading-[1.7em] mb-10 max-w-180">
          GEO optimisation is best approached in phases, starting with the
          highest-impact technical foundations and building toward sustained
          content authority.
        </p>

        {/* TIMELINE */}
        <div className="relative pl-10 max-w-200">
          {/* vertical line */}
          <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-linear-to-b from-[#10C8F0] to-[#1f2a37]" />

          {phases.map((item, i) => (
            <div key={i} className="relative pb-9">
              {/* dot */}
              <span className="absolute -left-8 top-1.5 w-3 h-3 rounded-full bg-[#10C8F0] border-[3px] border-[#0b1220] shadow-[0_0_0_2px_#10C8F0]" />

              {/* content */}
              <div>
                <p className="chakra text-[11.52px] font-bold uppercase tracking-widest text-[#10C8F0] my-1">
                  {item.phase}
                </p>

                <h3 className="chakra text-[16px] font-bold uppercase my-2">
                  {item.title}
                </h3>

                <p className="manrope text-[14.08px] text-[#FFFFFFC7] leading-[1.65] whitespace-pre-line">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
