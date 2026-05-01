"use client";

import Link from "next/link";
import { ArrowRight, X } from "lucide-react";

const services = [
  { name: "SEO", href: "/seo" },
  { name: "GOOGLE ADS", href: "/google-ads" },
  { name: "FACEBOOK ADS", href: "/facebook-ads" },
  { name: "WEB DESIGN", href: "/web-design" },
  { name: "AI CHATBOTS", href: "/ai-chatbots" },
];

export default function ServiceMenuPopup({ isOpen, onClose }) {
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
      <div className="w-full max-w-xl py-10 px-6 sm:px-6 relative z-10">
        <ul className="space-y-6">
          {services.map((service, index) => (
            <li key={index}>
              <Link
                href={service.href}
                onClick={onClose}
                className="group flex items-center justify-between text-[22px] sm:text-[28px] lg:text-[30px] chakra font-bold uppercase tracking-wide leading-tight"
              >
                <span className="group-hover:text-[#10C8F0] transition">
                  {service.name}
                </span>

                <ArrowRight className="w-5 h-5 text-[#10C8F0] transform transition group-hover:translate-x-2" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
 
    </div> 
  );
}