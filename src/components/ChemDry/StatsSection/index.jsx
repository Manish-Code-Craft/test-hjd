import Container from "@/components/Container";

export default function StatsSection() {
  return (
    <section className="bg-white py-17.5">
      <Container>
        {/* Heading */}
        <div className="p-2.5">
          <h1 className="chakra text-[36px] md:text-[64px] font-bold uppercase leading-[1.5em] text-black mb-5">
            ChemDry
          </h1>

          {/* Description */}
          <p className="manrope text-[18px] font-medium text-black mb-5">
            Chemdry Express WA is a leading carpet cleaning company based in
            Perth.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Stat 1 */}
            <div className="p-5 pl-0">
              <h2 className="chakra text-[36px] lg:text-[40px] xl:text-[64px] font-black text-[#10C7EF] leading-[1.5em] md:mb-5">
                Over 1100+
              </h2>
              <p className="manrope text-[18px] font-medium text-black leading-normal">
                leads generated to date
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-5 pl-0">
              <h2 className="chakra text-[36px] lg:text-[40px] xl:text-[64px] font-black text-[#10C7EF] leading-[1.5em] md:mb-5">
                Reaching 78,000+
              </h2>
              <p className="manrope text-[18px] font-medium text-black leading-normal">
                users on Facebook & instagram
              </p>
            </div>
          </div>

          <p className="manrope text-[18px] font-medium text-black mt-5">
            Prior to our involvement, Chemdry Express WA was grappling with
            substantial issues related to lead generation. They had experimented
            with various strategies, but the hurdles lay in the fact that none
            of these approaches were generating a the positive returns expected.
          </p>
        </div>
      </Container>
    </section>
  );
}
