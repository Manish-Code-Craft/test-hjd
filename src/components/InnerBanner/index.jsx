import { Phone, Sparkles } from "lucide-react";
import ButtonLink from "../ButtonLink";
import Container from "../Container";

export default function InnerBanner({
  title,
  subtitle, 
}) {
  return (
    <section className="relative min-h-screen overflow-hidden -mt-2">
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
            <div className="md:h-157.5 items-center flex flex-col py-30 sm:py-20 lg:pt-75.5 lg:pb-37.5">

        <h1 className="text-4xl md:text-5xl chakra lg:text-6xl font-bold text-[#F6F6F7] leading-tight mb-6">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-[#10C8F0] max-w-3xl manrope mx-auto mb-10 leading-relaxed">
          {subtitle}
        </p>

      </div>
      </Container>
    </section>
  );
}