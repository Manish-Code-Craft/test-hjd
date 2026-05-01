"use client";

import Container from "@/components/Container";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import ContactFormPopup from "@/components/ContactFormPopup"; // adjust path

export default function CTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="bg-[#00D4F4]">
        <Container>
          <div className="py-25">
            <div className="flex flex-col items-center justify-between gap-6 text-left lg:flex-row">
              <div>
                <h2 className="xl:text-[64px] text-[50px] text-center font-black chakra uppercase leading-[1.3em] tracking-[0.32px] text-black sm:text-5xl">
                  WANT TO WORK TOGETHER?
                </h2>
              </div>

              {/* ✅ CHANGED: Link → button */}
              <button
                onClick={() => setOpen(true)}
                className="group inline-flex items-center cursor-pointer gap-5 lg:justify-center chakra leading-[1.3em] tracking-[-0.135px] rounded-full border-2 border-black bg-transparent px-6 py-3 sm:px-7 sm:py-3.5 lg:px-8 lg:py-4 xl:px-8 xl:py-4 text-[20px] sm:text-[24px] lg:text-[18px] xl:text-[32px] font-bold uppercase text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-[#10C8F0]"
              >
                <span className="transition-all duration-300 ease-in-out">
                  GET STARTED
                </span>

                <ArrowRight className="h-5 w-5 sm:h-6 -ml-1.25 sm:w-6 lg:h-7 xl:h-8 xl:w-8 transition-all duration-300 ease-in-out group-hover:ml-1.25" />
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ✅ POPUP */}
      <ContactFormPopup
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}