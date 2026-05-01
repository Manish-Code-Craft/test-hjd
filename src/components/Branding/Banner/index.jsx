"use client";

import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";

export default function BrandingBanner() {
  return (
    <section className="bg-[#090F14] pt-54.5 pb-25">
      <Container>
         
          <div>
            <h1 className="text-white text-[40px] sm:text-[60px] xl:text-[80px] font-bold uppercase leading-[1.2em] chakra">
              BRANDING
            </h1>
          </div>
          <div className="flex items-center">
          <div className="grid lg:grid-cols-[320px_1fr] xl:grid-cols-[358px_1fr] gap-5 w-full">
            <div>
              <ul className="mt-8 space-y-3 text-[#10C8F0] text-[18px] max-w-60 chakra font-bold tracking-wide sm:tracking-[0.32px]">
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
                    href="/branding"
                    className="flex items-center justify-between"
                  >
                    BRANDING <ArrowRight size={20} />
                  </a>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE CONTENT */}
            <div className="text-[14px] md:text-[18px] manrope leading-[1.8em] font-medium text-white space-y-5 mt-3">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius arcu vel venenatis iaculis. Donec pharetra semper vulputate. Quisque vulputate eros eget arcu interdum, nec lacinia felis sagittis.
              </p>

              <p>
               Fusce gravida quam sit amet pulvinar mattis. Sed vulputate nibh a mauris facilisis, sit amet finibus dolor ornare. Phasellus a elit molestie, vestibulum magna nec, mollis magna. Duis pellentesque, lorem ac finibus egestas, enim ex hendrerit ipsum, vel imperdiet turpis nunc a ipsum. Nulla lorem dui, lacinia eget leo non, consequat varius velit.
              </p>
            </div>
          </div>
          </div>
 

       
      </Container>
    </section>
  );
}