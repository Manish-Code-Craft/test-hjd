"use client";

import Container from "@/components/Container";
import Image from "next/image";

export default function Quote() {
  return (
    <section className="py-15 bg-white">
      <Container>
        
        <div className="bg-[#020A10] p-5 md:p-15 text-white space-y-5">
          
          {/* QUOTE */}
          <h5 className="text-[16px] sm:text-[20px] lg:text-[24px] leading-[1.5em] font-medium manrope mb-5">
            "At High Jump Digital, we're dedicated to elevating your business above the digital noise and helping it reach unprecedented levels of success. We specialize in crafting bespoke solutions in SEO, paid advertising, web design, and branding that not only boost your online footprint but also captivate your target audience and accelerate growth. By aligning closely with your unique objectives, we devise digital blueprints that redefine your online landscape—making your goals our utmost focus and celebrating your achievements as our ultimate satisfaction."
          </h5>

          {/* SIGNATURE */}
          <div className="my-5">
            <Image
              src="/about/alex-signature.png" 
              alt="signature"
              width={120}
              height={50}
              className="w-20 sm:w-25 lg:w-30"
            />
          </div>

          {/* NAME */}
          <h2 className="text-[16px] font-bold leading-[1.5em] uppercase chakra">
            ALEX MCLAY
          </h2>

          {/* ROLE */}
          <p className="text-[18px] manrope text-[#10c8f0] mt-5">Director</p>

        </div>

      </Container>
    </section>
  );
}