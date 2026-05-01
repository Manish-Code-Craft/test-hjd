import Container from "@/components/Container";
import Image from "next/image";

export default function OurCompany() {
  return (
    <section
      className="relative text-white text-center py-25 px-5 bg-cover bg-center"
      style={{
        backgroundImage: "url('/siteaudit/highjump-site-audit-banner.jpg')",
      }}
    >
      <Container>
        <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-5">
          <h2 className="chakra text-[36px] md:text-[47px] uppercase font-bold leading-[1em] mb-6">
            Learn About Our Company
          </h2>
          <h3 className="chakra text-[18px] md:text-[21px] uppercase font-bold text-[#10C8F0] leading-[1.6em] mb-6">
            Here are some of the main faces behind the High Jump Digital brand
          </h3>

          <p className="max-w-220 manrope text-[18px] font-medium mx-auto">
            This site audit video is the starting steps on your journey to
            understanding how you can improve your websites performance
          </p>
        </div>
        {/* Director */}

    <div className="p-2.5 mt-7.5 flex flex-col md:flex-row gap-5 max-w-300 mx-auto">

  {/* Daniel */}
  <div className="bg-white rounded-[10px] p-7.5 text-center text-black w-full md:w-1/2 flex flex-col items-center">
    
    <Image
      src="/siteaudit/daniellummis-site.jpg"
      alt="Daniel Lummis"
      width={380}
      height={316}
      className="object-cover rounded-[10px]"
    />

    <h2 className="chakra text-[30px] font-bold uppercase leading-[0.6em] my-5">
      DANIEL LUMMIS
    </h2>

    <p className="chakra text-[21px] font-bold leading-[0.6em]">
      Director
    </p>

  </div>

  {/* Alex */}
  <div className="bg-white rounded-[10px] p-7.5 text-center text-black w-full md:w-1/2 flex flex-col items-center">
    
    <Image
      src="/siteaudit/alex-site.jpg"
      alt="Alex McLay"
      width={380}
      height={316}
      className="object-cover rounded-[10px]"
    />

    <h2 className="chakra text-[30px] font-bold uppercase leading-[0.6em] my-5">
      ALEX MCLAY
    </h2>

    <p className="chakra text-[21px] font-bold leading-[0.6em]">
      Director
    </p>

  </div>
 

        </div>
      </Container>
    </section>
  );
}
