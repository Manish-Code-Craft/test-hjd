import Container from "@/components/Container";

export default function StatsSection() {
  return (
    <section className="bg-white py-17.5">
      <Container>
        {/* Heading */}
        <div className="p-2.5">
          <h1 className="chakra text-[36px] md:text-[64px] font-bold uppercase leading-[1.5em] text-black mb-5">
            RV Parts Express
          </h1>

          {/* Description */}
          <p className="manrope text-[18px] font-medium text-black mb-5">
            RV Parts Express is an Ecommerce company that operates within the RV
            industry. We help service clients throughout all of Australia and
            have over 35 years of knowledge and expertise within the industry.
            We cover all areas of RV parts and accessories, ranging from caravan
            covers to RV electronics.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="p-5">
              <h2 className="chakra text-[40px] md:text-[64px] font-black text-[#10C7EF] leading-[1.5em] md:mb-5">
                44.8
              </h2>
              <p className="manrope text-[18px] font-medium text-black leading-normal">
                Million Impressions
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-5">
              <h2 className="chakra text-[40px] md:text-[64px] font-black text-[#10C7EF] leading-[1.5em] md:mb-5">
                1.12
              </h2>
              <p className="manrope text-[18px] font-medium text-black leading-normal">
                Million Clicks
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-5">
              <h2 className="chakra text-[40px] md:text-[64px] font-black text-[#10C7EF] leading-[1.5em] md:mb-5">
                25,900
              </h2>
              <p className="manrope text-[18px] font-medium text-black leading-normal">
                conversions
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
