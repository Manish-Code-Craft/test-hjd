"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function ContactFormPopup({ isOpen, onClose }) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
    router.push("/thankyou");
  };

  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-[#020A12] text-white px-6">

      <button
        onClick={onClose}
        className="absolute top-6 right-6 cursor-pointer border border-[#10C8F0] rounded-md p-2 hover:bg-[#10C8F0]/10 transition"
      >
        <X className="w-5 h-5 text-[#10C8F0]" />
      </button>

      <div className="w-full max-w-150 p-2.5">

        <h1 className="text-[40px] md:text-[65px] font-bold uppercase leading-[1.2em] text-white mb-10 chakra">
          START YOUR JOURNEY TODAY!
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Name"
            required
            className="w-full bg-transparent border-b border-white text-[#10C8F0] text-[18px] manrope font-medium p-3 outline-none placeholder:text-[#10C8F0]"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="w-full bg-transparent border-b border-white text-[#10C8F0] text-[18px] font-medium p-3 manrope outline-none placeholder:text-[#10C8F0]"
          />

          <input
            type="tel"
            placeholder="Phone"
            required
            className="w-full bg-transparent border-b border-white text-[#10C8F0] text-[18px] font-medium p-3 manrope outline-none placeholder:text-[#10C8F0]"
          />

          <input
            type="text"
            placeholder="Describe your project or ask a question"
            required
            className="w-full bg-transparent border-b border-white text-[#10C8F0] text-[18px] font-medium p-3 manrope outline-none placeholder:text-[#10C8F0]"
          />

          <button
            type="submit"
            className="border border-[#10C8F0] cursor-pointer px-7.5 py-2.5 rounded-full text-white chakra text-[18px] font-bold hover:bg-[#10C8F0] hover:text-black transition"
          >
            LET’S GO!
          </button>

        </form>
      </div>
    </div>
  );
}