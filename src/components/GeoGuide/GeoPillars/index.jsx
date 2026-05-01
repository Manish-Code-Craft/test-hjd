import { CheckSquare } from "lucide-react";

export default function GeoPillars() {
  const pillars = [
    {
      number: "Pillar 01",
      title: "Structured Data & Schema Markup",
      desc: `JSON-LD structured data is the machine-readable layer that tells AI engines exactly who you are, what you offer, and why you’re credible. Research shows schema markup appears on over 75% of pages that earn AI citations, and pages with proper structured data see 30–40% higher visibility in AI-generated answers.`,
      points: [
        "<strong>Organisation / LocalBusiness schema</strong> — establishes your entity identity, location, and contact details",
        "<strong>FAQPage schema</strong> — directly feeds AI answer extraction from your Q&A content",
        "<strong>Service schema</strong> — maps specific offerings to specific queries",
        "<strong>Article / BlogPosting schema</strong> — signals authorship, publish date, and freshness",
        "<strong>AggregateRating / Review schema</strong> — surfaces trust signals from customer reviews",
        "<strong>Speakable schema</strong> — explicitly marks which passages are designed to be quoted",
      ],
      tag: "Highest Impact",
      tagColor: "green",
    },
    {
      number: "Pillar 02",
      title: "Content Architecture & Prompt Alignment",
      desc: `AI engines extract answers from content that directly responds to user queries. Your content must be structured so an AI can quote it with confidence. This means leading with direct answers (not building up to them), using question-based headings that mirror how users prompt AI assistants, and embedding specific, verifiable data throughout.`,
      points: [
        "<strong>Quick-answer blocks</strong> — concise, quotable answers in the first 200 words of every key page",
        "<strong>Question-based H2/H3 headings</strong> — directly feeds AI answer extraction from your Q&A content",
        "<strong>Embedded FAQ sections</strong> —  5–8 prompt-aligned Q&As on every service page (with FAQPage schema)",
        "<strong>Statistics and specific data points</strong> — the single most effective GEO content technique (+41% visibility",
        "<strong>Listicle and comparison formats</strong> — structured data formats receive 3x more citations than prose-only content",
      ],
      tag: "Highest Impact",
      tagColor: "green",
    },
    {
      number: "Pillar 03",
      title: "Entity Authority & E-E-A-T Signals",
      desc: `AI engines distinguish between brands that simply publish content and brands recognised by others as authorities. Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) signals are the foundation of AI citation decisions.`,
      points: [
        "<strong>Named author attribution</strong> — pages with named, credentialed authors are cited at 3x the rate of anonymous content",
        "<strong>Industry accreditations and credentials</strong> — structured, visible proof of professional standing",
        "<strong>Expert commentary and thought leadership</strong>  — original insights and perspectives that demonstrate genuine expertise",
        "<strong>Case studies and verifiable results</strong> — specific, data-backed evidence of capability",
        "<strong>Outbound citations </strong> — referencing authoritative sources demonstrates domain knowledge",
      ],
      tag: "Highest Impact",
      tagColor: "green",
    },
    {
      number: "Pillar 04",
      title: "AI Crawler Accessibility",
      desc: `Your content can only be cited if AI crawlers can access it. This technical foundation is often overlooked — and is one of the most common reasons otherwise strong websites are invisible in AI search. Many hosting providers and CDNs now block AI bots by default.`,
      points: [
        "<strong>robots.txt audit</strong> —verify GPTBot, ClaudeBot, PerplexityBot, and Google-Extended are not blocked",
        "<strong>llms.txt implementation</strong> — the emerging standard that proactively guides AI systems to your best content",
        "<strong>Server-side rendering</strong> — critical content must be in the initial HTML, not hidden behind JavaScript",
        "<strong>XML sitemap with lastmod dates</strong> — helps AI crawlers discover and prioritise fresh content",
        "<strong>CDN and hosting configuration</strong> — check Cloudflare, AWS, and other providers for default AI bot blocking",
      ],
      tag: "Medium Impact — High Urgency",
      tagColor: "yellow",
    },
    {
      number: "Pillar 05",
      title: "Citation & Trust Signal Ecosystem",
      desc: `AI engines apply multi-source corroboration. They cross-reference your brand across independent domains to assess trustworthiness. A brand mentioned positively on multiple independent sites — review platforms, directories, trade publications, news outlets — receives higher citation confidence than one that only appears on its own website.`,
      points: [
        "<strong>Review volume and quality</strong>  — consistent positive reviews across Google, industry-specific platforms, and social media",
        "<strong>NAP consistency</strong> — identical Name, Address, Phone across all listings and directories",
        "<strong>Earned media and PR coverage</strong>  — mentions in trade publications and news outlets carry significant weight",
        "<strong>Directory and aggregator presence</strong> — complete, accurate profiles on relevant industry directories",
        "<strong>Social proof signals</strong>  — LinkedIn company presence, industry association memberships, award mentions",
      ],
      tag: "Medium Impact",
      tagColor: "yellow",
    },
    {
      number: "Pillar 06",
      title: "Content Freshness & Publishing Cadence",
      desc: `AI engines aggressively favour fresh content. Brands that publish 10–20 high-quality articles per month across focused topic clusters build citation authority significantly faster. Content that earned citations last month gets replaced by fresher sources this month unless consistently updated.`,
      points: [
        "<strong>Regular publishing cadence</strong> — consistent output signals ongoing authority and relevance",
        "<strong>Topical cluster strategy</strong> — deep coverage of core topics builds comprehensive authority",
        "<strong>Content refresh programme</strong>  — update existing high-value pages quarterly with new data and insights",
        "<strong>Visible date metadata</strong> — datePublished and dateModified in both page content and schema markup",
        "<strong>Original research and data</strong>  — proprietary insights and statistics that can only be sourced from you",
      ],
      tag: "Medium Impact",
      tagColor: "yellow",
    },
  ];

  return (
    <section className="bg-[#020A12] text-white px-5">
      <div className="max-w-233 mx-auto px-4 sm:px-6 md:px-5 border-t border-[#FFFFFF14] py-16">

        {/* TOP */}
        <h4 className="chakra text-[11.52px] font-bold uppercase leading-[1.3em] tracking-[0.16em] text-[#10C8F0] mb-3">
          04 — The Framework
        </h4>

        <h2 className="chakra text-[28.8px] font-bold uppercase tracking-[0.015em] leading-[1.25em] mb-5">
          The Six Pillars of GEO Optimisation
        </h2>

        <p className="manrope text-[16px] text-[#FFFFFFC7] font-normal leading-[1.7em] mb-10 max-w-180">
          Our GEO framework evaluates and optimises websites across six interconnected pillars.
        </p>

        {/* PILLARS */}
        <div className="space-y-8">
          {pillars.map((item, i) => (
            <div
              key={i}
              className="border-l-[3px] border-[#10C8F0] rounded-[14px] p-8 bg-[#101820D9]"
            >
              <h4 className="chakra text-[11.52px] font-bold uppercase tracking-[0.16em] leading-[1.3em] text-[#10C8F0]">
                {item.number}
              </h4>

              <h3 className="chakra text-[18.4px] font-bold uppercase leading-[1.25em] tracking-[0.015em] my-5">
                {item.title}
              </h3>

              <p className="manrope text-[14.72px] font-normal text-[#FFFFFFC7] leading-[1.7em] mb-5">
                {item.desc}
              </p>

              {/* ✅ ONLY CHANGE HERE */}
              <ul className="space-y-3 mb-5">
                {item.points.map((point, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[14px] manrope text-[#FFFFFFC7] font-normal"
                  >
                    <CheckSquare className="w-4 h-4 mt-1 text-[#10C8F0]" />
                    <span dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                ))}
              </ul>

              <span
                className={`inline-block px-6 py-2.5 rounded-full text-[11px] font-bold poppins ${
                  item.tagColor === "green"
                    ? "bg-[#4ADE801A] border border-[#4ADE8033] text-[#4ADE80]"
                    : "bg-[#FBBF241A] border border-[#FBBF2433] text-[#FBBF24]"
                }`}
              >
                {item.tag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}