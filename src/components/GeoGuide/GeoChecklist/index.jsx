import { CheckSquare } from "lucide-react";

export default function GeoChecklist() {
  const checklist = [
    {
      title: "AI crawlers are not blocked in robots.txt",
      desc: "GPTBot, ClaudeBot, PerplexityBot, and Google-Extended can all access your site. Your hosting provider hasn't enabled default AI bot blocking.",
    },
    {
      title: "JSON-LD schema markup is implemented across all key pages",
      desc: "LocalBusiness/Organisation, FAQPage, Service, Article, and AggregateRating schemas are present, validated, and match visible page content.",
    },
    {
      title: "Every service page has a quick-answer block in the first 200 words",
      desc: "A concise, directly quotable answer to the primary query appears above the fold — not a generic introduction that builds up to the answer.",
    },
    {
      title: "Headings are structured as questions that mirror user prompts",
      desc: 'H2/H3 tags use the natural language phrasing that users type into AI assistants, e.g. "How much does [service] cost in [city]?"',
    },
    {
      title: "Content includes specific statistics, data points, and verifiable claims",
      desc: 'Vague assertions ("we\'re the best") are replaced with specific, quotable data ("1,500+ moves completed", "4.9/5 rating across 107 reviews").',
    },
    {
      title: "All content has named author attribution with professional credentials",
      desc: "Blog posts and service pages are attributed to named individuals with visible expertise bios, not published anonymously as brand content.",
    },
    {
      title: "Contextual FAQ sections exist on every key service page",
      desc: "5–8 prompt-aligned questions and answers on each service page, implemented with FAQPage schema markup.",
    },
    {
      title: "Review profiles are active across multiple platforms",
      desc: "Consistent positive reviews on Google Business Profile, industry platforms, and social media — with AggregateRating schema on-site.",
    },
    {
      title: "The brand appears on independent, authoritative third-party sites",
      desc: "Industry directories, trade publications, news coverage, and review aggregators all reference the brand with consistent information.",
    },
    {
      title: "An llms.txt file is present and maintained",
      desc: "The emerging AI-equivalent of robots.txt proactively tells AI systems who you are and which pages matter most.",
    },
    {
      title: "Content references authoritative external sources",
      desc: "Pages cite industry bodies, government sources, and research to demonstrate domain knowledge — mirroring the academic citation patterns AI engines were trained on.",
    },
  ];

  return (
    <section className="bg-[#020A12] text-white px-5">
      <div className="max-w-233 mx-auto px-4 sm:px-6 md:px-5 border-t border-[#FFFFFF14] py-16"> 

        {/* TOP LABEL */}
        <h4 className="chakra text-[11.52px] font-bold uppercase leading-[1.3em] tracking-[0.16em] text-[#10C8F0] mb-3">
          06 — The Checklist
        </h4>

        {/* TITLE */}
        <h2 className="chakra text-[28.8px] font-bold uppercase tracking-[0.015em] leading-[1.25em] mb-5">
          GEO Readiness: Is Your Website Prepared?
        </h2>

        {/* DESC */}
        <p className="manrope text-[16px] text-[#FFFFFFC7] font-normal leading-[1.7em] mb-10 max-w-180">
          Use this checklist to assess your current GEO readiness. Each item represents a critical factor in determining whether AI engines can find, trust, and cite your brand.
        </p>

        {/* CHECKLIST */}
        <div>
          {checklist.map((item, i) => (
            <div key={i} className="flex gap-4 py-4.5">

              {/* ICON */}
              <div className="mt-1">
                <CheckSquare className="w-5.5 h-5.5 text-[#10C8F0]" />
              </div>

              {/* CONTENT */}
              <div>
                <h3 className="manrope text-[14.72px] font-bold leading-[1.8em] mb-2">
                  {item.title}
                </h3>

                <p className="manrope text-[14.72px] text-[#FFFFFFC7] leading-[1.5em]">
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