"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

const contacts = [
  { name: "AUSTRALIA", href: "/contact-us-aus" },
  { name: "UNITED KINGDOM", href: "/contact-us-uk" },
  { name: "THAILAND", href: "/contact-us-th" },
];

export default function ContactMenuPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-9999 min-h-130 xl:min-h-screen bg-[#020A12] text-white flex items-center justify-center lg:p-10">

      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-24 right-9 xl:top-6 xl:right-6 z-9999 border border-[#10C8F0] rounded-md p-2 hover:bg-[#10C8F0]/10 transition cursor-pointer"
      >
        <X className="w-5 h-5 text-[#10C8F0]" />
      </button>

      {/* CONTENT */}
      <div className="w-full max-w-xl py-10 px-6 relative z-10">
        <ul className="space-y-10">

          {contacts.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between text-[28px] lg:text-[30px] chakra font-bold uppercase leading-[1em] tracking-wide"
              >
                <span className="group-hover:text-[#10C8F0] transition">
                  {item.name}
                </span>

                <ArrowRight className="w-6 h-6 text-[#10C8F0] transform transition group-hover:translate-x-2" />
              </Link>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
}