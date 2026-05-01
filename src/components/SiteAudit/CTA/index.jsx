"use client";

import { useState } from "react";
import ContactFormPopup from "@/components/ContactFormPopup";

export default function CTA() {
  const [contactFormOpen, setContactFormOpen] = useState(false);

  return (
    <>
      <section className="bg-[#F4F8FE]">
        <div className="max-w-300 mx-auto px-4 sm:px-6 md:px-5">
          <div className="bg-[#10C8F0] rounded-[10px] py-12 px-5 text-center -mt-53.25 z-10 relative">
            
            {/* Heading */}
            <h2 className="chakra text-[36px] md:text-[47px] font-bold uppercase leading-[1.6em] text-black mb-6">
              Simply Enter Your Website to Get Started
            </h2>

            {/* Input */}
            <div className="px-5 md:px-10">
              <input
                type="url"
                placeholder="https://your-website-here.com"
                className="w-full bg-white text-black text-[16px] md:text-[22px] manrope font-medium text-center rounded-full px-6 py-5 outline-none"
              />

              {/* Error */}
              <p className="text-red-500 mt-2 hidden">
                Please Enter a valid Url
              </p>

              {/* Button */}
              <button
                type="button"
                onClick={() => setContactFormOpen(true)}
                className="mt-5  px-12.5 py-2 text-[24px] md:text-[33px] chakra font-semibold border-3 border-black rounded-[100px] cursor-pointer bg-transparent text-black"
              >
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Popup */}
      <ContactFormPopup
        isOpen={contactFormOpen}
        onClose={() => setContactFormOpen(false)}
      />
    </>
  );
}