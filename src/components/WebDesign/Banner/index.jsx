"use client";

import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

export default function WebDesignBanner() {
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
        <h1 className="font-bold uppercase chakra text-white text-[2.4rem] lg:text-[60px] xl:text-[80px] leading-[1.1] sm:leading-[1.1] md:leading-[1.2em] sm:tracking-[0.32px]">
          WEB DESIGN
        </h1>
        <div className="flex items-center">
          <div className="grid lg:grid-cols-[320px_1fr] xl:grid-cols-[358px_1fr] gap-5 item-start w-full">
            <div>
              <ul className="mt-8 space-y-4 text-[#10C8F0] text-[18px] max-w-60 chakra font-bold tracking-wide sm:tracking-[0.32px]">
                <li className="pb-2">
                  <a href="/seo" className="flex items-center justify-between">
                    SEO <ArrowRight size={20} />
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="/google-ads"
                    className="flex items-center justify-between"
                  >
                    GOOGLE ADS <ArrowRight size={20} />
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="/facebook-ads"
                    className="flex items-center justify-between"
                  >
                    FACEBOOK ADS <ArrowRight size={20} />
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="/web-design"
                    className="flex items-center justify-between"
                  >
                    WEB DESIGN <ArrowRight size={20} />
                  </a>
                </li>
                <li className="pb-2">
                  <a
                    href="/ai-chatbots"
                    className="flex items-center justify-between"
                  >
                    AI CHATBOTS <ArrowRight size={20} />
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="text-[14px] md:text-[18px] manrope leading-[1.8em] font-medium text-white space-y-5 mt-3">
              <p>
                In this day and age, it is a necessity for your business to have a presence online. Think of it as your online shop front. Whether you use it for lead generation, sales, or just to add a touch of trust and confidence to your clients or prospects, having a website is a must.
              </p>

              <p>
               We understand that not all companies want to shell out thousands of pounds upfront to get themselves a website, that is why we have come up with flexible pricing structures that will suit the budget of all companies, small and large.
              </p>

              <p>
                Give us a call today to discuss how we could get you started and have you up and running in a matter of days.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
