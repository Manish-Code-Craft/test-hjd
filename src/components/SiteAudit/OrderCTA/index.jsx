"use client";

import Image from "next/image";
import { useState } from "react";
import ContactFormPopup from "@/components/ContactFormPopup";

export default function OrderCTA() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-12.5 px-5 bg-[#f4f8fe] text-white">
        <div className="max-w-300 mx-auto">
          <div
            className="rounded-[5px] p-17.5 text-center bg-cover bg-center"
            style={{
              backgroundImage: "url('/siteaudit/sparkelbg.jpg')",
            }}
          >
            <h2 className="chakra text-[60px] md:text-[90px] font-bold uppercase leading-[1em]">
              ORDER NOW!
            </h2>

            <div className="flex justify-center my-5">
              <Image
                src="/siteaudit/cost.png"
                alt="underline"
                width={450}
                height={12}
                className="w-full max-w-112.5"
              />
            </div>

            <h3 className="flex items-center justify-center gap-4 text-[30px] md:text-[40px] lg:text-[64px] leading-[1em] chakra font-bold">
              <span>COST</span>

              <span className="relative inline-flex items-center">
                <span className="text-[37px] leading-none mr-1 lg:mt-2.5 xl:mt-4.5">£</span>
                <span className="leading-none">399</span>

                <span className="absolute left-0 right-0 top-[45%] h-1.25 bg-[#10C8F0]"></span>
              </span>
            </h3>

            <h2 className="chakra text-[60px] md:text-[90px] font-bold uppercase text-white leading-[1em]">
              FREE
            </h2>

            {/* Button */}
            <div className="mt-5">
              <button
                onClick={() => setIsOpen(true)}
                className="chakra text-[20px] md:text-[30px] font-semibold rounded-[100px] cursor-pointer border-2 border-[#10C8F0] px-10 py-5 leading-[1em] text-white bg-[#10C8F0] hover:bg-transparent hover:text-[#10C8F0] transition"
              >
                ORDER VIDEO
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <ContactFormPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
