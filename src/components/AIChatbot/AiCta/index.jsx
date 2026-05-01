"use client";

import Container from "@/components/Container";

export default function AiCta() {
  return (
    <section className="bg-black py-20 px-2.5">
      <Container>
        <div className="flex items-center justify-center text-center">
          
          <h2 className="text-white text-[20px] sm:text-[34px] lg:text-[41px] font-bold uppercase leading-[1.5em] chakra">
            
            <span className="text-[#11C8F0]">
              Local businesses get free
            </span>
            <br />
            “SMS Lead Notifications Setup”
            <span className="text-[#11C8F0]">
              {" "}with any paid ad campaign!
            </span>

          </h2>

        </div>
      </Container>
    </section>
  );
}