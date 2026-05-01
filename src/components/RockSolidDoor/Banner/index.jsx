"use client";

import Container from "@/components/Container";

export default function RockSolidBanner() {
  return (
    <section className="relative pt-54.5 pb-25 overflow-hidden">
      
      {/* VIDEO BACKGROUND */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/home/video/home-banner.mp4" type="video/mp4" />
        </video>

        {/* optional dark overlay */} 
      </div>

      {/* CONTENT */}
      <Container className="relative z-10"> 

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