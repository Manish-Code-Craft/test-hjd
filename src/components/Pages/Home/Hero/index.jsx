"use client";

import RotatingText from "@/components/Pages/Home/RotatingText/RotatingText";
import Container from "@/components/Container";

export default function Hero() {
  return (
    <section className="relative pt-37.5 pb-25 xl:pt-62.5 xl:pb-37.5  overflow-hidden -mt-2">
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

        <div className="absolute inset-0 "></div>
      </div>

      <Container className="relative z-10">
        <div className="flex items-center">
          <div className="w-full max-w-310 text-left">
            <h1 className="font-bold uppercase chakra text-white text-[2.4rem] lg:text-[60px] xl:text-[80px] leading-[1.1] sm:leading-[1.1] md:leading-[1.2em] sm:tracking-[0.32px]">
              GET MORE FROM YOUR BUSINESS WITH{" "}
              <span className="text-[#10C8F0]">
                <RotatingText />
              </span>
            </h1>
            <p className="my-5 text-white font-medium manrope text-[15px] md:text-[18px] leading-7 sm:leading-[1.9em] max-w-200 xl:max-w-310">
              Your premier digital agency providing comprehensive SEO, strategic Google and Facebook Ads, optimized web design, and bespoke branding services, all aimed to maximize your online visibility, amplify customer engagement, and foster a distinctive brand identity. Choose High Jump Digital to leap over your competition and accelerate your digital success.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}