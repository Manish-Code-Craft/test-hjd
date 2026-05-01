"use client";

import Container from "@/components/Container"; 

export default function PrivacyBanner() {
  return (
    <section className="bg-[#090F14] pt-54.5 pb-25">
      <Container>
         
            {/* TITLE */}
          <h1 className="text-white text-[40px] sm:text-[60px] lg:text-[80px] font-bold uppercase leading-[1.2em] chakra">
            CASE STUDIES
          </h1>

          {/* TEXT */}
          <div className="mt-6 space-y-5 text-white text-[14px] md:text-[18px] font-medium leading-[1.8em] manrope">
            <p>
              At High Jump Digital, we pride ourselves on getting the best possible results for our clients. Check out some of our case studies below to get an in depth understanding of the work we do for clients across all marketing channels.
            </p>

          </div>
  
      </Container>
    </section>
  );
}