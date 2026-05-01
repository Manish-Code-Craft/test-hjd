

export default function Defination() {
  return (
    <section className="bg-[#020A12] text-white px-5">
      <div className="max-w-233 mx-auto px-4 sm:px-6 md:px-5 border-t border-[#FFFFFF14] py-16"> 

        {/* TOP LABEL */}
        <h4 className="chakra text-[11.52px] font-bold uppercase leading-[1.3em] tracking-[0.16em] text-[#10C8F0] mb-3">
          02 — Definition
        </h4>

        {/* TITLE */}
        <h2 className="chakra text-[28.8px] font-bold uppercase tracking-[0.015em] leading-[1.25em] mb-5">
          What Is Generative Engine Optimisation?
        </h2>

        {/* TEXT */}
        <p className="manrope text-[16px] text-[#FFFFFFC7] font-normal leading-[1.7em] mb-10 max-w-180">
          GEO is the evidence-based discipline of structuring your digital presence so that AI-powered search engines — ChatGPT, Google AI Overviews, Perplexity, Microsoft Copilot, and Gemini — can find, trust, and cite your brand in their answers.
        </p>

        {/* TABLE */}
        <div className="overflow-x-auto rounded-[14px] shadow-[0_10px_30px_rgba(0,0,0,0.4)] border border-[#FFFFFF14]">
          <table className="w-full min-w-162.5 border-collapse text-[0.9rem] poppins">

            <thead>
              <tr className="bg-[#111c2e] text-[#10C8F0] uppercase text-[0.7rem] tracking-[0.08em]">
                <th className="px-5 py-4 text-left">Dimension</th>
                <th className="px-5 py-4 text-left">Traditional SEO</th>
                <th className="px-5 py-4 text-left">Generative Engine Optimisation (GEO)</th>
              </tr>
            </thead>

            <tbody className="text-[#94a3b8]">
              {[
                ["Goal", "Rank on the results page", "Get cited in the AI-generated answer"],
                ["Success Metric", "Rankings, clicks, impressions", "Citations, mentions, share of voice in AI answers"],
                ["Visibility Window", "10+ results per query", "2–7 sources cited per AI response"],
                ["Trust Signal", "Backlinks and domain authority", "Multi-source corroboration, entity clarity, structured data"],
                ["Content Format", "Keyword-optimised pages", "Quotable, data-rich, question-aligned answer blocks"],
                ["Authority Model", "PageRank & link equity", "E-E-A-T, named authorship, third-party validation"],
                ["Freshness Sensitivity", "Moderate — evergreen content can rank for years", "High — 50% of cited content is under 13 weeks old"],
                ["Technical Foundation", "Crawlability, site speed, mobile-first", "All of SEO plus: AI crawler access, JSON-LD schema, llms.txt"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-[#182235] hover:bg-[#0f1e33] transition">
                  <td className="px-5 py-4 text-white font-semibold whitespace-nowrap">
                    {row[0]}
                  </td>
                  <td className="px-5 py-4">{row[1]}</td>
                  <td className="px-5 py-4">{row[2]}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>

        {/* CALLOUT */}
        <div className="mt-12 border border-[#10C8F033] bg-[linear-gradient(135deg,rgba(16,200,240,0.06)_0%,rgba(16,200,240,0.02)_100%)] rounded-[14px] py-8 px-7">
            <h3 className="chakra text-[14.4px] leading-[1em] font-bold uppercase text-[#10C8F0] mb-3">  
              Key Insight
            </h3>

            <p className="manrope text-[14.72px] text-[#FFFFFFC7] font-normal leading-[1.4em]">
              GEO does not replace SEO — it builds on top of it. A strong SEO foundation is a prerequisite for GEO success. But SEO alone is no longer sufficient. Without GEO optimisation, even well-ranked websites risk becoming invisible in the fastest-growing discovery channel.
            </p>

          </div>
        </div>
 
    </section>
  );
}