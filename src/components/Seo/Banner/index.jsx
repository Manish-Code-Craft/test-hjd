"use client";

import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

export default function SEOPage() {
  return (
  <section className="relative pt-37.5 pb-12.5 lg:pt-54.5 lg:pb-25 overflow-hidden -mt-2">
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

        {/* Content */}
        <Container className="relative z-10">
               <div className="flex  items-center  ">
           <div className="grid lg:grid-cols-[320px_1fr] xl:grid-cols-[358px_1fr] gap-5 item-start w-full">
              <div>
                <h1 className="font-bold uppercase chakra text-white text-[2.4rem] lg:text-[60px] xl:text-[80px] leading-[1.1] sm:leading-[1.1] md:leading-[1.2em] sm:tracking-[0.32px]">
                  SEO
                </h1>

                <ul className="mt-8 space-y-4 text-[#10C8F0] text-[18px] max-w-60 chakra font-bold tracking-wide sm:tracking-[0.32px]">
                  <li className="pb-2">
                    <a href="/seo" className="flex items-center justify-between">
                    SEO <ArrowRight size={20} />
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="/google-ads" className="flex items-center justify-between">
                    GOOGLE ADS <ArrowRight size={20} />
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="/facebook-ads" className="flex items-center justify-between">
                      FACEBOOK ADS <ArrowRight size={20} />
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="/web-design" className="flex items-center justify-between">
                      WEB DESIGN <ArrowRight size={20} />
                    </a>
                  </li>
                  <li className="pb-2">
                    <a href="/ai-chatbots" className="flex items-center justify-between">
                      AI CHATBOTS <ArrowRight size={20} />
                    </a>
                  </li>
                </ul>
              </div>

              {/* RIGHT SIDE CONTENT */}
              <div className="text-[14px] md:text-[18px] manrope leading-[1.8em] font-medium text-white space-y-5 mt-3">
                <p>
                  At High Jump Digital, we pride ourselves on implementing
                  sustainable, white hat ranking strategies that give you the
                  best results and keep you safe from any Google penalties.
                </p>

                <p>
                  Transparency is also an integral part of our SEO packages, in
                  order to ensure you can see the value in our ongoing service.
                </p>

                <p>
                  The SEO world is a constantly changing field and the search
                  engines are regularly moving the goal posts. That is why it is
                  important for you to be working with knowledgeable industry
                  professionals that cut no corners.
                </p>

                <p>
                  Get in touch today to speak with one of our SEO consultants.
                  We’ll provide you with a free review of your website versus any
                  competitors that are outranking you in the search engines.
                  Using this information we can reverse engineer and find a
                  strategy that is going to help you leave them behind.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section> 
  );
}