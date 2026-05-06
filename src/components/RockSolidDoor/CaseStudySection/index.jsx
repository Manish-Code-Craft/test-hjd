"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WorkBenefits from "@/components/Common/WorkBenefits";
import Container from "@/components/Container";

const data = [
  {
    title: "SEO Optimization",
    paragraphs:[
      "Given Rock Solid Doors' emphasis on SEO, our starting point was a meticulous audit of their current website. This deep dive enabled us to spot opportunities for refining meta-tags, keyword embedding, backlinks, site structure, and load times, making the website more attractive for search engine crawlers.",]
  },
  {
    title: "Keyword Strategy",
    paragraphs:[
      "A thorough keyword exploration was undertaken to pinpoint those with high traffic potential and relevance to the door industry. Beyond merely infusing these keywords into the site, we also championed a long-tail keyword approach to tap into specific and niche search queries. The goal? Elevate both the volume and quality of organic traffic, leading to more organic interactions.",]
  },
  {
    title: "Content Strategy",
    paragraphs:[
      "Complementing our keyword efforts, we designed a dynamic content strategy encompassing regular blogs, insights into the latest in-door design and functionality, and detailed articles centred around home safety and aesthetics. This was geared towards cementing Rock Solid Doors' position as an industry authority while simultaneously boosting their SEO stature.",]
  },
  {
    title: "Local SEO",
    paragraphs:[
      "Given Rock Solid Doors' UK base, local SEO was paramount. This meant refining their Google My Business profile, ensuring consistent NAP details across platforms, and rallying local customers for reviews.",]
  },
  {
    title: "Backlink Building",
    paragraphs:[
      "Part of our mission was to uplift the site’s domain authority. Our method? Building top-notch backlinks. We shortlisted authoritative sites and blogs in the home improvement domain for guest post outreach.",]
  },
  {
    title: "Performance Monitoring and Reporting",
    paragraphs:[
      "To ensure our strategy's potency, we set up rigorous performance tracking. Employing a suite of tools, we kept a tab on website health, keyword standings, and avenues for conversion rate optimization.",]  
  },
];

export default function CaseStudySection() {
  // const [active, setActive] = useState(0);
  // const [activeIndex, setActiveIndex] = useState(0);

  // const benefitItems = strategies.map((item) => ({
  //   title: item.title,
  //   paragraphs: [item.content],
  // }));

  // const activeItem = benefitItems[activeIndex];

  return (
    <section className="bg-[#0B0F1A] py-17.5 text-white">
      <Container>

        {/* Problem Section */}
        <div className="border-b border-[#898A93] mb-12.5 grid lg:grid-cols-2 xl:grid-cols-[63.788%_1fr] gap-5 lg:gap-2 items-center">
          <div>
            <h2 className="chakra text-[36px] md:text-[48px] xl:text-[64px] font-bold uppercase mb-4">
              Problem/Challenge
            </h2>
            <p className="manrope text-[18px] font-medium mb-12">
              Rock Solid Doors reached out to us with a pressing need to elevate their online presence. Among the various digital marketing solutions they contemplated, Rock Solid Doors was particularly keen on harnessing the power of Search Engine Optimisation (SEO) to amplify their website’s effectiveness.
            </p>
          </div>

          <div>
            <Image
              src="/rocksoliddoor/Rocksolid-door-problem.png"
              alt="Rock Solid Doors"
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

        <p className="manrope font-medium text-[18px] mb-10 ">
          Our plan of action for Rock Solid Doors was holistic, touching upon every facet of their online identity to bolster visibility and customer engagement. Here’s a breakdown of our strategies:
        </p>

        <WorkBenefits items={data} itemWidth="lg:w-[clamp(280px,40vw,580px)]" />

        {/* Bottom Image */}
        <div className="my-16">
          <Image
            src="/rocksoliddoor/highjumpdigitalrank.png"
            alt="SEO Results"
            width={2000}
            height={800}
            className="w-full h-auto"
          />
        </div>

        {/* Closing */}
        <div>
          <h2 className="chakra text-[48px] md:text-[64px] font-bold uppercase mb-4">
            Closing Comments
          </h2>

          <p className="manrope text-[18px] font-medium">
            The culmination of these efforts was a marked upswing in keyword rankings, organic visitors, and genuine inquiries. Our analytical, multifaceted strategy propelled Rock Solid Doors’ online visibility, aligning with their business aspirations.
          </p>
        </div>

      </Container>
    </section>
  );
}