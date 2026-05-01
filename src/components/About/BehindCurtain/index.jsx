"use client";

import Container from "@/components/Container";
import Image from "next/image";

export default function BehindCurtain() {
  return (
    <section className="bg-white py-20 ">
      <Container>
        <div className="grid xl:grid-cols-[823px_1fr] gap-10 items-end">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-black text-[36px] sm:text-[50px] lg:text-[64px] font-bold leading-[1.5em] uppercase chakra mb-10">
              BEHIND THE CURTAIN...
            </h2>

            {/* PERSON 1 */}
            <div className="grid md:grid-cols-[241px_1fr] gap-6 mb-10">
              <Image
                src="/about/alex.jpg" 
                alt="Alex"
                width={241}
                height={241}
                className="w-full h-auto object-cover "
              />

              <div className="space-y-2.5">
                <h3 className="font-bold text:[14px] lg:text-[16px] text-black leading-[1.5em] uppercase chakra">ALEX MCLAY</h3>
                <p className="text-[#10C8F0] text-[14px] lg:text-[18px] manrope leading-[0.6em] font-medium mb-5">Director</p>
                <p className="text-[14px] sm:text-[18px]  font-medium manrope mb-[14.4] xl:max-w-135.5">
                  Alex has extensive knowledge of the digital marketing world.
                  Having come from an account management background, Alex helps
                  to ensure clients are always happy and achieving their desired results.
                </p>
              </div>
            </div>

            {/* PERSON 2 */}
            <div className="grid md:grid-cols-[241px_1fr] gap-6 item-center">
              <Image
                src="/about/daniel.jpg" 
                alt="Daniel"
                width={241}
                height={241}
                className="w-full h-auto object-cover "
              />

              <div className="space-y-5">
                <h3 className="font-bold text-[16px] text-black leading-[1.5em] uppercase chakra">DANIEL LUMMIS</h3>
                <p className="text-[#10C8F0] text-[14px] lg:text-[18px] manrope leading-[0.6em] font-medium mb-5">Director</p>
                <p className="text-[14px] sm:text-[18px] font-medium manrope mb-[14.4px] xl:max-w-135.5">
                  Daniel has a wealth of experience helping businesses,
                  primarily SMEs, build their presence online. As well as being
                  customer service focussed, he comes with in depth technical
                  knowledge and is always keen to make proactive suggestions,
                  backed by data.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE (STATS BOX) */}
          <div className="bg-[#020A10] p-7.5 flex flex-col justify-center gap-7.5 m-2.5 ">

            {/* ITEM */}
            <div className="grid grid-cols-1 md:grid-cols-[174px_1fr] items-center xl:items-start">
              <h2 className="text-[#10C8F0] text-[48px] lg:text-[64px] leading-[1.5em] font-bold chakra">15+</h2>
              <p className="text-white text-[16px] lg:text-[18px] manrope font-medium leading-[1.6]">
                Years of industry experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[174px_1fr] items-center xl:items-startrt">
              <h2 className="text-[#10C8F0] text-[48px] lg:text-[64px] leading-[1.5em] font-bold chakra">50+</h2>
              <p className="text-white text-[16px] lg:text-[18px] manrope font-medium leading-[1.6]">
                Happy clients & successful projects
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[174px_1fr] items-center xl:items-start">
              <h2 className="text-[#10C8F0] text-[48px] lg:text-[64px] leading-[1.5em] font-bold chakra">$1M+</h2>
              <p className="text-white text-[16px] lg:text-[18px] manrope font-medium leading-[1.6]">
                In reviewed Adspend across Google & Meta
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[174px_1fr] items-center xl:items-start">
              <h2 className="text-[#10C8F0] text-[48px] lg:text-[64px] leading-[1.5em] font-bold chakra">5*</h2>
              <p className="text-white text-[16px] lg:text-[18px] manrope font-medium leading-[1.6]">
                Google My Business Rating
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}