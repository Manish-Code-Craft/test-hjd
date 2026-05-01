import Container from "@/components/Container";

export default function GeoBanner() {
  return (
    <section className="py-37.5 pb-18 bg-[#020A12] text-center px-5">
      <div className="max-w-210 w-full mx-auto">
        {/* Top Label */}
      <div className="mb-5">
  <div className="inline-block bg-[#10C8F014] border border-[#10C8F029] px-4.5 py-1.5 rounded-full">
    <span className="poppins text-[11.52px] font-semibold uppercase tracking-[0.12em] leading-[1.5em] text-[#10C8F0]">
      Whitepaper — April 2026
    </span>
  </div>
</div>

        {/* Heading */}
        <h1 className="chakra font-bold uppercase leading-[1.15em] tracking-[0.02em] text-white text-[28px] md:text-[48px]">
          The Complete Guide to <span className="text-[#10C8F0]">Generative Engine Optimisation</span>
        </h1>

        {/* Description */}
        <p className="my-5 text-[16.8px] text-[#FFFFFFC7] font-medium leading-[1.8em] manrope max-w-170 mx-auto">
          How AI-powered search is transforming the way customers discover businesses — and the strategic framework your brand needs to stay visible, cited, and chosen.
        </p>
 
        <p className="text-[#FFFFFF7A] poppins font-normal tracking-[0.03em] text-[12.48px] my-5">
          Prepared by High Jump Digital • highjumpdigital.com
        </p>
      </div>
    </section>
  );
}
