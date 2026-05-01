"use client";

import Container from "@/components/Container";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ContactAus() {

  // ✅ ONLY LOGIC ADDED
  const handleClick = (e) => {
    const form = e.currentTarget.closest("form");
    const inputs = form.querySelectorAll("input");

    let isValid = true;

    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });

    if (!isValid) {
      e.preventDefault(); // ❌ stop redirect
      alert("Please fill all fields");
    }
  };

  return (
    <section className="bg-[#090F14] pt-54.5 pb-25">
      <Container>
        {/* TITLE */}
        <h1 className="text-white text-[40px] md:text-[50px] lg:text-[60px] xl:text-[80px] font-bold uppercase leading-[1.2em] chakra">
          Start your journey today!
        </h1>

        {/* GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-[766px_1fr] gap-10 items-center mt-2.5">
          {/* LEFT SIDE */}
          <div className="">
            <p className="text-white text-[16px] lg:text-[18px] font-medium manrope leading-[1.8em] mb-5">
              Whether you want to start a new project, consult with us about how
              we can accelerate your business in the digital realm, or simply
              ask us a question or two, you can rely on High Jump Digital to
              deliver a best-in-class service.
            </p>

            {/* FORM */}
            <form className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent border-b border-white text-[#10C8F0] text-[18px] manrope font-medium p-3 outline-none placeholder:text-[#10C8F0]"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-b border-white text-[#10C8F0] text-[18px] font-medium p-3 manrope outline-none placeholder:text-[#10C8F0]"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full bg-transparent border-b border-white text-[#10C8F0] text-[18px] font-medium p-3 manrope outline-none placeholder:text-[#10C8F0]"
              />

              <input
                type="text"
                placeholder="Describe your project or ask a question"
                className="w-full bg-transparent border-b border-white text-[#10C8F0] text-[18px] font-medium  p-3 manrope outline-none placeholder:text-[#10C8F0]"
              />

              <Link href="/thankyou">
                <button
                  type="button"
                  onClick={handleClick}
                  className="mt-6 border border-[#10C8F0] px-7.5 cursor-pointer py-2.5 rounded-full text-white chakra text-[18px] font-bold hover:bg-[#10C8F0] hover:text-black transition"
                >
                  LET’S GO!
                </button>
              </Link>
            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8 p-2.5">
            <div className="flex items-center gap-4 chakra text-[#10C8F0] text-[18px] lg:text-[24px] font-bold">
              <Phone size={24} className="text-[#10C8F0] shrink-0" />
              <a href="tel:+61863431727">+61 8 6343 1727</a>
            </div>

            <div className="flex items-center gap-4 chakra text-[#10C8F0] text-[18px] lg:text-[24px] font-bold">
              <Mail size={24} className="text-[#10C8F0] shrink-0" />
              <a href="mailto:admin@highjumpdigital.com">
                admin@highjumpdigital.com
              </a>
            </div>

            <div className="flex items-center gap-4 chakra text-[#10C8F0] text-[18px] lg:text-[24px] font-bold lg:max-w-94">
              <MapPin size={24} className="text-[#10C8F0] shrink-0" />
              <p>
                Suite 110, 50 St Georges Terrace, Perth, Western Australia,
                6000, Australia
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}