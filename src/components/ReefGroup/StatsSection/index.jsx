import Container from "@/components/Container";

export default function StatsSection() {
  return (
    <section className="bg-white py-17.5">
      <Container>
        
        {/* Heading */}
        <div className="p-2.5">
        <h1 className="chakra text-[36px] md:text-[64px] font-bold uppercase leading-[1.5em] text-black mb-5">
          Reef Group
        </h1>

        {/* Description */}
        <p className="manrope text-[18px] font-medium text-black mb-5">
          Reef Group is a transport and logistics company based in Australia, offering a wide range of services including container transport, general transport, container storage, and more.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Stat 1 */}
          <div className="p-5">
            <h2 className="chakra text-[40px] md:text-[64px] font-black text-[#10C7EF] leading-[1.5em] md:mb-5">
              557
            </h2>
            <p className="manrope text-[18px] font-medium text-black leading-normal">
            keyword position increases
            </p>
          </div>

          {/* Stat 2 */}
          <div className="p-5">
            <h2 className="chakra text-[40px] md:text-[64px] font-black text-[#10C7EF] leading-[1.5em] md:mb-5">
              60,000+
            </h2>
            <p className="manrope text-[18px] font-medium text-black leading-normal">
            organic users acquired to date
            </p>
          </div>

          {/* Stat 3 */}
          <div className="p-5">
            <h2 className="chakra text-[40px] md:text-[64px] font-black text-[#10C7EF] leading-[1.5em] md:mb-5">
              1500+
            </h2>
            <p className="manrope text-[18px] font-medium text-black leading-normal">
            organic enquiries generated
            </p>
          </div>

        </div>
        </div>
      </Container>
    </section>
  );
}