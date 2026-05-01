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
        <div className="flex flex-col md:flex-row justify-between items-center space-y-5">
          <h1 className="font-bold uppercase chakra text-white text-[36px] lg:text-[60px] xl:text-[80px] leading-[1.1] sm:leading-[1.1] md:leading-[1.2em] sm:tracking-[0.32px]">
            AI Chatbots
          </h1>
          <h4 className="chakra text-[18px] sm:text-[24px] uppercase text-[#10C8F0] font-extrabold sm:text-end">
            Local Business Lead Generation
          </h4>
        </div>
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
                Round-the-Clock Engagement: Your AI Chatbot is available 24/7,
                ensuring every potential lead is captured.
              </p>

              <p>
                Customised with Your Business Info: Equipped with your
                business’s details, your AI Chatbot answers all lead queries
                comprehensively.
              </p>

              <p>
                Efficient Lead Management: Expertly captures and channels
                inquiries, boosting engagement and user experience.
              </p>

              <p>
                Higher Conversion Potential: Personalised interactions foster
                deeper understanding and nurturing of prospects.
              </p>
              <p>
                Seamless CRM Integration: Direct connection with your CRM,
                making client interactions more streamlined.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
