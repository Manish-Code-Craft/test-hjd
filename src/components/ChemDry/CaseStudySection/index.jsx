"use client";
import Image from "next/image";
import Container from "@/components/Container";

export default function CaseStudySection() {

  return (
    <section className="bg-[#0B0F1A] py-17.5 text-white">
      <Container>
        {/* Problem Section */}
        <div className="border-b border-[#898A93] mb-12.5 grid lg:grid-cols-[63.788%_1fr] gap-5 lg:gap-2 items-center">
          <div>
            <h2 className="chakra text-[36px] lg:text-[64px] font-bold uppercase mb-4">
              Project Goals
            </h2>
            <p className="manrope text-[18px] font-medium mb-12">
             The primary objectives of this Facebook Ads campaign were to generate leads for residential carpet cleaning jobs throughout Perth.
            </p>
          </div>

          <div>
            <Image
              src="/chemdry/ChemDry-problem.png"
              alt="Reef Group"
              width={462}
              height={294}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Strategy */}
        <h2 className="chakra text-[36px] md:text-[64px] font-bold uppercase mb-4">
          STRATEGY/SOLUTION
        </h2>
        <p className="manrope text-[18px] font-medium mt-5">
            After a careful analysis of the situation, our strategy was to leverage Facebook’s Lead Generation ads service. Recognizing its potential as an effective avenue for lead generation, we designed a campaign tailored to the unique needs of Chemdry Express WA.
          </p> 
          <p className="manrope text-[18px] font-medium my-5">
            This strategic decision was grounded in our understanding of the target audience and their online behaviours.
          </p>


        {/* Closing */}
        <div>
          <h2 className="chakra text-[48px] md:text-[64px] font-bold uppercase my-4">
           Results and Closing Comments
          </h2>

          <p className="manrope text-[18px] font-medium">
           Following the implementation of our strategies, we saw high quality carpet cleaning leads start to arrive in the clients inbox.
          </p>

        </div>

      </Container>
    </section>
  );
}