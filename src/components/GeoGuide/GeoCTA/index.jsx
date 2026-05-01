import Link from "next/link";

export default function GeoCTA() {
  return (
    <section className="py-16 px-5 bg-[#0b1220] text-white">
      <div className="max-w-245.5 mx-auto text-center">

        {/* TITLE */}
        <h2 className="chakra text-[28.8px] font-bold uppercase leading-[1.25em] tracking-[0.015em] mb-5">
          Ready to Get Started?
        </h2>

        {/* TEXT */}
        <p className="manrope text-[16px] leading-[1.7em] text-[#FFFFFFC7] max-w-150 mx-auto mb-8">
          High Jump Digital offers comprehensive GEO audits and implementation programmes designed to make your brand visible, cited, and chosen across every AI search engine.
        </p>

        {/* BUTTON */}
        <Link href="/geo-contact">
          <button className="chakra text-[13.6px] cursor-pointer font-bold uppercase tracking-[0.06em] text-[#090F14] bg-[#10C8F0] rounded-lg px-9 py-3.5 hover:opacity-90 transition">
            Book a GEO Audit
          </button>
        </Link>

      </div>
    </section>
  );
}